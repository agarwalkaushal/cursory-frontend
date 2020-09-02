chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.message == "showcontentdialog") {

    summary = request.result.replace(/"/g, '\'');
    summary = summary.replace(/'/g, "\\'");

    highlights = summary.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
    highlight1 = highlights[0]
    highlight2 = highlights[1]
    highlight3 = highlights[2]
    summary_new = ''

    for(var i = 3; i < highlights.length ; i++) {
      summary_new += highlights[i]
  }

  enjoyText = "Hope you enjoyed using Cursory &#128512;"
  shareTextHeading = "Share your experience"
  shareText = "Hey, I just tried Cursory and it\'s awesome. I am able to save quite a chunk of time by just reading important bits #cursory #extension Get yours now: "
  shareUrl = "https://chrome.google.com/webstore/detail/cursory/amgfboeejnbcpdefphengjeolnfocogp?hl=en"
    // linkedin, reddit,

    var code = 
    'shareDialogTwitterLink = document.getElementsByTagName("link");\
    shareDialogTwitterLink[0].setAttribute("rel", "canonical");\
    shareDialogTwitterLink[0].setAttribute("href", "' + shareUrl + '");\
    window.twttr = (function(d, s, id) {\
        var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};\
        if (d.getElementById(id)) return t;\
        js = d.createElement(s); js.id = id;\
        js.src = "https://platform.twitter.com/widgets.js";\
        fjs.parentNode.insertBefore(js, fjs);\
        t._e = [];\
        t.ready = function(f) {\
            t._e.push(f); };\
            return t;\
        }(document, "script", "twitter-wjs"));\
    (function(d, s, id) {\
        var js, fjs = d.getElementsByTagName(s)[0];\
        if (d.getElementById(id)) return;\
        js = d.createElement(s); js.id = id;\
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";\
        fjs.parentNode.insertBefore(js, fjs);\
        }(document, "script", "facebook-jssdk"));\
      var linkedInScript = document.createElement("script");\
      linkedInScript.setAttribute("src" , "https://platform.linkedin.com/in.js");\
      linkedInScript.setAttribute("type", "text/javascript");\
      linkedInScript.innerHTML = "lang: en_US";\
      wrapperDiv = document.createElement("div");\
      wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.35; height: 100%; width: 100%;");\
      iframeElement = document.createElement("iframe");\
      iframeElement.setAttribute("style","width: 100%; height: 100%;");\
      wrapperDiv.appendChild(iframeElement);\
      modalDialogParentDiv = document.createElement("div");\
      modalDialogParentDiv.setAttribute("style","position: absolute; width: 500; border: 1px solid rgb(51, 102, 153); padding: 50px; margin: 100px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 100px;");\
      modalDialogSiblingDiv = document.createElement("div");\
      modalDialogHeading = document.createElement("h3");\
      modalDialogHeading.innerHTML = "Top highlights & Summary"+"<br>";\
      modalDialogHeading.setAttribute("style" , "text-align:center");\
      modalDialogTextDiv = document.createElement("div");\
      modalDialogTextDiv.setAttribute("style" , "text-align:justify");\
      modalDialogTextSpan = document.createElement("span"); \
      modalDialogText = document.createElement("p"); \
      modalDialogText.setAttribute("style","font-size:40");\
      modalDialogText.innerHTML = "<mark>' + highlight1 + ' ' + highlight2 + ' ' + highlight3 + ' ' + '</mark>' + summary_new + '";\
      breakElement = document.createElement("br"); \
      modalDialogFooter = document.createElement("p");\
      modalDialogFooter.innerHTML = "*****"+"<br>"+"' + enjoyText + '"+"<br>"+"' + shareTextHeading + '"+"<br>";\
      modalDialogTextSpan.appendChild(modalDialogText);\
      modalDialogTextDiv.appendChild(modalDialogTextSpan);\
      modalDialogTextDiv.appendChild(breakElement);\
      modalDialogTextDiv.appendChild(breakElement);\
      shareDialogParentDiv = document.createElement("div");\
      shareDialogParentDiv.setAttribute("style" , "flex-direction: row;display: flex;justify-content: center;align-items: center;");\
      shareDialogTwitter = document.createElement("a");\
      shareDialogTwitter.setAttribute("class", "twitter-share-button");\
      shareDialogTwitter.setAttribute("target", "_blank");\
      shareDialogTwitter.setAttribute("href", "https://twitter.com/intent/tweet?text=' + shareText + '");\
      shareDialogTwitter.innerHTML = "Tweet";\
      shareDialogFacebookDiv = document.createElement("div");\
      shareDialogFacebookDiv.setAttribute("style" , "margin-left: 5px;margin-right: 5px");\
      shareDialogFacebookDiv.setAttribute("class", "fb-share-button");\
      shareDialogFacebookDiv.setAttribute("href", "' + shareUrl + '");\
      shareDialogFacebookDiv.setAttribute("data-layout", "button");\
      shareDialogFacebookDiv.setAttribute("data-size", "small");\
      shareDialogFacebook = document.createElement("a");\
      shareDialogFacebook.setAttribute("class", "fb-xfbml-parse-ignore");\
      shareDialogFacebook.setAttribute("target", "_blank");\
      shareDialogFacebook.setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse");\
      shareDialogFacebook.innerHTML = "Share";\
      shareDialogFacebookDiv.appendChild(shareDialogFacebook);\
      shareDialogLinkedIn = document.createElement("script");\
      shareDialogLinkedIn.setAttribute("data-url" , "' + shareUrl + '");\
      shareDialogLinkedIn.setAttribute("type", "IN/Share");\
      shareCopy = document.createElement("a");\
      shareCopy.innerHTML = "or copy url";\
      shareCopy.setAttribute("target", "_blank");\
      shareCopy.setAttribute("href" ,  "' + shareUrl + '");\
      shareCopy.setAttribute("style","font-size:14");\
      shareDialogParentDiv.appendChild(shareDialogTwitter);\
      shareDialogParentDiv.appendChild(shareDialogFacebookDiv);\
      shareDialogParentDiv.appendChild(shareDialogLinkedIn);\
      modalDialogSiblingDiv.appendChild(modalDialogTextDiv);\
      modalDialogParentDiv.appendChild(modalDialogHeading);\
      modalDialogParentDiv.appendChild(modalDialogSiblingDiv);\
      modalDialogParentDiv.appendChild(modalDialogFooter);\
      modalDialogParentDiv.appendChild(shareDialogParentDiv);\
      modalDialogParentDiv.appendChild(shareCopy);\
      document.body.appendChild(wrapperDiv);\
      document.body.appendChild(modalDialogParentDiv);\
      document.body.appendChild(linkedInScript);'

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(null,
          {
            code: code
        });
      });
  }
});