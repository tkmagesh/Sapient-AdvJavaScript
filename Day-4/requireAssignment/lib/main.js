require.config({
	baseUrl : 'lib',
	paths : {
		jquery : 'jquery-1.10.2'
	}
});
require(['jquery','CalculatorView'],function(jquery, CalculatorView){
	jquery(CalculatorView.init());
});