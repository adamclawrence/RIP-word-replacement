window.addEventListener('load', main);

var tableRef;

function main() {
    tableRef = document.getElementById('wordTable').getElementsByTagName('tbody')[0];

    // get all stored objects and pass to callback function populateTable
    chrome.storage.sync.get(null, populateTable);
}

function populateTable(wordDict) {
    console.log(wordDict);
    var badWords = Object.keys(wordDict);
    var numObjects = badWords.length;
    var newRow;
    var newCell;
    var newText;
    if (Object.keys(wordDict).length != 0) { // wtf is wrong with this language
        for (var i = 0; i < numObjects; i++) {
            newRow = tableRef.insertRow(tableRef.rows.length);

            // new left col
            newCell  = newRow.insertCell(0);
            newText  = document.createTextNode(badWords[i]);
            newCell.appendChild(newText);

            // new right col
            newCell  = newRow.insertCell(1);
            newText  = document.createTextNode(wordDict[badWords[i]]);
            newCell.appendChild(newText);
        }
    }
}