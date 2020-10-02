const fetchListing = require('./src/fetchlisting') 
const { concatenateJSON } = require('./src/utils')

async function getListing() {
    await fetchListing()
    await concatenateJSON('./data', 'properties')
}

async function bootstrap() {
    return await getListing()
}

bootstrap()

