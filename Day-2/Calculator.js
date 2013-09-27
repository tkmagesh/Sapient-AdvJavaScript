var calculator = (function(){
	var _basic = 0
		, _hra = 0
		, _da = 0
		, _tax = 0
		, _salary = 0
		,_salaryChangeSubscribers = [];
	function getNet(){
		return _basic + _hra + _da;
	}

	function triggerSalaryChange(){
		for (var i = _salaryChangeSubscribers.length - 1; i >= 0; i--) {
				_salaryChangeSubscribers[i]();
		};
	}

	return {
		basic : function(){
			if (arguments.length == 0) return _basic;
			_basic = arguments[0];
			this.calculate();
		},
		hra : function(){
			if (arguments.length == 0) return _hra;
			_hra = arguments[0];
		},
		da : function(){
			if (arguments.length == 0) return _da;
			_da = arguments[0];
		},
		tax : function(){
			if (arguments.length == 0) return _tax;
			_tax = arguments[0];
		},
		calculate : function(){
			_salary = getNet() * ((100 - _tax)/100);
			triggerSalaryChange();		
		},
		salary : function(){
			return _salary;
		},
		subscribeSalaryChange : function(callback){
			_salaryChangeSubscribers.push(callback);
		}
	}
}());