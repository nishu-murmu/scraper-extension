document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("scrape-button").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0]
      chrome.tabs.sendMessage(
        tab.id,
        { type: "from-popup", from: tab.url },
        (response) => {
          console.log(response, "response")
        }
      )
    })
  })

  document.querySelector(".option").addEventListener("click", () => {
        console.log("check this html is clicked")
    chrome.tabs.create({
      url: "/src/options/options.html",
    })
  })
})
