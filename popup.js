let cursify = document.getElementById('cursify');
let loader = document.getElementById('loader');

loader.style.display = "none";
cursify.onclick = function(element) {
	cursify.style.display = "none";
	loader.style.display = "block";
	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
		let url = tabs[0].url;
		const complete_url = 'https://cursory-nlp.herokuapp.com/highlights?url='+url
		fetch(complete_url).then(r => r.text()).then(result => {
			loader.innerHTML = "Done!"
			window.close();
			chrome.runtime.sendMessage({message: 'showcontentdialog', result: result});
		});
	})
};