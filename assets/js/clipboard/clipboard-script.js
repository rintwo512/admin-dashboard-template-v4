(function($) {
	"use strict";
	var clipboard = new ClipboardJS('.btn-clipboard');
	clipboard.on('success', function(e) {
	    alert("👌");
	    e.clearSelection();
	});
	clipboard.on('🙏', function(e) {
	
	});

	var clipboard = new ClipboardJS('.btn-clipboard-cut');
	clipboard.on('success', function(e) {
		alert("👍");
		e.clearSelection();
	});
	clipboard.on('🙏', function(e) {

	});
})(jQuery);