# Introduction to Standard Build-in Objects

## Standard build-in objects vs Global `window` object

#### Standard build-in objects:

==**JavaScript provides a set of standard built-in objects** that serve various purposes. These objects are available globally and can be used in any part of your code. **These objects are part of the JavaScript language specification** and are **available in all JavaScript environments, not just in web browsers**.==

#### Global `window` object:

==In a **web browser environment**, such as when JavaScript is used in the context of a web page, there is a global object called `window`. **The `window` object represents the browser window** and **serves as the global object for JavaScript in the browser environment**. It contains properties and methods that are specific to the browser environment.==

For example, properties like `window.location` provide information about the current URL, and methods like `window.alert()` display an alert dialog. ==While **the `window` object is specific to browsers**, similar global objects may exist in other JavaScript environments (e.g., `global` in Node.js).==

> **NOTE**: It's important to note that not all JavaScript environments have a `window` object. For instance, in server-side JavaScript (e.g., Node.js), there is no `window` object, but there is a `global` object.

In summary, standard built-in **objects are part of the core JavaScript language** and provide fundamental functionality, while **the global `window` object is specific to web browsers** and provides access to browser-related features.

## Some standard build-in objects by category

### Value properties

These global properties return a simple value. They have no properties or methods:

- [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
- [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

### Function properties

These global functions — functions which are called globally, rather than on an object — directly return their results to the caller:

- [isFinite()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)
- [isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
- [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

### Fundamental objects

These are the fundamental, basic objects upon which all other objects are based. This includes general objects, booleans, functions, and symbols:

- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

### Error objects

Error objects are a special type of fundamental object. They include the basic `Error` type, as well as several specialized error types:

- [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
- [SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

### Numbers and dates

These are the base objects representing numbers, dates, and mathematical calculations:

- [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Text processing

These objects represent strings and support manipulating them:

- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### Indexed collections

These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs:

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Keyed collections

These objects represent collections which use keys. The iterable collections (`Map` and `Set`) contain elements which are easily iterated in the order of insertion:

- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

### Structured data

These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (JSON):

- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

### Control abstraction objects

Control abstractions can help to structure code, especially async code (without using deeply nested callbacks, for example):

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [AsyncFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)

### Internationalization

Additions to the ECMAScript core for language-sensitive functionalities.

- [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)

## References

1. [Standard built-in objects - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
