const fetchListing = require('./src/fetchlisting') 
const { concatenateJSON } = require('./src/utils')

const baseUrl = 'https://www.centris.ca'
const url = `${baseUrl}/en/houses~for-sale~montreal-island?uc=1&view=Thumbnail`

async function getListing() {
    await fetchListing(url, baseUrl)
    await concatenateJSON('./data', 'properties')
}

async function bootstrap() {
    return await getListing()
}

bootstrap()

