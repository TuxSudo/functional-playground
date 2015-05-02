import { bind, lift, unit} from '../src/debug-monad';
import compose from '../src/compose';
import assert from 'assert';



describe('debug monad', () => {


    it('will use unit to convert simple values', () => {
        var united = unit(4);


        assert.equal( typeof united, "object");
        assert.equal(united.value, 4);
        assert.equal(united.trace.length, 0);


    });


    it('will use bind to convert functions', () => {
        var squareDebug = bind( x=>x*x ),
            results = squareDebug( unit(5) );


        assert.equal( typeof results, "object");
        assert.equal(results.value, 25);
        assert.equal(results.trace.length, 1);

    });

    it('uses bind and compose.', () => {
        var squareDebug = bind( x=>x*x ),
            doubleDebug = bind( x=>2*x ),
            tripleDebug = bind(x=>3*x ),
            squareThenDoubleThenTriple = compose(tripleDebug, doubleDebug, squareDebug),
            results = squareThenDoubleThenTriple( unit(2) );

        assert.equal( typeof results, "object");
        assert.equal(results.value, 24);
        assert.equal(results.trace.length, 3);

    });



    it('uses lift to convert output of functions', () => {
        var square = x => x * x,
            squareDebug = lift( square ),
            results = squareDebug( 5 );

        assert.equal( typeof results, "object");
        assert.equal(results.value, 25);
        assert.equal(results.trace.length, 0);


    });

});