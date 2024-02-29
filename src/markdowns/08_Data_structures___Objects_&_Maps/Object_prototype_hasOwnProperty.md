# `Object.prototype.hasOwnProperty()`

The `hasOwnProperty()` method ==**returns a boolean** indicating whether the object has the specified property as its own property (as opposed to inheriting it)==.

> **NOTE:** ==[`Object.hasOwn()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) is recommended over `hasOwnProperty()`, in browsers where it is supported==.

## Syntax

```js
hasOwnProperty(prop)
```

## Parameters

#### `prop`

The [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) name or [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) of the property to test.

## Return value

Returns `true` if the object has the specified property as own property; `false` otherwise.

## Description

The `hasOwnProperty()` method returns `true` if the specified property is a direct property of the object — even if the value is `null` or `undefined`. The method returns `false` if the property is inherited, or has not been declared at all. Unlike the [`in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) operator, this method does not check for the specified property in the object's prototype chain.

==The method can be called on *most* JavaScript objects, because most objects descend from [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), and hence inherit its methods. For example [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is an [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), so you can use `hasOwnProperty()` method to check whether an index exists==:

```js
const fruits = ['Apple', 'Banana','Watermelon', 'Orange'];
fruits.hasOwnProperty(3);   // true ('Orange')
fruits.hasOwnProperty(4);   // false - not defined
```

The method will not be available in objects where it is reimplemented (that use `hasOwnProperty` as a property name), or on objects created using `Object.create(null)` (as these don't inherit from `Object.prototype`):

```js
// JavaScript does not protect the property name `hasOwnProperty`; an object that has a property with this name may return incorrect results:
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: 'Here be dragons',
};

foo.hasOwnProperty('bar'); // reimplementation always returns false
```

### [`Object.hasOwn()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) is recommended over `hasOwnProperty()`, in browsers where it is supported.

The recommended way to overcome this problem is to instead use `Object.hasOwn()` (in browsers that support it). Other alternatives include using an *external* `hasOwnProperty`:

```js
const foo = { bar: 'Here be dragons' };

// Use Object.hasOwn() method - recommended
Object.hasOwn(foo, "bar");  // true

// Use the hasOwnProperty property from the Object prototype
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true

// Use another Object's hasOwnProperty
// and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true
```

Objects created using [`Object.create(null)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) do not inherit from `Object.prototype`, making `hasOwnProperty()` inaccessible.

```js
const foo = Object.create(null);
foo.prop = 'exists';
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function
```

The solutions in this case are the same as for the previous section: use `Object.hasOwn()` by preference, otherwise use an external object's `hasOwnProperty()`.

## Examples

```js
const example = {};
example.hasOwnProperty('prop');   // false

example.prop = 'exists';
example.hasOwnProperty('prop');   // true - 'prop' has been defined

example.prop = null;
example.hasOwnProperty('prop');   // true - own property exists with value of null

example.prop = undefined;
example.hasOwnProperty('prop');   // true - own property exists with value of undefined
```

### Direct vs. inherited properties

The following example differentiates between direct properties and properties inherited through the prototype chain:

```js
const example = {};
example.prop = 'exists';

// `hasOwnProperty` will only return true for direct properties:
example.hasOwnProperty('prop');             // returns true
example.hasOwnProperty('toString');         // returns false
example.hasOwnProperty('hasOwnProperty');   // returns false

// The `in` operator will return true for direct or inherited properties:
'prop' in example;                          // returns true
'toString' in example;                      // returns true
'hasOwnProperty' in example;                // returns true
```

## References

1. [`Object.prototype.hasOwnProperty()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)