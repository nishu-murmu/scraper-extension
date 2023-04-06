
chrome.runtime.sendMessage({ message: 'content' }, (response) => {
    console.log(response.message)
})
