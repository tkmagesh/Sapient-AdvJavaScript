describe("fadeOut",function(){
	it("should fade out the given DOM node within the given time interval",function(){
		//arrange
			var domNode = document.createElement("div"),
				duration = 2000,
				callback = jasmine.createSpy("fadeOutCallback");

		//act
		fadeOut(domNode,duration,callback);
			/*runs(function(){
				
			});*/

		//assert
			waitsFor(function(){
				return domNode.style.opacity == 0
			},"Fadeout Operation output",duration - 100);

			runs(function(){
				expect(callback).toHaveBeenCalled();
			})
	})
});