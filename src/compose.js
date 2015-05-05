export default function (...fns) {

    var reversed = fns.reverse();

    return x => reversed.reduce( (lastval, thisfn) => thisfn( lastval ), x );

}


