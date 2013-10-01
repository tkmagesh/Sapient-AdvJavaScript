require.config({
	paths : {
		jquery : '../lib/jquery-1.10.2',
		myApp : "../app"
	}
});
require(['jquery','myApp/CalculatorView'],function(jquery, CalculatorView){
	jquery(CalculatorView.init());
});