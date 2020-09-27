const fetchListing = require('./src/fetchlisting') 

const baseUrl = 'https://www.centris.ca'
const url = `${baseUrl}/en/houses~for-sale~montreal-island?uc=1&view=Thumbnail`

fetchListing(url, baseUrl) 