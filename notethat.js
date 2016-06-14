self.on("context", function(){'+
             "    return 'Search MDN for \"'+window.getSelection().toString()+'\"';"+
             '});'+
             'self.on("click", function(){'+
             '   self.postMessage(window.getSelection().toString());'+
             '});'
