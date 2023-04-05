console.log("check from content scripting")

let resetButton = document.getElementById("reset")
resetButton.addEventListener("click", () => {
    console.log("check this out please")
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log(tabs)
  })
})
