(function ($, window, document, undefined) {

	var clip = function(content, limit){
		if(content.length > limit){
			return content.substr(0,limit);
		} 
		return content;
	};
	var event = function(e, limit){
		var ele = $(this);
		var val = clip(ele.val(), limit);
		ele.val(val);
	};

	jQuery.fn.limitInput = function(limit, ele){
		var change = "input propertychange"; 
		var handle = function(e){
			event(e, limit);
		};
		if(ele){
			$(this).on(change, ele, handle);
		}else{
			$(this).on(change, handle);
		}
		return this;
	};

})(jQuery, window, document );