export default function curry(fn) {
    return function (arg) {
        return fn.length <= 1 ? fn(arg) : curry( fn.bind(null, arg) );
    };
}