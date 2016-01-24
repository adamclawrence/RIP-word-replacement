var textElements = [];
go_through_dom(document.body, textElements);
console.log(textElements.length);
var innerStr;
for (var i = 0; i < textElements.length; i++) {
    innerStr = textElements[i].nodeValue;
    console.log(innerStr);
    textElements[i].nodeValue = innerStr.replace(/\bGoogle\b/gi,'noogle');
}

function go_through_dom(node, textElements) {
    var curNode = node.firstChild

    while (curNode) {
        if (curNode.nodeType == Node.TEXT_NODE) {
            textElements.push(curNode)
        } else if (curNode.hasChildNodes()) {
            go_through_dom(curNode, textElements)
        }
        curNode = curNode.nextSibling
    }
}