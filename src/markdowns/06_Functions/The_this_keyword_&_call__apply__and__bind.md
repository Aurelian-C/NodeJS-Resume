# The `this` keyword & `call()`, `apply()` and `bind()`

With With ```call()```, ```apply()``` and ```bind()``` you can manipulate the ```this``` keyword.

Usually, `this` refers to the current object (the calling object). With ```call()```, ```apply()``` and ```bind()``` you can ==**assign a different** `this` **object** when calling an existing function==. 

With ```call()```, ```apply()``` and ```bind()```, ==you can write a method once, and then inherit it in another object==, without having to rewrite the method for the new object.

## ```call()``` method

==The **`call()`** method calls the function with a _given `this`_ value and _arguments provided individually_.== With the ```call()``` method, you can write a method that can be used on different objects.

```js
const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const person2 = {
  firstName: 'Mary',
  lastName: 'Doe',
};

person.fullName.call(person1); // This will return 'John Doe'
person.fullName.call(person2); // This will return 'Mary Doe'
```

==The `call()` allows for a function/method belonging to one object to be assigned and called for a different object==. `call()` provides a new value of `this` to the function/method. ==With `call()`, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object==.

### Syntax

```javascript
call()
call(thisArg)
call(thisArg, arg1, /* …, */ argN)
```

### Parameters

- `thisArg`: the value to use as `this` when calling the function.
- `arg1, …, argN` (optional): arguments for the function.

### Return value

The result of calling the function with the specified `this` value and arguments.

## ```apply()``` method

==The **`apply()`** method calls the specified function with a given `this` value, and _arguments provided as an array_.== The ```apply()``` method is similar to the ```call()``` method. The difference between ```call()``` and ```apply()``` are:

- The ```call()``` method takes ==arguments **separately**==.
- The ```apply()``` method takes ==arguments as an **array**==.

> **NOTE**: The `apply()` method is very handy if you _want to use an array instead of an argument list_. JavaScript Strict Mode: in JavaScript strict mode, if the first argument of the ```apply()``` method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global `window` object.

## ```bind()``` method

==The **`bind()`** method **creates a new function** that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.==

### Syntax

```js
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2, /* …, */ argN)
```

### Return value

A ==**copy of the given function**== with the specified `this` value, and initial arguments (if provided).

### Description

The `bind()` function creates a ==new **bound function**==. Calling the bound function generally results in the execution of the function it wraps, which is also called the ==**target function**==. _The bound function will store the parameters passed — which include the value of `this` and the first few arguments — as its internal state_. These values are stored in advance, instead of being passed at call time. You can generally see `const boundFn = fn.bind(thisArg, arg1, arg2)` as being equivalent to `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` for the effect when it's called (but not when `boundFn` is constructed).

A bound function can be further bound by calling `boundFn.bind(thisArg, /* more args */)`, which creates another bound function `boundFn2`. The newly bound `thisArg` value is ignored, because the target function of `boundFn2`, which is `boundFn`, already has a bound `this`. When `boundFn2` is called, it would call `boundFn`, which in turn calls `fn`. The arguments that `fn` ultimately receives are, in order: the arguments bound by `boundFn`, arguments bound by `boundFn2`, and the arguments received by `boundFn2`.

```js
function log(...args) {
  "use strict"; // prevent `this` from being boxed into the wrapper object
  console.log(this, ...args);
};
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);

boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

## References

1. [`Function.prototype.call()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
2. [`Function.prototype.apply()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
3. [`Function.prototype.bind()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
