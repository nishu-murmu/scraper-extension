console.log('background')
// creating new tab when the extension loads
chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === "install") {
        chrome.tabs.create({
            url: "src/options/onBoard.html",
        })
    }
})

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.action === "content") {
        sendResponse({ response: "receive the connection", url: sender.tab.url})
    }
})
