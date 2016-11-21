var textNode, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false);

self.port.on("getPrefs", function(getPrefs) {
	var ffs1 = getPrefs.tinyHandedName;

	var combined = getPrefs.tinyHandedHonorific+" "+getPrefs.tinyHandedName; 
	var lgsg = getPrefs.letsGetSoGreat;
	var renameSidekick = getPrefs.renameSidekick;

	while(textNode=walk.nextNode()) {
		textNode.nodeValue = textNode.nodeValue.replace(/President Trump/ig, combined);
		textNode.nodeValue = textNode.nodeValue.replace(/Trump/g, combined);
		textNode.nodeValue = textNode.nodeValue
			.replace(/President-elect Trump/ig, lgsg)
			.replace(/President-elect Donald Trump/ig, lgsg)
			.replace(/President-elect/ig, lgsg);

		if (renameSidekick) {
			var sidekickName  = getPrefs.sidekickName;
			var sidekickCombo = getPrefs.sidekickHonorific+" "+sidekickName;

			textNode.nodeValue = textNode.nodeValue
				.replace(/Vice President Pence/ig, sidekickCombo)
				.replace(/Vice President Mike Pence/ig, sidekickCombo);

			textNode.nodeValue = textNode.nodeValue
				.replace(/Mike Pence/ig, sidekickName)
				.replace(/Pence/ig, sidekickName);		
		}
	}
});
