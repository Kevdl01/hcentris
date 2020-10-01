# Centris Web Scraper

## Instructions

To build the image run 

```
docker build -t scraper/scraper:latest -f docker/Dockerfile . 
```

Installation

```
docker container run --rm -it -v /${PWD}:${PWD} -w /${PWD} scraper/scraper:latest npm i
```

To get the listing run 

```
docker container run --rm -it -v /${PWD}:${PWD} -w /${PWD} scraper/scraper:latest npm start
```