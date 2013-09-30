define(['books'],function(books){
	return {
		total : function(){
			var result = 0;
			for(var i=0;i<books.length;i++)
				result += books[i].price;
			return result;
		}
	};
});