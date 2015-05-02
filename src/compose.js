export default function (...fns) {

    var reversed = fns.reverse();

    return function(x) {
        return reversed.reduce( (lastval, thisfn) => thisfn( lastval ), x );
    };

}


