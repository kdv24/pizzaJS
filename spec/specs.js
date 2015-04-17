describe('Pizza', function(){
    describe('getPrice', function(){
        it("will return '10' for the price of a small cheese pizza", function(){
            var testPizza = Object.create(Pizza);
            testPizza.type = 0;
            testPizza.size = 0;
            expect(testPizza.getPrice()).to.equal(10);
        });
    });
    describe('getPrice', function(){
        it("will return '12' for the price of a small pepperoni pizza", function(){
            var testPizza = Object.create(Pizza);
            testPizza.type = 1;
            testPizza.size = 0;
            expect(testPizza.getPrice()).to.equal(12);
        });
    });
    describe('getPrice', function(){
        it("will return '14' for the price of a large pepperoni pizza", function(){
            var testPizza = Object.create(Pizza);
            testPizza.type = 1;
            testPizza.size = 1;
            expect(testPizza.getPrice()).to.equal(14);
        });
    });
});
