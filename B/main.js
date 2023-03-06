var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var lastChecked = null;

function handleCheck(event) {
	if (event.shiftKey && lastChecked !== null) {
		var startIndex = Array.prototype.indexOf.call(checkboxes, lastChecked);
		var endIndex = Array.prototype.indexOf.call(checkboxes, this);
		var start = Math.min(startIndex, endIndex);
		var end = Math.max(startIndex, endIndex);

		for (var i = start; i <= end; i++) {
			checkboxes[i].checked = true;
		}
	}

	lastChecked = this;
}
for (var i = 0; i < checkboxes.length; i++) {
	checkboxes[i].addEventListener('click', handleCheck);
}
