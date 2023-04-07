chrome.runtime.sendMessage({ action: "content" }, (response) => {
  console.log(response, "response")
})

function scrapeData() {
  const cards = document.querySelectorAll(".ofr-card-wrap")
  const result = []
  cards.forEach((card) => {
    let obj = {}
    const isVerified = card.querySelector(
      "div > div > .offer-tag-block > .verified-tag"
    )?.innerText
    const peopleUsed = card.querySelector(
      "div > div > .offer-tag-block > .used-tag"
    )?.innerText
    const heading = card.querySelector(
      "div > div > .offer-details-flexbox > div .offer-title"
    )?.innerText
    const description = card.querySelector(
      "div > div > .offer-details-flexbox > div .offer-desc"
    ).innerText
    obj = Object.assign(obj, {
      heading,
      description,
      isVerified,
      peopleUsed: +peopleUsed?.split(" ")[0]
        ? +peopleUsed?.split(" ")[0]
        : "null",
    })
    result.push(obj)
    console.log(obj)
  })
  console.log(result)
  return result
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "from-popup") {
    console.log("message from popup")
    const result = scrapeData()
    sendResponse(result)
  }
  return true
})
