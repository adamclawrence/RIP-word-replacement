
var newTextElements = [];
document.addEventListener('DOMContentLoaded', function() {
  var addButton = document.getElementById('add');

  addButton.addEventListener('click', function() {
    //window.open('https://www.facebook.com','_blank');
    addWord();
    getAllKeys(newTextElements);

  }, false);

  // var settingsButton = document.getElementById('settings');
  // settingsButton.addEventListener('click', function() {

  //   window.open('options.html','_blank');

  // }, false);

}, false);

function addWord() {
var word = document.getElementById('wordToReplace').textContent;
var replacement = document.getElementById('replacementWord').textContent;
console.log(word);
    chrome.storage.sync.set({word : replacement}, function() {
          // Notify that we saved.
          console.log('custom words saved');
        });

}
