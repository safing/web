> **Check out the main project repository [safing/portmaster](https://github.com/safing/portmaster)**

# TL;DR

`rm -rf _site .jekyll-cache && sudo docker compose up`

# Safing Website

### Run Safing locally:

1. [Install Docker Desktop](https://www.docker.com/get-started)

2. In Docker Desktop settings untick `Use Docker Compose V2` (We currently only support V1)

3. Go to `Web` dir

#### Known Bug In Docker: https://github.com/docker/for-mac/issues/6467
if you have problems with **chown permissions**, then you will need todo run this `rm -rf _site .sass-cache .jekyll-metadata .jekyll-cache` before `docker-compose up` every time.

4. Run `docker-compose up`
5. Access the local version at http://localhost:4000

### Auto refresh not working?!
You might be blocking javascript. `livereload` injects javascript to auto reload the page.

## Supporters

[![Browserstack](/assets/img/external/logos/browserstack.svg)](http://www.browserstack.com/)

Browserstack enables us to test our designs on a multitude of devices. This helps us designing our homepage in a truly responsive way.

<!-- dummy change to trigger github pages deployment: . -->
