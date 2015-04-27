/*

The debug object
{
    value: 0,
    trace: []
}
*/

import compose from './compose';


// convert a simple value into a debug object
var unit = value => { return {value, trace: [] }; },

// convert the output of a simple value into a debug object);
    lift = f=>compose(unit, f),


// convert a normal function into one that operates on and returns a debug object.

    bind = function(fn) {
        return function( { value, trace } ) {
            
            value = fn( value );

            trace.push( (fn.name || fn.toString() ) + ' was called. value is now: ' + value);

            return { value, trace };
        };
    };


export default {unit, lift, bind };