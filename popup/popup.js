document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("scrape-button").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0]
      chrome.tabs.sendMessage(tab.id, { type: "from-popup" }, (response) => {
        console.log(response)
      })
    })
  })
})
