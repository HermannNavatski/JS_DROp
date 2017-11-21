//dom.builder.index.js
var domBuilderIndex = (function(){
	var openCaseBtn;
	var outputItemText;
	var outputItemRareValueText;
	var chancesInfoText;
	var caseImg;
	let droppedGun;
	function init(){
		initIndex();
		caseImg.src = imgCase;
		initEvent();
	}

	function initIndex(){
		openCaseBtn = document.getElementById(openCaseBtnId);
		outputItemText = document.getElementById(outputItemId);
		outputItemRareValueText = document.getElementById(outputItemRareValueId);
		caseImg = document.getElementById(imgCaseId);		
	}
	function initEvent(){
		openCaseBtn.addEventListener(eventTypeClick, openCase);
	}

	function openCase(){
		randomValues();
		droppedGun = new Item(itemNameTicket, itemRareTicket);
		console.log(droppedGun.getItemName() + "  " + droppedGun.getImageUrl() + "    " + droppedGun.itemRareValue);
		setTimeout(setNewValues, 3000);
		setTimeout(reset, 10000);
	}

	function setNewValues(){
		caseImg.src = droppedGun.getImageUrl();
		outputItemText.innerHTML = droppedGun.getItemName();
		outputItemRareValue.innerHTML = droppedGun.getItemRareValue();
	}

	function reset(){
		window.location.href = window.location.href
	}

		return { initIndex : initIndex }; 
})();