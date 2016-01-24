
var newTextElements = [];
document.addEventListener('DOMContentLoaded', function() {
  var addButton = document.getElementById('add');

  addButton.addEventListener('click', function() {
    //window.open('https://www.facebook.com','_blank');
    addWord();
    // getAllKeys(newTextElements);

  }, false);

  // var settingsButton = document.getElementById('settings');
  // settingsButton.addEventListener('click', function() {

  //   window.open('options.html','_blank');

  // }, false);

}, false);

function addWord() {
  var word = document.getElementById('wordToReplace').value;
  var replacement = document.getElementById('replacementWord').value;
  console.log(word);
  var inputObj = Object();
  inputObj[word] = replacement;
  console.log(inputObj);
  chrome.storage.sync.set(inputObj, function() {
    // Notify that we saved.
    console.log('custom words saved');
  });
}
