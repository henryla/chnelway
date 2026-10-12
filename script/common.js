
function title01_onMouseOver(obj) {
	obj.className = "title01_over";
}

function title01_onMouseOut(obj) {
	obj.className = "title01";
}

function title01_onMouseClick(obj) {
	location.href = obj.getElementsByTagName("a")[0].href;
	return true;
}