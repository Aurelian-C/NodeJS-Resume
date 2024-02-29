# `var` statement

The `var` statement declares a ==**function-scoped**== or ==**globally-scoped**== variable, ==_optionally_ initializing it to a value==.

The scope of a variable declared with `var` is its current _execution context_ and _closures thereof_, which is either the enclosing function and functions declared within it, or, for variables declared outside any function, global.

```js
'use strict';

function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
}

foo();
```

> **Note**: Duplicate variable declarations using `var` will not trigger an error, even in "strict mode", and the variable will not lose its value, unless another assignment is performed.
>
> ```js
> var x = 1;
> 
> if (x === 1) {
>   var x = 2;
>   console.log(x);// expected output: 2
> }
> 
> console.log(x); // expected output: 2
> ```

## var & hoisting

`var` declarations, wherever they occur, are processed before any code is executed because `var` ==declarations are **hoisted**==. Variables declared using `var` are created before any code is executed in a process known as _hoisting_. ==Their initial value is== `undefined`.

```js
'use strict';

console.log(x); // undefined (note: not ReferenceError)
console.log('still going...'); // still going...

var x = 1;

console.log(x); // 1
console.log('still going...'); // still going...
```

Because `var` declarations are processed before any code is executed, ==declaring a variable with `var` anywhere in the code is equivalent to declaring it at the top==. This also means that a ==`var` variable can appear to be used before it's declared. This behavior is called _hoisting_, as it appears that **the variable declaration is moved to the top of the _function_ or _global code_**==.

```js
bla = 2;
var bla;

// ...is implicitly understood as:
var bla;
bla = 2;
```

For that reason, it is ==**recommended to always declare variables at the top of their scope** (_the top of global code and the top of function code_)== so it's clear which variables are function scoped (local) and which are resolved on the scope chain.

It's important to point out that ==**only a variable's declaration is hoisted, not its initialization**. _The initialization happens only when the assignment statement is reached. Until then the variable remains_ `undefined` (but declared)==:

```js
function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

// ...is implicitly understood as:
function doSomething() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

## var & global object

In the **global context**, a variable declared using `var` is added as a non-configurable ==**property of the global object**==. This means its property descriptor cannot be changed and it cannot be deleted using `delete`. The corresponding name is also added to a list on the internal `[[VarNames]]` slot on the global environment record (which forms part of the global lexical environment). The list of names in `[[VarNames]]` enables the runtime to _distinguish between global variables and straightforward properties on the global object_.

_The property created on the global object for global variables, is set to be non-configurable because the identifier is to be treated as a variable, rather than a straightforward property of the global object_. JavaScript has automatic memory management, and it would make no sense to be able to use the `delete` operator on a global variable.

```js
'use strict';

var x = 1;
globalThis.hasOwnProperty('x'); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

### Unqualified identifier assignments

**The global object sits at the top of the scope chain**. When attempting to resolve a name to a value, the scope chain is searched. This means that properties on the global object are conveniently visible from every scope, without having to qualify the names with `globalThis.` or `window.` or `global.`.

So you can just type:

```js
function foo() {
  String('s'); // Note the function `String` is implicitly visible
}

// ... because
globalThis.hasOwnProperty('String'); // true
```

So _the global object will ultimately be searched for_ **unqualified identifiers**. You don't have to type `globalThis.String`, you can just type the _unqualified_ `String`. The corollary, in non-strict mode, is that assignment to unqualified identifiers will, if there is no variable of the same name declared in the scope chain, assume you want to create a property with that name on the global object.

```js
foo = 'f'; // In non-strict mode, assumes you want to create a property named `foo` on the global object
globalThis.hasOwnProperty('foo'); // true
```

In ECMAScript 5, this behavior was changed for "strict mode". _Assignment to an unqualified identifier in "strict mode" will result in a_ `ReferenceError`, _to avoid the accidental creation of properties on the global object_.

## References

1. [Storing the information you need — Variables - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

2. [var - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting)

   
