var newTextElements = [];
function storeBadWordPairs() {
    // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'google' : 'noogle'}, function() {
          // Notify that we saved.
          console.log('Bulk settings saved');
        });
        chrome.storage.sync.set({'search' : 'notsearch'}, function() {
          // Notify that we saved.
          console.log('Bulk settings saved');
        });
}

function getAllKeys(textElements) {
    newTextElements = textElements; //hacky way to do this
    chrome.storage.sync.get(null, checkDom);
}

function checkDom(allKeys) {
    console.log(allKeys);
    var innerStr;
    for (var i = 0; i < newTextElements.length; i++) {
        innerStr = newTextElements[i].nodeValue;
        // console.log(innerStr);
        var word = Object.keys(allKeys)[0];
        console.log(word);
        // word = "google";
        var re = new RegExp(word,"gi");
        // newTextElements[i].nodeValue = innerStr.replace(/\bGoogle\b/gi,'noogle');
        newTextElements[i].nodeValue = innerStr.replace(re,allKeys[word]);
    }
}