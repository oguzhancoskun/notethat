var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");

var script = 'self.on("context", function(){'+
             "    return 'Notethat this';"+
             '});'+
             'self.on("click", function(){'+
             '   self.postMessage(window.getSelection().toString());'+
             '});';

var menuItem = contextMenu.Item({
    label: "Notethat",
    context: contextMenu.SelectionContext(),
    contentScript: script,
    onMessage: function(selectionText){
        var Request = require("sdk/request").Request;
        var qui = Request({
          url: "http://nt.zproc.org/hook.php?data="+selectionText,
        });
         qui.get();
    }
});

var prefs = require("sdk/preferences/service");
var name = "general.useragent.locale";
prefs.get(name); // is equal to "chrome://global/locale/intl.properties"
prefs.getLocalized(name) // is equal to "en-U
