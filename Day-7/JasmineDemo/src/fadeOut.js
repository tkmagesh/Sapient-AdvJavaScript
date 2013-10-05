function fadeOut(domNode, duration, callback){
	if (!domNode.style.opacity)
		domNode.style.opacity = 1;
	var currentOpacity = domNode.style.opacity;
	(function(){
		if (currentOpacity > 0){
			currentOpacity -= 0.05;
			domNode.style.opacity = currentOpacity;
			setTimeout(arguments.callee,duration/20);
		} else {
			domNode.style.opacity = 0;
			if (!!callback) callback();
		}
	}());
}