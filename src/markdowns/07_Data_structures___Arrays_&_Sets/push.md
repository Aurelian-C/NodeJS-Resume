# `Array.prototype.push()`

The `push()` method ==**adds**== one or more items to the ==end of an array== and ==returns the new length of the array==. The `push()` method ==mutates the original array==.

The `push()` method:

- adds new items **to the end** of an array;
- changes the length of the array;
- returns the new length;
- mutates de original array.

> **NOTE**: [`Array.prototype.unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) has similar behavior to `push()`, but applied to the start of an array.

## Syntax

```js
array.push(item0);
array.push(item0, item1);
array.push(item0, item1, /* ... ,*/ itemN);
```

## Parameters

==**itemN**== - the item(s) to add to the end of the array.

## Return value

A ==**number**== - the new `length` property of the object upon which the method was called.

## Some considerations about `push()` method

==The `push()` method is a mutating method. It changes the length and the content of `this`.==

==In case you want the value of `this` to be the same, but return a new array with elements appended to the end, you can use `arr.concat([element0, element1, /* ... ,*/ elementN])` instead.== Notice that the elements are wrapped in an extra array — otherwise, if the element is an array itself, it would be spread instead of pushed as a single element due to the behavior of `concat()`.

The `push` method relies on a `length` property to determine where to start inserting the given values. If the `length` property cannot be converted into a number, the index used is 0. This includes the possibility of `length` being nonexistent, in which case `length` will also be created.

> **NOTE**: ==Although [strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) are native Array-like objects, they are not suitable in applications of this method, as strings are immutable.==

## Reference

1. [`Array.prototype.push()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
2. [`push()` - w3schools](https://www.w3schools.com/jsref/jsref_push.asp)
