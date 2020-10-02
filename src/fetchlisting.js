const process = require('process')

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

      const url = await page.evaluate(() => {
        return { baseUrl: document.location.origin }
      })

      return { render, page, browser, url }
  } catch(e) {
      console.log(e)
  }
}

async function start() {
  return await boot()
}

const fetchListing = function() {
  Promise.resolve(start()).then(function(res) {
    const html = res['render']
    const page = res['page']
    const browser = res['browser']

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

    const baseUrl = res['url']['baseUrl']

    properties.forEach(uri => {
      console.log(`${baseUrl}${uri}`)
      // detailinfo(`${baseUrl}${uri}`)
    })

    Promise.resolve(browser.close())
      .then(() => console.log('browser closed'))
      .catch(e => console.log('error', e))
  }, function(err) {
    console.log(err)
  })
}

module.exports = fetchListing
