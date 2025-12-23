'use strict'
var on_off_pref = true;
var ext_status = true;
var behave = 0;
var logo = true;
var configOut;
var check;
function getStorageValue(key) {
    return new Promise((resolve, reject) => {
		chrome.storage.sync.get([key], function(result) {
  setTimeout(() => {
            resolve(result[key]);
        }, 200);
});
    })
}
/*
chrome.storage.onChanged.addListener(function (changes, namespace) {
	for (key in changes) {
		var storageChange = changes[key];
		on_off_pref = storageChange.newValue;
		ext_status = storageChange.newValue;
		//console.log('Storage key "%s" in namespace "%s" changed. Old value was "%s", new value is "%s".',key,namespace,storageChange.oldValue,storageChange.newValue);
	}
});*/
function bionic(logo,behave){
    function handleTextNode(textNode) {
        if( textNode.parentNode.nodeName === 'SCRIPT' 
            || textNode.parentNode.nodeName === 'STYLE'
        ) {
            return;
        }
		/*
		let para = document.querySelector('p');
		//let compStyles = window.getComputedStyle(para);
		//let computedFontWeight = compStyles.getPropertyValue('font-weight');		
		let compStyles = window.getComputedStyle(para);
		let computedFontWeight = getComputedStyle(para).getPropertyValue('font-weight');	
		var newFontWeight = Number(computedFontWeight)+200;
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = "b {font-weight:"+newFontWeight+";}";;
		document.getElementsByTagName('head')[0].appendChild(style);*/
        let origText = textNode.textContent;
		//console.log(origText);
		var buff="";
		var htmlText="";
		var words=origText.replace(/([ .,;]+)/g,'$1§sep§').split('§sep§');
		if(behave==0){
			//buff += words[i].replace(/^..../, function (match) { return '<b>'+match+'</b>';});
			const textArrTransformed = words.map((word) => {
				const length = word.length;
				const midPoint = Math.round(length / 2);
				const firstHalf = word.slice(0, midPoint);
				const secondHalf = word.slice(midPoint);
				htmlText = `<b>${firstHalf}</b>${secondHalf}`;
				return htmlText;
			});
			buff=textArrTransformed;
		}else if(behave==1){
			 const textArrTransformed = words.map((word) => {
				htmlText = word.replace(/^./, function (match) { return '<b>'+match+'</b>';});
				return htmlText;
			  });
			buff=textArrTransformed;
		}else if(behave==2){
			const textArrTransformed = words.map((word) => {
				htmlText = word.replace(/^./, function (match) { return '<b>'+match+'</b>';});
				htmlText = htmlText.replace(/([aeiou])/g, function (match) { return '<b>'+match+'</b>';});
				return htmlText;
			  });
			buff=textArrTransformed;
		}else{
			console.log('nothing');
		}
		//sentence.innerHTML = textArrTransformed.join(" ");
        if( buff !== origText) {
            let newSpan = document.createElement('span');
            newSpan.innerHTML = buff.join(" ");
            textNode.parentNode.replaceChild(newSpan,textNode);
        }
    }
	//main
	
    let allP = document.querySelectorAll('p');
    let textNodes = [];
    for (let p of allP) {
        let nodeIter = document.createNodeIterator(p,NodeFilter.SHOW_TEXT);
        let currentNode;
        while(currentNode = nodeIter.nextNode()) {
            textNodes.push(currentNode);
        }
    }
    textNodes.forEach(function(el){
        handleTextNode(el);
    });
	
	
	/*
	
    // setting up pList
    let pList;
    let option1 = document.getElementsByTagName("p");
    let option2 = document.getElementsByTagName("font");
    if (option1.length > option2.length) {
      pList = option1;
    } else {
      pList = option2;
    }
    // setting global styles
    var style = document.createElement("style");
    style.textContent = "b { font-weight: bold; !important }";
    document.head.appendChild(style);

	var htmlWord;
    // making half of the letters in a word bold
	if(behave==0){
		for (let sentence of pList) {
		  const sentenceText = sentence.innerText;
		  const textArr = sentenceText.split(" ");
		  const textArrTransformed = textArr.map((word) => {
			const length = word.length;
			const midPoint = Math.round(length / 2);
			const firstHalf = word.slice(0, midPoint);
			const secondHalf = word.slice(midPoint);
			htmlWord = `<b>${firstHalf}</b>${secondHalf}`;
			return htmlWord;
		  });
		  console.log();
		  sentence.innerHTML = textArrTransformed.join(" ");
		}
	}else if(behave==1){
		for (let sentence of pList) {
		  const sentenceText = sentence.innerText;
		  const textArr = sentenceText.split(" ");
		  const textArrTransformed = textArr.map((word) => {
			const length = word.length;
			htmlWord = word.replace(/^./, function (match) { return '<b>'+match+'</b>';});
			return htmlWord;
		  });
		  console.log();
		  sentence.innerHTML = textArrTransformed.join(" ");
		}
	}else if(behave==2){
		for (let sentence of pList) {
		  const sentenceText = sentence.innerText;
		  const textArr = sentenceText.split(" ");
		  const textArrTransformed = textArr.map((word) => {
			const length = word.length;
			htmlWord = word.replace(/^./, function (match) { return '<b>'+match+'</b>';});
			htmlWord = htmlWord.replace(/([aeiou])/g, function (match) { return '<b>'+match+'</b>';});
			return htmlWord;
		  });
		  console.log();
		  sentence.innerHTML = textArrTransformed.join(" ");
		}
	}*/
}

var readyStateCheckInterval = setInterval(function() {
if (document.readyState === "complete") {
	clearInterval(readyStateCheckInterval);
	async function showValues() {
		let behave = await getStorageValue('behave');
		//console.log(`The behave is ${behave}`);
		let logo = await getStorageValue('logo');
		//console.log(`The logo is ${logo}`);
		if(`${logo}`=="true"){
				bionic(`${logo}`,`${behave}`);
		}
	}
	showValues();
}  
}, 10);