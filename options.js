'use strict'
let selectBehave,  inputCustom, inputLogo
function loadSetting () {
  chrome.storage.sync.get(data => {
    if ('behave' in data) {
      selectBehave.selectedIndex = data.behave
	  inputLogo.checked = data.logo
	  //inputCustom.value = data.custom
	  //if (inputLogo.checked == true) {document.getElementById('divWaitCustom').style.display = 'none'}
    }
  })
}
function saveSetting () {
	chrome.storage.sync.set({
		behave: selectBehave.selectedIndex,
		//custom: inputCustom.value,
		logo: inputLogo.checked
	});
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.reload(tabs[0].id);
	});
}
document.addEventListener('DOMContentLoaded', () => {
  selectBehave = document.getElementById('selectBehave')
  //inputCustom = document.getElementById('inputCustom')
  inputLogo = document.getElementById('inputLogo')
  selectBehave.addEventListener('change', saveSetting, false)
  //inputWait.addEventListener('blur', saveSetting, false)
  //inputCustom.addEventListener('change', saveSetting, false)
  inputLogo.addEventListener('change', saveSetting, false)
  loadSetting()
}, false)