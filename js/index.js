waitForGlobal('medicineData', () => {
	medicineData.forEach(medicine => {
		var itemElm = $('<a class="item"></a>')
		var itemImgElm = $('<img class="item-img"/>')
		var itemNameElm = $('<h3 class="item-name"></h3>')
		
		itemElm.attr('href', '/Item/' + medicine.medicineID)
		itemImgElm.attr('src', medicine.imageSrc)
		itemNameElm.append(medicine.name)
		
		itemElm.append(itemImgElm)
		itemElm.append(itemNameElm)
		
		$(".item-grid").append(itemElm)
	})
})