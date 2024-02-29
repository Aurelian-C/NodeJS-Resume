# `Array.prototype.fill()`

The `fill()` method ==**changes all elements** in an array to a **static value**==, from a ==start index== (default 0) to an ==end index== (default `array.length`). It ==returns the **modified array**==.

> **NOTE**: start index and end index position can be specified. If not, all elements will be filled.
>
> Using `Array.prototype.fill()` on an empty array would not modify it, as the array has nothing to be modified. To use `Array.prototype.fill()` when declaring an array, make sure to assign slots to the array.

The `fill()` method:

- fills specified elements in an array with a value;
- mutates the original array.

## Syntax

```js
array.fill(value);
array.fill(value, start);
array.fill(value, start, end);
```

## Parameters

#### ==**value**==

Value to fill the array with. Note all elements in the array will be this exact value. If the value is an object, each slot in the array will reference that object.

#### ==**start index**== _(optional)_

Start index (inclusive), default 0.

#### ==**end index**== _(optional)_ 

End index (exclusive), default `arr.length`.

## Return value

The ==**modified** array==, filled with value.

## Some considerations about `fill` method

The `fill()` method is a mutating method. It does not alter the length of `this`, but it will change the content of `this`.

## Examples

```js
console.log([1, 2, 3].fill(4));                // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1));             // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2));          // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1));          // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3));          // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2));        // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN));      // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5));          // [1, 2, 3]
console.log(Array(3).fill(4));                 // [4, 4, 4]
console.log([].fill.call({ length: 3 }, 4));   // {0: 4, 1: 4, 2: 4, length: 3}

// A single object, referenced by each slot of the array:
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi";              // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

## References

1. [`Array.prototype.fill()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
2. [`fill()` - w3schools](https://www.w3schools.com/jsref/jsref_fill.asp)
