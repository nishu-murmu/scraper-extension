const scrapperConfigs = {
    "couponDunia": {
        preprocess() {
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
        },
        isVerified: "div > div > .offer-tag-block > .verified-tag",
        peopleUsed: "div > div > .offer-tag-block > .used-tag",
        heading: "div > div > .offer-details-flexbox > div .offer-title",
        description: "div > div > .offer-details-flexbox > div .offer-desc",
        details: "div > .card-content-bottom > div > span > ol"
    },
    "grabOn": {
        preprocess() {
            cards = document.querySelectorAll(".gmc-list > li")
            cards.forEach((card) => {
                const showDetailsButton = card.querySelector(
                    "div > ul > .c-show-det"
                )
                showDetailsButton.click()
            })

        },
        isVerified: "div > div > .gcbr-r > p > .verified",
        peopleUsed: "div > div > .gcbr-r > p > .usr",
        heading: "div > .gcbr > .bank >span",
        description: "div > .gcbr > p",
        details: "div > .gcb-det > ul"
    }
}
