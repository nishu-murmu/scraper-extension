let url, cards
chrome.runtime.sendMessage({ action: "content" }, (response) => {
  url = response.url
})

function getScrapedData(key) {
  scrapperConfigs[key].preprocess()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultData = scrapeData({config: scrapperConfigs[key], key})
      if (resultData) resolve(resultData)
      else reject("No Data scraped!")
    }, 2000)
  })
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "from-popup") {
    const key = Object.keys(scrapperConfigs).filter((key) => url.includes(key.toLowerCase()))
    getScrapedData(key)
      .then((result) => {
        sendResponse(result)
        scrapperConfigs[key]?.postprocess()
      })
      .catch((err) => {
        console.error(err)
        sendResponse(null)
      })
    // return true to indicate that sendResponse will be called asynchronously
    return true
  }
})