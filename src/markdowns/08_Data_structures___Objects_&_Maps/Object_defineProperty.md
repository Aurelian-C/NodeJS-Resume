# `Object.defineProperty()`

The static method `Object.defineProperty()` ==**defines** a new property directly on an object, or **modifies** an existing property on an object, and **returns the object**==.

## Syntax

```js
Object.defineProperty(obj, prop, descriptor);
```

## Parameters

==**obj**== - the object on which to define the property.

==**prop**== - the name or Symbol of the property to be defined or modified.

==**descriptor**== - the descriptor for the property being defined or modified.

## Return value

The object that was passed to the function.

## Some considerations about `Object.defineProperty()` method

This method allows a precise ==**addition** to or **modification** of a property on an object==. Normal property addition through assignment creates properties which show up during property enumeration (`for...in` loop or `Object.keys` method), whose values may be changed, and which may be deleted. This method ==allows these extra details to be changed from their defaults==. By default, values added using `Object.defineProperty()` are immutable and not enumerable.

Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors. A ==data descriptor== is a property that has a value, which may or may not be writable. An ==accessor descriptor== is a property described by a getter-setter pair of functions. A descriptor must be one of these two flavors; it cannot be both.

Both data and accessor descriptors are objects. They share the following optional keys (please note: the defaults mentioned here are in the case of defining properties using `Object.defineProperty()`):

==**configurable**== - `true` if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. Defaults to `false`.

==**enumerable**== - `true` if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to `false`.

A data descriptor also has the following optional keys:

==**value**== - the value associated with the property. Can be any valid JavaScript value (number, object, function, etc). Defaults to `undefined`.

==**writable**== - `true` if the value associated with the property may be changed with an assignment operator. Defaults to `false`.

An accessor descriptor also has the following optional keys:

==**get**== - a function which serves as a getter for the property, or `undefined` if there is no getter. When the property is accessed, this function is called without arguments and with this set to the object through which the property is accessed (this may not be the object on which the property is defined due to inheritance). The return value will be used as the value of the property. Defaults to `undefined`.

==**set**== - a function which serves as a setter for the property, or `undefined` if there is no setter. When the property is assigned, this function is called with one argument (the value being assigned to the property) and with this set to the object through which the property is assigned. Defaults to `undefined`.

If a descriptor has neither of `value`, `writable`, `get` and `set` keys, it is treated as a data descriptor. If a descriptor has both [`value` or `writable`] and [`get` or `set`] keys, an exception is thrown.

## Example

### Creating a property

When the property specified doesn't exist in the object, `Object.defineProperty()` creates a new property as described. Fields may be omitted from the descriptor, and default values for those fields are inputted.

```js
const o = {}; // Creates a new object

// Example of an object property added
// with defineProperty with a data property descriptor
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// 'a' property exists in the o object and its value is 37
```

## References

1. [`Object.defineProperty()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
