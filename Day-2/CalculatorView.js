var calculatorView = (function(calc){
	var calculator = calc
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
			divCalculateCount.innerHTML = calculateCount;
	}

	function updateBasic(){
		calculator.basic(parseInt(txtBasic.value,10));
	}
	function updateHra(){
		calculator.hra(parseInt(txtHra.value,10));
	}
	function updateDa(){
		calculator.da(parseInt(txtDa.value,10));
	}
	function updateTax(){
		calculator.tax(parseInt(txtTax.value,10));
	}

	function updateSalary(){
		divResult.innerHTML = calculator.salary();;
	}

	function initialize(){
		divCalculateCount = document.getElementById("divCalculateCount");
		divCalculator = document.getElementById("divCalculator");
		btnCalculate = document.getElementById("btnCalculate");
		txtBasic = document.getElementById("txtBasic");
		txtHra = document.getElementById("txtHra");
		txtDa = document.getElementById("txtDa");
		txtTax = document.getElementById("txtTax");
		divResult = document.getElementById("divResult");

		txtBasic.onchange = updateBasic;
		txtHra.onchange = updateHra;
		txtDa.onchange = updateDa;
		txtTax.onchange = updateTax;
		btnCalculate.onclick = onCalculate;

		calculator.subscribeSalaryChange(updateSalary);
	}
	function hide(){
		divCalculator.style.display = "none";
	}

	return {
		init: initialize,
		hide : hide
	};
}(calculator));