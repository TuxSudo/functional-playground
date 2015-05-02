/*

The debug object
{
    value: 0,
    trace: []
}
*/

import compose from './compose';


// convert a simple value into a debug object
var unit = function(value) {
        return {
            value: value,
            trace: []
        };
    },

    // convert the output of a simple value into a debug object);
    lift = fn => compose(unit, fn),


    // bind :: value->value -> {value, trace}->{value, trace}
    bind = function(fn) {
        return function( { value, trace } ) {
            
            let newVal = fn( value );

            trace.push( value + ' in; ' + newVal + ' out');

            return { value: newVal, trace };
        };
    };


export default {unit, lift, bind };