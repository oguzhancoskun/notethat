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

var prefSet = require("simple-prefs");
var strPref = prefSet.prefs.stringPreference;

function onPrefChange(prefName){
  prefSet.prefs[prefName]

}

prefSet.on("username",onPrefChange);

