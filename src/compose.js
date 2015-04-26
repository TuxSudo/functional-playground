export default function (...fns) {

    return function(x) {
        return fns.reduce( function(lastval, thisfn) {
            return thisfn( lastval );

        }, x);
    };

}


