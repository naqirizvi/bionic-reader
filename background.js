// background.js
chrome.runtime.onInstalled.addListener(() => {  
    chrome.storage.sync.set({behave: 0});
    chrome.storage.sync.set({logo: true});
});