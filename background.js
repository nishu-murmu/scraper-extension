// creating new tab when the extension loads
chrome.runtime.connect
chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === "install") {
        chrome.tabs.create({
            url: "onBoard.html",
        })
    }
})

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    console.log(req, "request")
    if (req.action === "content") {
        sendResponse({ response: "receive the connection", id: sender.id })
    }
})

