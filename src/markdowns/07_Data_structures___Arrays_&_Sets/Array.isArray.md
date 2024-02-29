# `Array.isArray()`

The `Array.isArray()` ==static method== determines whether the passed value is an Array. This method returns `true` if an object is an array, otherwise `false`.

> **NOTE**: `Array.isArray()` is a ==static property== of the JavaScript Array object. You can only use it as `Array.isArray()`. Using `x.isArray()`, where `x` is an array will return `undefined`.

## Syntax

```js
Array.isArray(value);
```

## Parameters

==**value**== - the value to be checked.

## Return value

`true` if the value is an Array; otherwise, `false`.

## Examples

```js
// All following calls return true
Array.isArray([]);								//true
Array.isArray([1]);								//true
Array.isArray(new Array());						//true
Array.isArray(new Array('a', 'b', 'c', 'd'));	//true
Array.isArray(new Array(3));					//true

// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// All following calls return false
Array.isArray();								//false
Array.isArray({});								//false
Array.isArray(null);							//false
Array.isArray(undefined);						//false
Array.isArray(17);								//false
Array.isArray('Array');							//false
Array.isArray(true);							//false
Array.isArray(false);							//false
Array.isArray(new Uint8Array(32));				//false
Array.isArray({ __proto__: Array.prototype });	//false
```

## References

1. [`Array.isArray()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
2. [`Array.isArray()` - w3schools](https://www.w3schools.com/jsref/jsref_isarray.asp)
