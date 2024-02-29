# Function hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Hoisting applies to variable declarations and to function declarations. Because of this, JavaScript functions can be called before they are declared:

```js
myFunction(5);

function myFunction(y) {
  return y * y;
}
```

Functions defined using an expression are not hoisted.



Function hoisting only works with function *declarations* — not with function *expressions*.
