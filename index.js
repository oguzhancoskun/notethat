var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");
var preferences = require("sdk/simple-prefs").prefs;
var self = require("sdk/self");


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
    image: self.data.url("icon-16.png"),
    onMessage: function(text){
        var Request = require("sdk/request").Request;
        var key = require('sdk/simple-prefs').prefs['key'];
        var qui = Request({
          url: "http://nt.zproc.org/hook.php?key="+key+"&data="+text,
        });
         qui.get();
    }
});




