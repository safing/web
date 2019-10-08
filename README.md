# Safing Website

### Run Safing locally:

1. [Install docker](https://www.docker.com/get-started)

2. Run

```
docker-compose up
```

3. Access the local version at http://localhost:4000

To enable change detection for templates, exchange jekyll command with the following in the `docker-compose.yml` file

```
command: jekyll serve --watch --incremental --force_polling
```

