let cards = document.querySelectorAll(".ofr-card-wrap")
async function scrapeData() {
    const result = []

    const loadMoreButton = document.querySelector(".load-more-offers")

    if (loadMoreButton) {
        loadMoreButton.click()
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
            const details = card.querySelector(
                "div > .card-content-bottom > div > span > ol"
            )
            let detailsList = []
            details.childNodes.forEach((item) => detailsList.push(item.innerText))

            obj = Object.assign(obj, {
                heading,
                description,
                isVerified,
                detailsList,
                peopleUsed: +peopleUsed?.split(" ")[0]
                    ? +peopleUsed?.split(" ")[0]
                    : "null",
            })
            const showDetailsButton = card.querySelector(
                "div > .bottom-action-bar .slide-down-tag"
            )
            showDetailsButton.click()
            result.push(obj)
        })
    }
    console.log(result)
    return result
}

chrome.runtime.onMessage.addListener(async (req, sender, sendResponse) => {
    if (req.type === "from-popup") {
        const result = await scrapeData()
        sendResponse(result)
    }
})
