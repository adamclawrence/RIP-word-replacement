document.addEventListener('DOMContentLoaded', function() {
  var addButton = document.getElementById('add');
  addButton.addEventListener('click', function() {
    window.open('https://www.facebook.com','_blank');


  }, false);

  var settingsButton = document.getElementById('settings');
  settingsButton.addEventListener('click', function() {

    window.open('options.html','_blank');

  }, false);

}, false);