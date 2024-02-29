# Looping Objects: `Object.values()`

==The `Object.values()` method **returns an array** of a given object's **own enumerable property _values_**, in the same order as that provided by a [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop. (The only difference is that a `for...in` loop enumerates properties in the prototype chain as well)==.

`Object.values()` **returns an array** whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by looping over the property values of the object manually.

## Syntax

```js
Object.values(obj);
```

## Parameters

#### `obj`

The object whose enumerable own property values are to be returned.

## Return value

An array containing the given object's own enumerable property values.

## Examples

```js
const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
const my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  }
);
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// Non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

## References

1. [`Object.values()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
