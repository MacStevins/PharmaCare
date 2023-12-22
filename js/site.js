
var medicineData = null

$.getJSON('/data/medicines.json', data => {
	medicineData = data.medicines.sort((a, b) => {
		var aName = a.name.toLowerCase()
		var bName = b.name.toLowerCase()
		
		return (aName < bName) ? -1 : (aName > bName) ? 1 : 0
	});
});

$("input#search").on("input", e => {
	if(!this.value)
		return false;
	
	var searchSuggestElm = $('<div class="search-suggest"></div>')
	
	medicineData.forEach(medicine => {
		
	});
});

var waitForGlobal = function(key, callback) {
	if (window[key]) {
		callback()
	} else {
		setTimeout(() => {
			waitForGlobal(key, callback)
		}, 100)
	}
}