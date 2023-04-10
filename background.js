// creating new tab when the extension loads
chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === "install") {
        chrome.tabs.create({
            url: "onBoard.html",
        })
    }
})

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.action === "content") {
        sendResponse({ response: "receive the connection", id: sender.id })
    }
})
