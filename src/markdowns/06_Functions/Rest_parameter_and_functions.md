# Rest parameter

The `rest` parameter syntax ==allows a function to accept an **indefinite number of arguments as an array**==.

The `rest` operator looks like the `spread` operator. With `spread` operator you add three dots (`...`) but ==the place where you use the `rest` operator is different from the `spread` operator==.

> **NOTE**: You might remember that `spread` operator was used when you created an object or when you created an array, and then you could use the three dots (`...`) in there to take an existing object or an existing array, and pull out all the key-value pairs or all the elements of the array, and add them to the new object or new array.
>
> ==Now with the `spread` operator we use the three dots `...` in a different place, we use it in a parameter list and there, in such a function parameter list, it does something different. Instead of pulling elements out of an array, `spread` operator takes all arguments of a function, and that might be as many as you want, and it merges them into an array, so it builds an array inside of the function==.

## Syntax

```js
function a(param1, param2, ...restParams) {
  // ...
}
```

==A function definition's last parameter can be **prefixed with** `...`, which will cause **all remaining parameters to be placed within an array**==.

> **NOTE**: ==**Only the last parameter** in a function definition can be a `rest` parameter==.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log('a', a);
  console.log('b', b);
  console.log('manyMoreArgs', manyMoreArgs);
}

myFun('one', 'two', 'three', 'four', 'five', 'six');

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
```

_If you only have `rest` parameter as single function parameter and you call the function with just one argument, the only argument still gets put into an array. If you call the function with no arguments, the `rest` parameter will give you an empty array_.

```js
function myFun(...manyMoreArgs) {
  console.log('manyMoreArgs', manyMoreArgs);
}

// Only with 1 argument
myFun('one'); // manyMoreArgs, ["one"]

// With no argument
myFun(); // manyMoreArgs, []
```

## The difference between `rest` parameters and the `arguments` object

There are 3 main differences between `rest` parameters and the `arguments` object:

- The `arguments` object is ==**not a real array**==, while `rest` parameters are ==**Array instances**==, meaning methods like `sort()`, `map()`, `forEach()` or `pop()` can be applied on it directly;
- The `arguments` object has additional functionality specific to itself (like the `callee` property);
- The `...restParam` bundles all the extra parameters into a single array, therefore it does not contain any named argument defined before the `...restParam`. Whereas the `arguments` object contains all of the parameters — including the parameters in the `...restParam` array — bundled into one array-like object.

`rest` parameters were introduced to reduce the boilerplate code that was commonly used for converting a set of `arguments` to an array.

```js
// Before rest parameters, "arguments" could be converted to a normal array using:

function f(a, b) {
  let normalArray = Array.prototype.slice.call(arguments);
  // -- or --
  let normalArray = [].slice.call(arguments);
  // -- or --
  let normalArray = Array.from(arguments);

  let first = normalArray.shift(); // OK, gives the first argument
  let first = arguments.shift(); // ERROR (arguments is not a normal array)
}

// Now, you can easily gain access to a normal array using a rest parameter

function f(...args) {
  let normalArray = args;
  let first = normalArray.shift(); // OK, gives the first argument
}
```

> **NOTE**: ==`rest` parameters are real arrays; the `arguments` object is not==, so Array methods can be used on `rest` parameters, but not on the `arguments` object. To use Array methods on the `arguments` object, it must be converted to a real array first.

## References

1. [Rest parameters - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

2. [JavaScript - The Complete Guide (Beginner + Advanced) - Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/)
