const rp = require('request-promise')
const $ = require('cheerio')

const { createJSON } = require('./utils')

const detailinfo = function() {

    // rp(url).then(function(html) {
    //     const address = $('article#overview.content-views .address h2', html).html()
    //     const price = $('article#overview.content-views .price #BuyPrice', html).html()
    //     const rooms = $('article#overview.content-views .piece', html).html().trim()
    //     const bedrooms = $('article#overview.content-views .cac', html).html().trim()
    //     const bathrooms = $('article#overview.content-views .sdb', html).html().trim()
    //     let lotArea = $('article#overview .carac-container', html).next().next().html()
    //     lotArea = $(lotArea).children().html()
    //     let year = $('article#overview .carac-container', html).next().html()
    //     year = $(year).children().html()
    //     const lat = $('meta[itemprop="latitude"]', html).attr('content')
    //     const long = $('meta[itemprop="longitude"]', html).attr('content')
    //     const uuid = $('.sharethis', html).attr('data-mlsnumber')

    //     const json = {
    //         address: address,
    //         price: price,
    //         rooms: rooms,
    //         bedrooms: (bedrooms === null) ? 0 : bedrooms,
    //         bathrooms: (bathrooms === null) ? 0 : bathrooms,
    //         lotArea: lotArea,
    //         year: year,
    //         location: {
    //             lat: lat,
    //             long: long
    //         }
    //     }

    //     createJSON(`./data/${uuid}.json`, json)
        
    // })
}
module.exports = detailinfo