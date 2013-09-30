console.log("add.js is loading...");
var printObj = require("./print.js");
module.exports = {
	add : function(x,y){
		printObj.print(x + y);
	}
}