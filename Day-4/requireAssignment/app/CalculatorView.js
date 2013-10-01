define(['jquery','Calculator'],function(jquery,Calculator){
	var calculator = Calculator
		,$ = jquery
		,txtBasic
		,txtHra
		,txtDa
		,txtTax
		,btnCalculate
		,divResult
		,divCalculator
		,divCalculateCount
		,calculateCount = 0;

	function onCalculate(){
		calculateCount++;
			calculator.calculate();
			divCalculateCount.html(calculateCount);
	}

	function updateBasic(){
		calculator.basic(parseInt(txtBasic.val(),10));
	}
	function updateHra(){
		calculator.hra(parseInt(txtHra.val(),10));
	}
	function updateDa(){
		calculator.da(parseInt(txtDa.val(),10));
	}
	function updateTax(){
		calculator.tax(parseInt(txtTax.val(),10));
	}

	function updateSalary(){
		console.log(calculator.salary());
		divResult.html(calculator.salary());
	}

	function initialize(){
		divCalculateCount = $("#divCalculateCount");
		divCalculator = $("#divCalculator");
		btnCalculate = $("#btnCalculate");
		txtBasic = $("#txtBasic");
		txtHra = $("#txtHra");
		txtDa = $("#txtDa");
		txtTax = $("#txtTax");
		divResult = $("#divResult");

		txtBasic.change(updateBasic);
		txtHra.change(updateHra);
		txtDa.change(updateDa);
		txtTax.change(updateTax);
		btnCalculate.click(onCalculate);

		calculator.subscribeSalaryChange(updateSalary);
	}
	function hide(){
		divCalculator.hide();
	}

	return {
		init: initialize,
		hide : hide
	};
});