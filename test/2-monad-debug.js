import debug from '../src/debug-monad';
import assert from 'assert';



describe('debug monad', () => {

    it('imports properly', () => {

        assert.equal( typeof debug, "object");
        assert.equal( typeof debug.bind, "function");
        assert.equal( typeof debug.lift, "function");
        assert.equal( typeof debug.unit, "function");

    });


    it('will use unit to convert simple values', () => {
        var united = debug.unit(4);


        assert.equal( typeof united, "object");
        assert.equal(united.value, 4);
        assert.equal(united.trace.length, 0);

    });

    it('will use bind to convert functions', () => {
        var squareDebug = debug.bind( x=>x*x ),
            results = squareDebug( debug.unit(5) );

        console.log(results);

        assert.equal( typeof lifted, "object");
        assert.equal(lifted.value, 4);
        assert.equal(lifted.trace.length, 0);

    });




});