chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if (tab.url.indexOf('slack.com/') != -1) {
    chrome.pageAction.show(tabId);
    chrome.tabs.executeScript(null, {
      "file": "js/set-header-color.js"
    })
  }
});
