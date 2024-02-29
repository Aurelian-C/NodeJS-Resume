# `Error` build-in object

==`Error` objects are **thrown when runtime errors occur**. The `Error` object can also be **used as a base object for user-defined exceptions**==.

==The `Error` object **provides error information** when an error occurs==.

Runtime errors result in `new Error` objects being created and thrown.

## Error types

Besides the generic `Error` constructor, there are other core error constructors in JavaScript:

| Error Name                                                   | Description                            |
| :----------------------------------------------------------- | :------------------------------------- |
| [`EvalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError) | Deprecated - use `SyntaxError` instead |
| [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError) | A number "out of range" has occurred   |
| [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) | An illegal reference has occurred      |
| [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) | A syntax error has occurred            |
| [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) | A type error has occurred              |
| [`URIError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError) | An error in encodeURI() has occurred   |

## `Error()` constructor

The `Error()` constructor creates a new `Error` object.

### Syntax

```js
new Error()
new Error(message)
new Error(message, options)

Error()
Error(message)
Error(message, options)
```

> **NOTE:** `Error()` can be called with or without [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `Error` instance.

### Parameters

#### `message` _(optional)_

A human-readable description of the error.

#### `options` _(optional)_ 

An object that has the following properties:

- `cause` _(optional)_ - a property indicating the specific cause of the error. When catching and re-throwing an error with a more-specific or useful error message, this property should be used to pass the original error.

## `Error` instance properties

[`Error.prototype.message`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message)

Error message. For user-created `Error` objects, this is the string provided as the constructor's first argument.

[`Error.prototype.name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name)

Error name. This is determined by the constructor function.

[`Error.prototype.cause`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)

Error cause indicating the reason why the current error is thrown — usually another caught error. For user-created `Error` objects, this is the value provided as the `cause` property of the constructor's second argument.

## Examples

### Function call or new construction

When `Error` is used like a function, that is without [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new), it will return an `Error` object. Therefore, a mere call to `Error` will produce the same output that constructing an `Error` object via the `new` keyword would.

```js
const x = Error("I was created using a function call!");
// above has the same functionality as following
const y = new Error('I was constructed via the "new" keyword!');
```

### Rethrowing an error with a cause

It is sometimes useful to catch an error and re-throw it with a new message. In this case you should pass the original error into the constructor for the new `Error`, as shown.

```js
try {
  frameworkThatCanThrow();
} catch (err) {
  throw new Error("New error message", { cause: err });
}
```

## References

1. [Error - w3schools](https://www.w3schools.com/jsref/jsref_obj_error.asp)
1. [Error - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
1. [`Error()` constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)
