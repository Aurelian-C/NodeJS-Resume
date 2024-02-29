# `Array.from()`

The `Array.from()` ==static method== creates a new, ==**shallow-copied**== Array instance from an ==**Array-Like**== or ==**Iterable**== object.

> **NOTE**: `Array.from()` is a static property of the JavaScript Array object. You can only use it as `Array.from()`. Using `x.from()`, where `x` is an array will return `undefined`.

`Array.from()` method returns an array from:

- ==Array-Like== objects (objects with a `length` property and indexed elements);
- ==Iterable== objects.

```js
Array.from('foo'); // ["f", "o", "o"]

Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
```

==`Array.from()` has an **optional parameter** `mapFn`, which allows you to execute a `map()` function on each element of the array being created.==

More clearly, `Array.from(obj, mapFn, thisArg)` has the same result as `Array.from(obj).map(mapFn, thisArg)`, except that it does not create an intermediate array, and `mapFn` only receives two arguments (_element_, _index_).

## Syntax

```js
// Arrow function
Array.from(arrayLike, (element) => { ... } )
Array.from(arrayLike, (element, index) => { ... } )

// Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

// Inline mapping function
Array.from(arrayLike, function mapFn(element) { ... })
Array.from(arrayLike, function mapFn(element, index) { ... })
Array.from(arrayLike, function mapFn(element) { ... }, thisArg)
Array.from(arrayLike, function mapFn(element, index) { ... }, thisArg)
```

## Parameters

==**arrayLike**==: An ==Array-Like== or ==Iterable== object to convert to an array.

==**mapFn**== (optional): `map()` function to call on every element of the array.

==**thisArg**== (optional): Value to use as `this` when executing `mapFn`.

## Return value

A ==new Array== instance.

The `Array.from()` method returns:

- an array from any object with a `length` property;
- an array from any iterable object.

## References

1. [`Array.from()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
2. [`Array.from()` - w3schools](https://www.w3schools.com/jsref/jsref_from.asp)
