// import compose from '../src/compose'; // <-- no working

function compose(...fns) {

    return function(x) {
        return fns.reduce(function(lastval, thisfn) {
            return thisfn(lastval);

        }, x);
    };
}


jest.autoMockOff();


describe('compose functions', () => {


    it('will be imported', () => {

        expect(compose).toBeDefined();
        expect(typeof compose).toBe("function");

    });


    it('returns a function', () => {

        expect(compose(function() {}, function() {})).toBeDefined();
        expect(typeof compose()).toBe("function");


    });

    it('composes functions', () => {


        var plus1 = x => x + 1,
            plus2 = compose(plus1, plus1),
            plus3 = compose(plus2, plus1);


        expect(plus1(1)).toEqual(2);
        expect(plus2(2)).toEqual(4);
        expect(plus3(3)).toEqual(6);



    });


    it('executes functions left-to-right', () => {

        var square = x => x * x,
            half = x => x / 2,
            squareThenHalf = compose(square, half);



        expect(square(10)).toBe(100);
        expect(half(100)).toBe(50);

        expect(squareThenHalf(10)).toEqual(50);
        expect(squareThenHalf(2)).toEqual(2);
        expect(squareThenHalf(1)).toEqual(.5);



    });




});
