var assert = chai.assert;
describe("Market Behavior",function(){
	it("should open during valid market hours",function(){
		//arrange
			var timeService = new TimeService();
			var timeServiceMock = sinon.mock(timeService);
			var expectation = timeServiceMock.expects("getCurrentTime").once().returns(new Date(2013,9,5,10,0,0));

			var market = new Market(timeService);

		//act
			market.Open();

		//assert
			assert.isTrue(market.isOpen);
			assert.isTrue(timeServiceMock.verify());
	})
	it("should be closed during valid early morning hours",function(){
		//arrange
			var timeService = new TimeService();
			var timeServiceMock = sinon.mock(timeService);
			var expectation = timeServiceMock.expects("getCurrentTime").once().returns(new Date(2013,9,5,5,0,0));

			var market = new Market(timeService);

		//act
			market.Open();

		//assert
			assert.isFalse(market.isOpen);
			assert.isTrue(timeServiceMock.verify());
	});

	it("should be closed during valid late evening hours",function(){
		//arrange
			var timeService = new TimeService();
			var timeServiceMock = sinon.mock(timeService);
			var expectation = timeServiceMock.expects("getCurrentTime").once().returns(new Date(2013,9,5,20,0,0));

			var market = new Market(timeService);

		//act
			market.Open();

		//assert
			assert.isFalse(market.isOpen);
			assert.isTrue(timeServiceMock.verify());
	})
});