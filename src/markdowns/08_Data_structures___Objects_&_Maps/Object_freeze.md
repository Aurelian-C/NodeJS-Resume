# `Object.freeze()`

The `Object.freeze()` method ==*freezes* an object. Freezing an object [prevents extensions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) and makes existing properties non-writable and non-configurable==. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. ==`freeze()` returns the same object that was passed in==.

Freezing an object is the highest integrity level that JavaScript provides.

## Syntax

```js
Object.freeze(obj)
```

## Parameters

#### `obj`

The object to freeze.

## Return value

The object that was passed to the function.

## Description

Freezing an object is equivalent to [preventing extensions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) and then changing all existing [properties descriptors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) `configurable` to `false` — and for data properties, `writable` to `false` as well. Nothing can be added to or removed from the properties set of a frozen object. Any attempt to do so will fail, either silently or by throwing a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) exception (most commonly, but not exclusively, when in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)).

For data properties of a frozen object, their values cannot be changed since the writable and configurable attributes are set to false. Accessor properties (getters and setters) work the same — the property value returned by the getter may still change, and the setter can still be called without throwing errors when setting the property. Note that values that are objects can still be modified, unless they are also frozen. As an object, an array can be frozen; after doing so, its elements cannot be altered and no elements can be added to or removed from the array.

==`freeze()` returns the same object that was passed into the function. It *does not* create a frozen copy==.

Unlike [`Object.seal()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal), existing properties in objects frozen with `Object.freeze()` are made immutable and data properties cannot be re-assigned.

## Examples

### Freezing objects

```js
const obj = {
  prop() {},
  foo: 'bar'
};

// Before freezing: new properties may be added,
// and existing properties may be changed or removed
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// Freeze.
const o = Object.freeze(obj);

// The return value is just the same object we passed in.
o === obj; // true

// The object has become frozen.
Object.isFrozen(obj); // === true

// Now any changes will fail
obj.foo = 'quux'; // silently does nothing
// silently doesn't add the property
obj.quaxxor = 'the friendly duck';

// In strict mode such attempts will throw TypeErrors
function fail() {
  'use strict';
  obj.foo = 'sparky'; // throws a TypeError
  delete obj.foo; // throws a TypeError
  delete obj.quaxxor; // returns true since attribute 'quaxxor' was never added
  obj.sparky = 'arf'; // throws a TypeError
}

fail();

// Attempted changes through Object.defineProperty;
// both statements below throw a TypeError.
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// It's also impossible to change the prototype
// both statements below will throw a TypeError.
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }
```

### Freezing arrays

```js
const a = [0];
Object.freeze(a); // The array cannot be modified now.

a[0] = 1; // fails silently

// In strict mode such attempt will throw a TypeError
function fail() {
  "use strict";
  a[0] = 1;
}

fail();

// Attempted to push
a.push(2); // throws a TypeError
```

==The object being frozen is *immutable*. However, it is not necessarily *constant*==. The following example shows that a frozen object is not constant (freeze is shallow):

```js
const obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

obj1.internal.a // 'aValue'
```

==To be a constant object, the entire reference graph (direct and indirect references to other objects) must reference only immutable frozen objects==. The object being frozen is said to be immutable because the entire object *state* (values and references to other objects) within the whole object is fixed. Note that strings, numbers, and booleans are always immutable and that Functions and Arrays are objects.

### What is "shallow freeze"?

==The result of calling `Object.freeze(object)` only applies to the immediate properties of `object` itself and will prevent future property addition, removal or value re-assignment operations *only* on `object`. If the value of those properties are objects themselves, those objects are not frozen and may be the target of property addition, removal or value re-assignment operations==.

```js
const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi"
  }
};

Object.freeze(employee);

employee.name = "Dummy"; // fails silently in non-strict mode
employee.address.city = "Noida"; // attributes of child object can be modified

console.log(employee.address.city); // "Noida"
```

==To make an object immutable, recursively freeze each property which is of type object (deep freeze)==.

## References

1. [`Object.freeze()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)