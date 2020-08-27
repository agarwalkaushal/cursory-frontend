chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.message == "showcontentdialog") {

    summary = request.result.replace(/"/g, '\'');
    summary = summary.replace(/'/g, "\\'");

    var code = 
    'wrapperDiv = document.createElement("div");\
    wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.35; height: 100%; width: 100%;");\
    iframeElement = document.createElement("iframe");\
    iframeElement.setAttribute("style","width: 100%; height: 100%;");\
    wrapperDiv.appendChild(iframeElement);\
    modalDialogParentDiv = document.createElement("div");\
    modalDialogParentDiv.setAttribute("style","position: absolute; width: 500; border: 1px solid rgb(51, 102, 153); padding: 50px; margin: 100px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 100px;");\
    modalDialogSiblingDiv = document.createElement("div");\
    modalDialogHeading = document.createElement("h1");\
    modalDialogHeading.innerHTML = "Top highlights & Summary"+"<br><br>";\
    modalDialogHeading.setAttribute("style" , "text-align:center");\
    modalDialogTextDiv = document.createElement("div");\
    modalDialogTextDiv.setAttribute("style" , "text-align:justify");\
    modalDialogTextSpan = document.createElement("span"); \
    modalDialogText = document.createElement("p"); \
    modalDialogText.setAttribute("style","font-size:40");\
    modalDialogText.innerHTML = "' + summary + '";\
    breakElement = document.createElement("br"); \
    modalDialogTextSpan.appendChild(modalDialogText);\
    modalDialogTextDiv.appendChild(modalDialogTextSpan);\
    modalDialogTextDiv.appendChild(breakElement);\
    modalDialogTextDiv.appendChild(breakElement);\
    modalDialogSiblingDiv.appendChild(modalDialogHeading);\
    modalDialogSiblingDiv.appendChild(modalDialogTextDiv);\
    modalDialogParentDiv.appendChild(modalDialogSiblingDiv);\
    document.body.appendChild(wrapperDiv);\
    document.body.appendChild(modalDialogParentDiv);'

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(null,
      {
        code: code
      });
    });
  }
});