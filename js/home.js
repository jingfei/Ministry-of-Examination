var lastTop = 0;
var section = 1;
var canScroll = true;

(function() {
	document.getElementById("dialog-title").addEventListener("click", function() {
		document.getElementById("dialog-title").style.display = "none";
		document.getElementById("dialog-content").style.display = "block";
	});
	document.getElementById("dialog-content-title").addEventListener("click", function() {
		document.getElementById("dialog-title").style.display = "block";
		document.getElementById("dialog-content").style.display = "none";
	});
})();

