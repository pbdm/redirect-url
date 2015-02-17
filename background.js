var open = true;

chrome.browserAction.setBadgeText({
  text: String(open)
});

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  if (details.url == "http://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js") {
    return {
      redirectUrl: "http://ajax.microsoft.com/ajax/jquery/jquery-1.6.3.min.js?baidu.com"
    };
  }
  if (open) {
    if (details.url.indexOf("baidu.com") < 0) {
      return {
        redirectUrl: details.url + "?baidu.com"
      };
    }
    chrome.browserAction.setBadgeText({
      text: String(open)
    });
  }
}, {
  urls: ["<all_urls>"]
}, ["blocking"]);

chrome.browserAction.onClicked.addListener(function() {
  open = !open;
  chrome.browserAction.setBadgeText({
    text: String(open)
  });
});
