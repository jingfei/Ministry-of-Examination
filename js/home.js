(function() {
	document.getElementById("dialog-title").addEventListener("click", function() {
		document.getElementById("dialog-title").style.display = "none";
		document.getElementById("dialog-content").style.display = "block";
	});
	document.getElementsByClassName("glyphicon-remove")[0].addEventListener("click", function() {
		document.getElementById("dialog-title").style.display = "block";
		document.getElementById("dialog-content").style.display = "none";
	});
})();

