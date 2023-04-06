// creating new tab when the extension loads
chrome.runtime.connect
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    chrome.tabs.create({
      url: "onboarding.html",
    })
  }
})

//getting current tab
//
async function getCurrentWindow() {
  let queryOptions = { active: true, lastFocusedWindow: true }
  let [tab] = await chrome.tabs.query(queryOptions)
  return tab
}

const getValue = async () => {
  const value = await getCurrentWindow()
}

getValue()

// making tab goes to first when the user clicks on the tab or when the new tab gets created
// chrome.tabs.onActivated.addListener(moveToFirstPosition)

async function moveToFirstPosition(activeInfo) {
  try {
    await chrome.tabs.move(activeInfo.tabId, { index: 0 })
  } catch (error) {
    if (
      error ==
      "Error: Tabs cannot be edited right now (user may be dragging a tab)."
    ) {
      setTimeout(() => moveToFirstPosition(activeInfo), 50)
    } else {
      console.error(error)
    }
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message, 'log from background script')
    sendResponse({message: "response mila hai and print in content script"})
})
