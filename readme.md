# Centris Web Scraper

## Instructions

Installation

```
docker container run --rm -it -v /${PWD}:${PWD} -w /${PWD} scraper/scraper:latest npm i
```

To get the listing run 

```
docker container run --rm -it -v /${PWD}:${PWD} -w /${PWD} scraper/scraper:latest npm start
```