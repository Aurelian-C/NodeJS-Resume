# Spread & rest syntax (`...`) & objects literals

Spread syntax `...` allows an ==**iterable**==, such as an ==array== or ==string==, to be ==**expanded**== in places where zero or more arguments (for ==**function** calls==) or elements (for ==**array** literals==) are expected. In an ==**object ** literal== spread syntax allows an _object expression to be expanded_ in places where zero or more key-value pairs are expected.

>  **NOTE**: spread operator `...` is an operator that in the end pulls out all properties of an object to be copied in other object.

Spread syntax looks exactly like rest syntax. In a way, _spread syntax is the opposite of [rest syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)_. ==Spread syntax **"expands"** object properties into a new object, while rest syntax collects multiple properties and **"condenses"** them into a single object==.

```js
// Spread syntax
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {...obj1, d: 4}

// Rest syntax
const {a, ...b} = obj1;
console.log(b) // {b: 2, c: 3}
```

## Syntax

#### For _function calls_:

```js
// pass all elements of iterableObj as arguments to function myFunction
myFunction(a, ...iterableObj, b);
```

#### For _array literals_:

```js
// combine two arrays by inserting all elements from iterableObj
[true, ...iterableObj, '4', 'five', 6];
```

#### For _object literals_:

```js
// pass all key-value pairs from an object
let objClone = { ...obj, key: 'value' };
```

## `spread` syntax vs `rest` syntax (parameters)

Rest syntax `...` looks exactly like Spread syntax `...`. In a way, ==Rest syntax is the opposite of Spread syntax==. ==Spread syntax "**expands**"== object properties into another object, while ==Rest syntax **collects**== multiple object properties and "condenses" them into a single object.

## Spread in object literals

Spread in object literal will ==**copies own enumerable properties from a provided object onto a new object**==.

_Shallow-cloning_ (excluding prototype) or _merging_ of objects is now possible using a shorter syntax than [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

```js
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

// With Object.assign()
const mergedObj = Object.assign(obj1, obj2) // { foo: "baz", x: 42, y: 13 }

// With spread syntax
const clonedObj = { ...obj1 }; // { foo: "bar", x: 42 }
const mergedObj = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 13 }
```

> **NOTE**: `Object.assign()` triggers `setters`, whereas spread syntax doesn't.

Note that you cannot replace or mimic the `Object.assign()` function:

```js
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = (...objects) => ({ ...objects });

let mergedObj1 = merge(obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

In the above example, the spread syntax does not work as one might expect: it spreads an _array_ of arguments into the object literal, due to the rest parameter.

## Only for iterables

Spread syntax (other than in the case of spread properties) can only be applied to **iterable** objects like `Array`, or with iterating functions such as `map()`, `reduce()`, and `assign()`.

==**Many objects are not iterable**==, including `Object`:

```js
let obj = { key1: 'value1' };
let array = [...obj]; // TypeError: obj is not iterable
```

To use spread syntax with these objects, you will need to provide an iterator function.

## Some considerations about spread syntax

==Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list==. There are three distinct places that accept the spread syntax:

- [Function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls) list (`myFunction(a, ...iterableObj, b)`)
- [Array literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals) (`[1, ...iterableObj, '4', 'five', 6]`)
- [Object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (`{ ...obj, key: 'value' }`)

Although the syntax looks the same, they come with slightly different semantics.

==Only **iterable** objects, like arrays, can be spread in array and function parameters==. Many objects are not iterable, including all [plain objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) that lack a [`Symbol.iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) method:

```js
const obj = { key1: 'value1' };
const array = [...obj]; // TypeError: obj is not iterable
```

On the other hand, spreading in object literals [enumerates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#traversing_object_properties) the own properties of the object. ==For typical arrays, all indices are enumerable own properties, so **arrays can be spread into objects**==.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

==When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit==. See [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) for more details.

## References

1. [Spread syntax (...) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
1. [ES6 Spread Operator - w3schools](https://www.w3schools.com/react/react_es6_spread.asp)
1. [How to Use the Spread Operator (`…`) in JavaScript - medium.com](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)
