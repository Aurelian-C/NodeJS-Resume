# `instanceof` operator

The `instanceof` operator ==tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object==. The ==return value is a boolean value==.

## Syntax

```js
object instanceof constructor
```

## Parameters

#### `object`

The object to test.

#### `constructor`

Constructor to test against.

If `constructor` is not an object a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) will be thrown. If `constructor` doesn't have a [`@@hasInstance`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) method, it must also be a function.

## Description

The `instanceof` operator ==tests the presence of `constructor.prototype` in `object`'s prototype chain. This usually means `object` was constructed with `constructor`==.

```js
// Defining constructors
function C() {}
function D() {}
const o = new C();

o instanceof C;			// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof D;			// false, because D.prototype is nowhere in o's prototype chain
o instanceof Object;	// true, because: C.prototype instanceof Object; // true
```

The value of an `instanceof` test can change if `constructor.prototype` is re-assigned after creating the object (which is usually discouraged). It can also be changed by changing `object`'s prototype using [`Object.setPrototypeOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf).

```js
// Re-assign `constructor.prototype`: you should rarely do this in practice.
function C() {}
const o = new C();

C.prototype = {};
const o2 = new C();

o2 instanceof C;	// true
o instanceof C;		// false, because C.prototype is nowhere in o's prototype chain anymore
```

> **Note**: Classes behave in the same way, because classes also have the `prototype` property.

## Examples

#### Using `instanceof` with String:

```js
const literalString = "This is a literal string";
const stringObject = new String("String created with constructor");

literalString instanceof String;	// false, string primitive is not a String
stringObject instanceof String;		// true

literalString instanceof Object;	// false, string primitive is not an Object
stringObject instanceof Object;		// true

stringObject instanceof Date;		// false
```

#### Using `instanceof` with Date:

```js
const myDate = new Date();

myDate instanceof Date;		// true
myDate instanceof Object;	// true
myDate instanceof String;	// false
```

## References

1. [instanceof - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
2. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

