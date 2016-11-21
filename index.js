var self = require("sdk/self");
var pageMod = require("sdk/page-mod");
var getPrefs = require("sdk/simple-prefs").prefs;

pageMod.PageMod({
	include: "*",
	contentScriptFile: self.data.url("replacer.js"),
	onAttach: function(worker) {
		worker.port.emit("getPrefs", getPrefs);
	}
});

// Based off/inspired by Drumpfinator https://github.com/nishanthvijayan/Drumpfinator
