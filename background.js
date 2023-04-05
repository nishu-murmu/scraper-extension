console.log("background running")

// let intervalId = -1
// let duration
//
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "start") {
//         duration = request.duration
//         if (intervalId === -1) {
//             intervalId = setInterval(() => {
//                 duration -= 1000
//                 let minutes = Math.floor(duration / (1000 * 60))
//                 let seconds = Math.floor((duration % (1000 * 60)) / 1000)
//                 chrome.storage.local.set({ value: `${minutes}:${seconds}` })
//                 sendResponse({ value: `${minutes}:${seconds}` })
//             }, 1000)
//         }
//     } else if (request.action === "pause") {
//         clearInterval(intervalId)
//         intervalId = -1
//     }
// })
//
// chrome.storage.local.get(["value"], (result) => {
//     if (result.value) {
//         const storedValue = result.value.split(":").map((item) => Number(item))
//         duration = storedValue[0] * 60 * 1000 + storedValue[1] * 1000
//     } else {
//         duration = 25 * 60 * 1000
//         chrome.storage.local.set({ value: "25:00" })
//     }
// })
