let cards
const preprocess = () => {
    const loadMoreButton = document.querySelector(".load-more-offers")
    if (loadMoreButton) {
        loadMoreButton.click()
    }
    setTimeout(() => {
        cards = document.querySelectorAll(".ofr-card-wrap")
        cards.forEach((card) => {
            const showDetailsButton = card.querySelector(
                "div > .bottom-action-bar .slide-down-tag"
            )
            showDetailsButton.click()
        })
    }, 1000)
}
function scrapeData() {
    const result = []
    cards = document.querySelectorAll(".ofr-card-wrap")
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

        let detailsList = []
        const details = card.querySelector(
            "div > .card-content-bottom > div > span > ol"
        )
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
        result.push(obj)
    })
    return result
}

function getScrapedData() {
    preprocess()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const resultData = scrapeData()
            console.log(resultData, "resultData")
            if (resultData) resolve(resultData)
            else reject("No Data scraped!")
        }, 2000)
    })
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.type === "from-popup") {
        getScrapedData().then((result) => {
            sendResponse(result);
        }).catch((err) => {
            console.error(err);
            sendResponse(null);
        });
        // return true to indicate that sendResponse will be called asynchronously
        return true;
    }
});
