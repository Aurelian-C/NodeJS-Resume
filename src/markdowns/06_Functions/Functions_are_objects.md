# Functions are objects

The `typeof` operator in JavaScript returns "function" for functions. But, JavaScript functions can best be described as objects. JavaScript functions have both properties and methods. The `arguments.length` property returns the number of arguments received when the function was invoked:

```js
function myFunction(a, b) {
  return arguments.length;
}
```

The toString() method returns the function as a string:

```js
function myFunction(a, b) {
  return a * b;
}

let text = myFunction.toString();
```

A function defined as the property of an object, is called a method to the object. A function designed to create new objects, is called an object constructor.





It turns out that *functions are themselves objects* — and in turn, these objects have methods. (See the [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) object.) The [`call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) and [`apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) methods can be used to achieve this goal.
