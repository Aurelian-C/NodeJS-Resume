# Looping Objects: `Object.keys()`

The `Object.keys()` method ==**returns an array** of a given object's **own enumerable property names**, iterated in the same order that a normal loop would==.

> **NOTE**: The `Object.keys()` method returns an Array Iterator object with the keys of an object.

This method does not change the original object.

## Syntax

```js
Object.keys(obj);
```

## Parameters

#### `obj`

The object of which the enumerable's own properties are to be returned.

## Return value

An ==**array of strings**== that represent all the enumerable properties of the given object.

## Examples

`Object.keys()` ==returns an array whose elements are strings corresponding to the enumerable properties found directly upon object==. The ordering of the properties is the same as that given by looping over the properties of the object manually.

```js
// Simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// Array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// Array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  }
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

==If you want *all* properties — including non-enumerables — see [`Object.getOwnPropertyNames()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)==.

## References

1. [`Object.keys()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
1. [`Object.keys()` - w3schools](https://www.w3schools.com/jsref/jsref_object_keys.asp)
