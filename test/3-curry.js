import curry from '../src/curry';
import assert from 'assert';



describe('currying functions', () => {


    it('exec in sequence', () => {
        
        var add5Numbers = function(a,b,c,d,e) {
                return a+b+c+d+e;
            },

            add5NumbersCurried = curry( add5Numbers ),

            results;

        assert.equal( typeof add5NumbersCurried, "function");
        assert.equal( add5NumbersCurried.length, 1);

        // invocation 1/5 should return a function
        results = add5NumbersCurried(5);
        assert.equal( typeof results, "function");

        // invocation 2/5 should return a function
        results = results(10);
        assert.equal( typeof results, "function");

        // invocation 3/5 should return a function
        results = results(2);
        assert.equal( typeof results, "function");

        // invocation 4/5 should return a function
        results = results(100);
        assert.equal( typeof results, "function");

        // invocation 5/5 should return the value 5 + 10 + 2 + 100 - 17 = 100
        results = results(-17);
        assert.equal( results, 100);


    });


    it('exec all at once', () => {
        
        var add5Numbers = function(a,b,c,d,e) {
                return a+b+c+d+e;
            },

            add5NumbersCurried = curry( add5Numbers );




        assert.equal( add5NumbersCurried(1)(1)(1)(1)(1), 5);
        assert.equal( add5NumbersCurried(10)(5)(5)(10)(70), 100);




    });

});
