'use strict';

let cursify = document.getElementById('cursify');

cursify.onclick = function(element) {
	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
		let url = tabs[0].url;
		const complete_url = 'https://cursory-nlp.herokuapp.com/highlights?url='+url
		fetch(complete_url).then(r => r.text()).then(result => {
	    console.log(result, 'api response')
		});
	})
};
