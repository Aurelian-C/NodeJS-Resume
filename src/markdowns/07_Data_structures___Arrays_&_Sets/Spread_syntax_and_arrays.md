# Spread syntax `...` and arrays

Spread syntax `...` allows an ==**iterable**==, such as an ==array== or ==string==, to be ==**expanded**== in places where zero or more arguments (for ==**function** calls==) or elements (for ==**array** literals==) are expected. In an ==**object ** literal== spread syntax allows an _object expression to be expanded_ in places where zero or more key-value pairs are expected.

> **NOTE**: spread operator `...` is an operator that in the end pulls out all elements of an array and gives them to you as a standalone list of elements.

Spread syntax looks exactly like rest syntax. In a way, _spread syntax is the opposite of [rest syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)_. ==Spread syntax **"expands"** an array into its elements, while rest syntax collects multiple elements and **"condenses"** them into a single element==.

```js
// Spread syntax
const arr1 = ['a', 1, false];
const arr2 = [...arr1, 'c', true]

// Rest syntax
const [a, ...b] = arr1;
console.log(b) // [1, false]
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

Rest syntax `...` looks exactly like Spread syntax `...`. In a way, ==Rest syntax is the opposite of Spread syntax==. ==Spread syntax "**expands**"== an array into its elements, while ==Rest syntax **collects**== multiple elements and "condenses" them into a single element.

## Spread in array literals

### A more powerful array literal

Without `spread` syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of `push()`, `splice()`, `concat()`, etc. With `spread` syntax this becomes much more succinct:

```js
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]
```

> **NOTE**: Spread operator `...` is an operator that in the end ==pulls out all elements of an array and gives them to you as a standalone list of elements==.

> **NOTE**: Just like `spread` for functions argument lists, `...` can be used ==anywhere in the array literal==, and may be used ==more than once==.

### Copy an array

```js
let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected
```

> **NOTE**: Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays, as the following example shows. (The same is true with `Object.assign()` and spread syntax)
>
> ```js
> let a = [[1], [2], [3]];
> let b = [...a];
>
> b.shift().shift();
> //  1
>
> //  Oh no!  Now array 'a' is affected as well:
> a;
> //  [[], [2], [3]]
> ```

==An important thing to keep in mind is when you use the spread operator to copy an array that store inside it items that are reference values (arrays/objects), **you are copy the reference value of that items**==. The `persons` array store in fact a bunch of address to the places in memory of the items, so `copiesPersons` is a brand new array but you are copying inside of it all these address that you have in `persons` array. So the objects inside the `copiedPersons` array are still the old objects inside `persons` array.

```js
const persons = [
  { name: 'Tom', age: 32 },
  { name: 'Anna', age: 25 },
];
const copiedPersons = [...persons];

persons[0].name = 'Brad';
console.log(person[0].name); // Brad
console.log(copiedPersons[0].name); // Brad

persons === copiedPersons; //false
persons[0] === copiedPersons[0]; //true
```

### A better way to concatenate arrays

`Array.prototype.concat()` is often used to concatenate an array to the end of an existing array. Without spread syntax, this is done as:

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

With spread syntax this becomes:

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
//  arr1 is now [0, 1, 2, 3, 4, 5]
// Note: Not to use const otherwise, it will give TypeError (invalid assignment)
```

`Array.prototype.unshift()` is often used to insert an array of values at the start of an existing array. Without spread syntax, this is done as:

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);

//  arr1 is now [3, 4, 5, 0, 1, 2]
```

With spread syntax, this becomes:

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
//  arr1 is now [3, 4, 5, 0, 1, 2]
```

> **NOTE**: Unlike `unshift()`, this creates a new `arr1`, and does not modify the original `arr1` array in-place.

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
2. [ES6 Spread Operator - w3schools](https://www.w3schools.com/react/react_es6_spread.asp)
3. [How to Use the Spread Operator (…) in JavaScript - medium.com](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)
