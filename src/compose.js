export default function (...fns) {

    return x => fns.reduceRight( (lastval, thisfn) => thisfn( lastval ), x );

}


