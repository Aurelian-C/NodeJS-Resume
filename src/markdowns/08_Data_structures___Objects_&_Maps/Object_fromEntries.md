# `Object.fromEntries()`

The `Object.fromEntries()` method ==transforms a list of key-value pairs into an object==.

The `Object.fromEntries()` method takes a list of key-value pairs and returns a new object whose properties are given by those entries.

==`Object.fromEntries()` performs the reverse of [`Object.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries).==

## Syntax

```js
Object.fromEntries(iterable)
```

## Parameters

#### `iterable`

An iterable such as [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) or [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) or other objects implementing the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

## Return value

==A new object whose properties are given by the entries of the iterable==.

## Examples

### Converting an Array to an Object

With `Object.fromEntries`, you can convert from [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object):

```js
const entries = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];

const obj = Object.fromEntries(entries);
console.log(obj); // expected output: Object { foo: "bar", baz: 42 }
```

### Converting a Map to an Object

With `Object.fromEntries`, you can convert from [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) to [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object):

```js
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);

const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Object transformations

With `Object.fromEntries`, its reverse method [`Object.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries), and [array manipulation methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods), you are able to transform objects like this:

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([ key, val ]) => [ key, val * 2 ]);
);
console.log(object2);// { a: 2, b: 4, c: 6 }
```

## References

1. [`Object.fromEntries()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)