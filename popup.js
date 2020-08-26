'use strict';

let cursify = document.getElementById('cursify');
let loader = document.getElementById('loader');

loader.style.visibility = "hidden";

cursify.onclick = function(element) {
	cursify.style.visibility = "hidden";
	loader.style.visibility = "visible";
	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
		let url = tabs[0].url;
		const complete_url = 'https://cursory-nlp.herokuapp.com/highlights?url='+url
		fetch(complete_url).then(r => r.text()).then(result => {
			loader.innerHTML = "Done!"
			chrome.runtime.sendMessage({message: 'showcontentdialog', result: result});
		});
	})
};