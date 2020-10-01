const $ = require('cheerio')
const puppeteer = require('puppeteer')

const detailinfo = require('./detailinfo')

async function boot() {
  try {
      process.setMaxListeners(0)
      const browser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox']
      })
      const page = await browser.newPage()
      await page.goto('https://www.centris.ca/en/houses~for-sale~montreal-island?uc=1&view=Thumbnail', { waitUntil: 'domcontentloaded' })
      const render = await page.content()
      
      await browser.close()

      return { render, page }
  } catch(e) {
      console.log(e)
  }
}

async function start() {
  return await boot()
}

const fetchListing = function(url, baseUrl) {
  Promise.resolve(start()).then(function(html) {
    const page = html['render']
    const dom = html['page']

    const properties = []
    const links = $('#divMainResult > .thumbnailItem > .shell > a.a-more-detail', page)
    
    try { 
        for (let i = 1; i <= links.length; i++) {
          const link = $(links[i]).attr('href')
  
          if (link !== undefined && link.includes('condominium') !== true) {
            properties.push(link)
          }
          
        }
    } catch(e) { console.log(e) }

    properties.map(function(uri) {
      console.log(uri)
      // detailinfo(`${baseUrl}${uri}`)
    })
  }, function(err) {
    console.log(err)
  })
}

module.exports = fetchListing
