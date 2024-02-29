# `in` operator

The `in` operator returns `true` if the ==**specified property** is in the **specified object** _or_ its prototype chain==.

## Syntax

```js
prop in object;
```

## Parameters

#### ==prop==

A ==string== or symbol representing a ==**property name** _or_ **array index**== (non-symbols will be coerced to strings).

#### ==object==

An ==**object**== to check if it (or its prototype chain) contains the property with specified name `prop`. If the `object` parameter is not an object (i.e. a primitive) a `TypeError` will be thrown.

## Examples

The following examples show some uses of the in operator.

```js
// Arrays
let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
'bay' in trees; // returns false (you must specify the index number, not the value at that index)
'length' in trees; // returns true (length is an Array property)

// Predefined objects
'PI' in Math; // returns true

// Custom objects
let mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar; // returns true
'model' in mycar; // returns true
```

You must specify an object on the right side of the `in` operator. For example, you can specify a string created with the String constructor, but you cannot specify a string literal.

```js
let color1 = new String('green');
'length' in color1; // returns true

let color2 = 'coral';
// generates an error (color2 is not a String object)
'length' in color2;
```

## Reference

1. [in operator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
