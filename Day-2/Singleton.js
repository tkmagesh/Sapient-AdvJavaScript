function ClickCounter(){
  var instance = (new function(){
  		var _count = 0;
        this.click = function() { _count++;}
        this.count = function() { return _count;}
  		}());
  ClickCounter = function(){
     return instance;
  }
  return instance;
}

function ClickCounter(){
  var _count = 0;
  var instance = {
        click : function() { _count++;},
        count : function() { return _count;}
  		};
  ClickCounter = function(){
     return instance;
  }
  return instance;
}

//To be fixed
/*function ClickCounter(){
  var _count = 0;
  this.click = function(){ ++_count; }
  this.count = function(){ return _count;}
  var instance;
  ClickCounter = function(){
  	if (typeof instance === "undefined"){
  		instance = new ClickCounter();
  	} 
  	return instance;
  }
  return new ClickCounter();
}*/

var calculator = (function(){
	var _basic = 0
		, _hra = 0
		, _da = 0
		, _tax = 0;
	function getNet(){
		return _basic + _hra + _da;
	}
	return {
		basic : function(){
			if (arguments.length == 0) return _basic;
			_basic = arguments[0];
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
			return getNet() * ((100 - _tax)/100);
		}
	}
}());




















