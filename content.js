var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText = text.replace(/bitcoin/gi, 'blockchain');

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}

var logo = document.getElementsByClassName('pagename');

for (var i = 0; i < logo.length; i++) {

  for (var j = 0; j < logo[i].childNodes.length; j++) {
    var element = logo[i].childNodes[j];

    var imgURL = chrome.extension.getURL("./bitcoin.png");
    element.style.backgroundImage = "url('" + imgURL + "')";
  }
}

var menu = document.getElementsByClassName('tabmenu');
menu[0].style.left = '450px';
