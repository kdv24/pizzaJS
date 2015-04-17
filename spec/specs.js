describe('Pizza', function(){
    describe('getPrice', function(){
        it("will return '10' for the price of a small cheese pizza", function(){
            var testPizza = Object.create(Pizza);
            testPizza.type = 0;
            testPizza.size = 0;
            expect(testPizza.getPrice()).to.equal(10);
        });
    });
});
