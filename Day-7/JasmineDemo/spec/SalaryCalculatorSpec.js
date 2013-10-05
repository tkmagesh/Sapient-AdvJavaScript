describe("SalaryCalculator",function(){
	it("should notify the subscribers whenever the salary is changing",function(){
		//arrange
		salaryCalculator.basic(10000);
		salaryCalculator.hra(10000);
		salaryCalculator.da(10000);
		salaryCalculator.tax(10);
		//substitute a test double for "SalaryChanged" subscriber

		var isSubscriberCalled = false;
		function testDoubleCallback(){
			isSubscriberCalled = true;
		}
		salaryCalculator.subscribeSalaryChange(testDoubleCallback);

		//act
		salaryCalculator.calculate();

		//assert
		expect(true).toEqual(isSubscriberCalled);
	});

	it("should notify the subscribers whenever the salary is changing using Jasmine Spy",function(){
		//arrange
		salaryCalculator.basic(10000);
		salaryCalculator.hra(10000);
		salaryCalculator.da(10000);
		salaryCalculator.tax(10);
		
		// var callbackObj = {
		// 	salaryChanged : function(){}
		// }
		// spyOn(callbackObj,"salaryChanged");

		var spyObj = jasmine.createSpy("salaryChanged");
		salaryCalculator.subscribeSalaryChange(spyObj);

		//act
		salaryCalculator.calculate();

		//assert
		//expect(callbackObj.salaryChanged).toHaveBeenCalled();
		expect(spyObj).toHaveBeenCalled();
	});
});