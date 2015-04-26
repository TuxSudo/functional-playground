export default function (...fns) {

    return function(x) {
        return fns.reduce( (lastval, thisfn) => thisfn( lastval ), x );
    };

}


