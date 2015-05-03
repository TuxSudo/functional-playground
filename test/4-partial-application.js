import partialApply from '../src/partial-application';
import assert from 'assert';



describe('smart partial application of functions', () => {



    it('executes when all arguments are provided', () => {
        
        var concat = function(a, b, c, d, e) {
                return a + b + c + d + e;
            },

            pconcat = partialApply( concat ),
            
            partial = pconcat("n", "a", "k", "e"),
            
            full = pconcat("n", "a", "k", "e", "d");


        assert.equal( typeof partial , "function");
        assert.equal( full, "naked");



    });


    it('can placehold any argument', () => {
        
        var concat = function(a, b, c, d, e) {
                return a + b + c + d + e;
            },

            pconcat = partialApply(concat),

            _ared = pconcat(undefined, 'a', 'r', 'e', 'd'),
            ja_ed = pconcat('j', 'a', undefined, 'e', 'd');


        assert.equal(typeof _ared, "function");
        assert.equal(typeof ja_ed, "function");

        assert.equal( _ared("j") , "jared");
        assert.equal( _ared("c") , "cared");
        assert.equal( _ared("st") , "stared");

        assert.equal( ja_ed("r") , "jared");
        assert.equal( ja_ed("d") , "jaded");
        assert.equal( ja_ed("rr") , "jarred");


    });


    it('can placehold multiple arguments', () => {
        
        var concat = function(a, b, c, d, e) {
                return a + b + c + d + e;
            },

            pconcat = partialApply(concat),

            _a_e_ = pconcat(undefined, 'a', undefined, 'e', undefined);



        assert.equal(typeof _a_e_, "function");

        assert.equal( _a_e_("j", "r", "d") , "jared");
        assert.equal( _a_e_("c", "k", "r") , "caker");
        assert.equal( _a_e_("fr", "ck", "r") , "fracker");
        assert.equal( _a_e_("st", "mp", "red") , "stampered");


    });


    it('curries function until all arguments are provided', () => {
        
        var concat = function(a, b, c, d, e) {
                return a + b + c + d + e;
            },

            pconcat = partialApply(concat),

            results;


        results = pconcat(undefined, " is");
        assert.equal(typeof results, "function");
        assert.equal( 
            results("this", " not", " saved", "!"),
            "this is not saved!"
        );


        results = results(undefined, undefined, " than");
        assert.equal(typeof results, "function");
        assert.equal( 
            results("veggies", " grosser", " real food"),
            "veggies is grosser than real food"
        );

        results = results(undefined, " better");
        assert.equal(typeof results, "function");
        assert.equal( 
            results("bacon", " veggies"),
            "bacon is better than veggies"
        );


        results = results(undefined, " veggies!");
        assert.equal(typeof results, "function");
        assert.equal( 
            results("bacon"),
            "bacon is better than veggies!"
        );
        assert.equal( 
            results("pizza"),
            "pizza is better than veggies!"
        );


        results = results("anything");
        assert.equal( 
            results,
            "anything is better than veggies!"
        );


    });



});
