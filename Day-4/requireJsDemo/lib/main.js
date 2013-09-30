require.config({
		baseUrl : "lib",
		paths : {
			jquery : 'jquery-1.10.2'
		}
	});

require(['jquery','bookProcessor'],function(jquery,bookProcessor){
	//var bookProcessor = require("lib/bookProcessor");
	console.log(jquery);
	console.log(bookProcessor.total());
});