# Functional Programming Playground

Messing around with Functional Programming in ES6



## Compose

Compose 0->Infinity functions

```
import compose from '../src/compose';

var square = x => x * x,
    half = x => x / 2,
    x2 = x => 2 * x,
    squareThenHalf = compose(square, half),
    doubleThenSquareThenHalf = compose(x2, square, half);

squareThenHalf(10); // 50
doubleThenSquareThenHalf(3); // 18

```