# `Object.getOwnPropertyDescriptor()`

The `Object.getOwnPropertyDescriptor()` method ==**returns an object** describing the **configuration of a specific property** on a given object== (that is, one directly present on an object and not in the object's prototype chain). ==The object returned is mutable but mutating it has no effect on the original property's configuration==.

## Syntax

```js
Object.getOwnPropertyDescriptor(obj, prop);
```

## Parameters

==**obj**== - the object in which to look for the property.

==**prop**== - the name or Symbol of the property whose description is to be retrieved.

## Return value

A property descriptor of the given property if it exists on the object, `undefined` otherwise.

## Some considerations about `Object.getOwnPropertyDescriptor()` method

This method permits ==**examination** of the precise description of a **property**. A property in JavaScript consists of either a **string-valued name** or a Symbol and a **property descriptor**==. Further information about property descriptor types and their attributes can be found in `Object.defineProperty()`.

A property descriptor is a record with some of the following attributes:

- ==**value**== - the value associated with the property (data descriptors only).
- ==**writable**== - `true` if and only if the value associated with the property may be changed (data descriptors only).
- ==**get**== - a function which serves as a getter for the property, or `undefined` if there is no getter (accessor descriptors only).
- ==**set**== - a function which serves as a setter for the property, or `undefined` if there is no setter (accessor descriptors only).
- ==**configurable**== - `true` if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
- ==**enumerable**== - `true` if and only if this property shows up during enumeration of the properties on the corresponding object.

## Example

```js
const a = { bar: 42 };
const b = Object.getOwnPropertyDescriptor(a, 'bar');
// b is {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }
```

## References

1. [`Object.getOwnPropertyDescriptor()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
