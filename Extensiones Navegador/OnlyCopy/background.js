chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      code: 'document.execCommand("copy");'
    });
  });
  
  chrome.commands.onCommand.addListener(function(command) {
    if (command === "copy-to-clipboard") {
      chrome.tabs.executeScript({
        code: 'document.execCommand("copy");'
      });
    }
  });
  