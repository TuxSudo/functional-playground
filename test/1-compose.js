import compose from '../src/compose';
import assert from 'assert';



describe('compose functions', () => {


    it('will be imported', () => {

        assert.equal( typeof compose, "function");

    });


    it('returns a function', () => {

        assert.equal( typeof compose(), "function");

    });



    it('composes functions', () => {

        var plus1 = x => x + 1,
            plus2 = compose(plus1, plus1),
            plus3 = compose(plus2, plus1);

        assert.equal(plus1(1), 2);
        assert.equal(plus2(2), 4);
        assert.equal(plus3(3), 6);

    });


    it('executes functions left-to-right', () => {

        var square = x => x * x,
            half = x => x / 2,
            squareThenHalf = compose(square, half);


        assert.equal( squareThenHalf(10), 50);
        assert.equal( squareThenHalf(1), .5);
        assert.equal( squareThenHalf(4), 8);


    });




});
