# Centris Web Scraper

## Instructions

Installation

```
docker container run -v /${PWD}:${PWD} -w /${PWD} node:alpine npm i 
```

To get the listing run 

```
docker container run -v /${PWD}:${PWD} -w /${PWD} node:alpine node fetchlisting.js
```