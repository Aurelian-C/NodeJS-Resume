# `JSON.stringify()`

The `JSON.stringify()` method ==converts a **JavaScript value** to a **JSON string**==, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

## Syntax

```js
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
```

## Parameters

#### `value`

==The **value** to convert to a JSON string.==

#### `replacer` _(optional)_

==A **function** that alters the behavior of the stringification process, or an **array of strings or numbers** naming properties of `value` that should be included in the output==:

- if `replacer` is an array, all elements that are not strings or numbers (can be either primitives or wrapper objects), including [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) values, are completely ignored
- if `replacer` is anything other than a function or an array (e.g. [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) or not provided), all properties of the object are included in the resulting JSON string.

#### `space` _(optional)_

==A **string** or **number** that's used to insert white space (including indentation, line break characters, etc.) into the output JSON string for readability purposes==:

- if this is a number, it indicates the number of space characters to be used as indentation, clamped to 10 (that is, any number greater than `10` is treated as if it were `10`). Values less than 1 indicate that no space should be used
- if this is a string, the string (or the first 10 characters of the string, if it's longer than that) is inserted before every nested object or array. 
- if `space` is anything other than a string or number (can be either a primitive or a wrapper object) — for example, is [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) or not provided — no white space is used.

## Return value

A ==JSON string== representing the given value, or `undefined`. 

A [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) is thrown if one of the following is true: 

- `value` contains a circular reference
- a [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) value is encountered

## Description

`JSON.stringify()` converts a value to JSON notation representing it:

- [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), and [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) (obtainable via [`Object()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) objects are converted to the corresponding primitive values during stringification, in accordance with the traditional conversion semantics. [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) objects (obtainable via [`Object()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) are treated as plain objects
- [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function), and [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) values are not valid JSON values. If any such values are encountered during conversion, they are either omitted (when found in an object) or changed to [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) (when found in an array). `JSON.stringify()` can return `undefined` when passing in "pure" values like `JSON.stringify(() => {})` or `JSON.stringify(undefined)`
- The numbers [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity) and [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN), as well as the value [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null), are all considered `null`, but unlike the values in the previous point, they would never be omitted

## Examples

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(1906, 0, 2, 15, 4, 5)); // '"1906-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 }); // '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]); // '[3,"false",false]'
```

### Using `JSON.stringify()` with `localStorage`

In a case where you want to store an object created by your user and allow it to be restored even after the browser has been closed, the following example is a model for the applicability of `JSON.stringify()`:

```js
// Creating an example of JSON
const session = {
  screens: [],
  state: true,
};
session.screens.push({ name: "screenA", width: 450, height: 250 });
session.screens.push({ name: "screenB", width: 650, height: 350 });
session.screens.push({ name: "screenC", width: 750, height: 120 });
session.screens.push({ name: "screenD", width: 250, height: 60 });
session.screens.push({ name: "screenE", width: 390, height: 120 });
session.screens.push({ name: "screenF", width: 1240, height: 650 });

// Converting the JSON string with JSON.stringify(), then saving with localStorage in the name of session
localStorage.setItem("session", JSON.stringify(session));

// Example of how to transform the String generated through JSON.stringify() and saved in localStorage in JSON object again
const restoredSession = JSON.parse(localStorage.getItem("session"));

// Now restoredSession variable contains the object that was saved in localStorage
console.log(restoredSession);
```

## References

1. [`JSON.stringify()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)