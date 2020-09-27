const rp = require('request-promise')
const $ = require('cheerio')

const detailinfo = require('./detailinfo')

const fetchListing = function(url, baseUrl) {
  const options = {
    url: url,
    timeout: 18000
  }
  
  rp(options)
    .then(function(html) {
      const properties = []
      const links = $('#divMainResult > .thumbnailItem > .shell > a.a-more-detail', html)
  
      try { 
        for (let i = 1; i <= links.length; i++) {
          const link = $(links[i]).attr('href')
  
          if (link !== undefined && link.includes('condominium') !== true) {
            properties.push(link)
          }
          
        }
      } catch(e) { console.log(e) }
  
      console.log(properties)
  
      properties.map(function(uri) {
        detailinfo(`${baseUrl}${uri}`)
      })
    })
    .catch(function(error) { console.log(error) })
}

module.exports = fetchListing