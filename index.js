var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");

var script = 'self.on("context", function(){'+
             "    return 'Search MDN for \"'+window.getSelection().toString()+'\"';"+
             '});'+
             'self.on("click", function(){'+
             '   self.postMessage(window.getSelection().toString());'+
             '});';


var menuItem = contextMenu.Item({
    label: "Search on MDN",
    context: contextMenu.SelectionContext(),
    contentScript: script,
    onMessage: function(selectionText){
        var url = "https://google.com/search?btnI&q=site:developer.mozilla.org "+selectionText;
        url = url.replace(" ", "+");
        tabs.open(url);
    }
});
