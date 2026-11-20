# Local development image for the Jekyll site.
# Ruby must stay on a patched release (>= 3.3.14 / 3.4.13 / 4.0.10),
# see CVE-2026-132825 ("Ruby2Shell") and the Ruby advisories of 2026-11-18.
# Pinned by digest; update tag and digest together.
FROM ruby:3.4.13-slim@sha256:03e203fab47d495a1d0046d10040db89367b361328ecd4af469f0433e2dd9ce1

# build-essential: native gem extensions (eventmachine, http_parser.rb)
# nodejs: JavaScript runtime for ExecJS/terser (used by jekyll-minifier)
RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential nodejs \
    && rm -rf /var/lib/apt/lists/*

# Unprivileged user. Match UID/GID to the host user on Linux so the
# bind-mounted source tree stays writable (see docker-compose.yml).
ARG UID=1000
ARG GID=1000
RUN groupadd --non-unique --gid "${GID}" jekyll \
    && useradd --non-unique --uid "${UID}" --gid "${GID}" --create-home --shell /usr/sbin/nologin jekyll

WORKDIR /srv/jekyll

# Gems are installed as root and are read-only for the runtime user.
COPY Gemfile Gemfile.lock ./
RUN bundle install --jobs 4

USER jekyll

EXPOSE 4000 35729

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch", "--incremental", "--livereload", "--future"]
