;(function ($, window, document, undefined) {
jQuery.fn.limitInput = function(limit){
	return this.each(function(){
		var elem = $(this), content = elem.val();
		if(content.length > limit){
			var limit_str = content.substr(0,limit);
			$(elem).val(limit_str);
		} 
	});
};
})(jQuery, window, document );