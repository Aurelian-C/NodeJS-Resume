# Function invocation

==*Defining* a function does not *execute* it. Defining it names the function and specifies what to do when the function is called. **Calling** the function actually performs the specified actions with the indicated parameters.==

Functions must be *in scope* when they are called, but the function declaration can be [hoisted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_hoisting) (appear below the call in the code). The scope of a function declaration is the function in which it is declared (or the entire program, if it is declared at the top level).

## Invoking a JavaScript Function

==The code inside a function is not executed when the function is defined. The code inside a function is executed when the function is invoked.== It is common to use the term "call a function" instead of "invoke a function". It is also common to say "call upon a function", "start a function", or "execute a function". In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.

The code inside the function will execute when "something" invokes (calls) the function:

- When an event occurs (when a user clicks a button)

- When it is invoked (called) from JavaScript code

- Automatically (self invoked)

  ==The **`()` operator** invokes the function==: accessing a function without `()` will return the function object instead of the function result.

## Invoking a Function as a Function

```js
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2); // Will return 20
```

==The function above does not belong to any object. But in JavaScript there is always a default global object.== In HTML the default global object is the HTML page itself, so the function above "belongs" to the HTML page. In a browser the page object is the browser window. The function above automatically becomes a window function.

> **NOTE**: This is a common way to invoke a JavaScript function, but not a very good practice. Global variables, methods, or functions can easily create name conflicts and bugs in the global object. `myFunction()` and `window.myFunction()` is the same function:
>
> ```js
> function myFunction(a, b) {
>   return a * b;
> }
> window.myFunction(10, 2); // Will return 20
> ```

## Function can call itself (recursion)

==A function can refer to and call itself.== A function that calls itself is called a *recursive function*. In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case).

For example, consider the following loop:

```js
let x = 0;
// "x < 10" is the loop condition
while (x < 10) {
  // do stuff
  x++;
}
```

It can be converted into a recursive function declaration, followed by a call to that function:

```js
function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

However, some algorithms cannot be simple iterative loops. For example, getting all the nodes of a tree structure (such as the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)) is easier via recursion:

```js
function walkTree(node) {
  if (node === null) {
    return;
  }
  // do something with node
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

## References

1. [Functions guide - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
