# `let` statement

The `let` statement declares a ==**block-scoped local variable**==, ==_optionally_ initializing it to a value==.

`let` allows you to declare variables that are **limited to the scope of a block statement _or_ expression on which it is used**, unlike the `var` keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between `var` and `let` is that `let` is initialized to a value only when a parser evaluates it.

Just like `const`, the `let` does not create properties of the `window` object when declared globally (in the top-most scope).

> **Note**: Many issues with `let` variables can be avoided by declaring them at the top of the scope in which they are used (doing so may impact readability).

![const_vs_let](../../img/const_vs_let.jpg)

## Scoping rules

Variables declared by `let` have their scope in the block for which they are declared, as well as in any contained sub-blocks. In this way, `let` works very much like `var`. The main difference is that the scope of a `var` variable is the entire enclosing function:

```js
// Scoping rules with `var`
function varTest() {
  var x = 1;
  {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

// Scoping rules with `let`
function letTest() {
  let x = 1;
  {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

At the top level of programs and functions, `let`, unlike `var`, does not create a property on the global object:

```js
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

When used inside a block, `let` limits the variable's scope to that block. Note the difference between `var`, whose scope is inside the function where it is declared.

```js
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2
```

However, this combination of `var` and `let` declaration below is a `SyntaxError` due to `var` being hoisted to the top of the block. This results in an implicit re-declaration of the variable.

```js
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

## Redeclarations

Redeclaring the same variable within the same function or block scope raises a `SyntaxError`.

```js
if (x) {
  let foo;
  let foo; // SyntaxError thrown.
}
```

You may encounter errors in `switch` statements because there is only one block.

```js
let x = 1;
switch (x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}
```

However, it's important to point out that a block nested inside a `case` clause will create a new block scoped lexical environment, which will not produce the redeclaration errors shown above.

```js
let x = 1;

switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
```

## Temporal dead zone (TDZ)

`let` variables cannot be read/written until they have been declared. If no initial value is specified on declaration, the variable is initialized with a value of `undefined`. Accessing the variable before the declaration results in a `ReferenceError`.

> **Note**: This differs from `var` variables, which will return a value of `undefined` if they are accessed before they are declared.

The variable is said to be in a **"temporal dead zone" (TDZ) from the start of the block until the declaration has completed**. _The term "temporal" is used because the zone depends on the_ **_order of execution (time)_** _rather than the_ **_order in which the code is written (position)_**.

```js
{
  // TDZ starts at beginning of scope
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

The term "temporal" is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position). For example, the code below works because, even though the function that uses the `let` variable appears before the variable is declared, the function is called outside the TDZ.

```js
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
```

### TDZ combined with lexical scoping

The following code results in a `ReferenceError` at the line shown:

```js
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

The `if` block is evaluated because the outer `var foo` has a value. However due to lexical scoping this value is not available inside the block: the identifier `foo` _inside_ the `if` block is the `let foo`. The expression (`foo + 55`) throws a `ReferenceError` because initialization of `let foo` has not completed — it is still in the temporal dead zone.

## References

1. [Storing the information you need — Variables - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

2. [let - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

   
