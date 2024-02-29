# `Object.assign()`

The `Object.assign()` method ==**copies all [enumerable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) [own properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)** from one or more *source objects* to a *target object*. It returns the modified target object==.

## Syntax

```js
Object.assign(target, ...sources);
```

## Parameters

#### `target`

The target object — what to apply the sources properties to, which is returned after it is modified.
#### `sources `

The source object(s) — objects containing the properties you want to apply.

## Return value

The target object.

## Description

==Properties in the target object are **overwritten** by properties in the sources if they have the **same key**. Later sources properties overwrite earlier ones==.

The `Object.assign()` method ==only copies **enumerable** and **own** properties== from a source object to a target object. It uses `[[Get]]` on the source and `[[Set]]` on the target, so it will invoke _getters_ and _setters_. Therefore it assigns properties, versus copying or defining new properties. This may make it unsuitable for merging new properties into a prototype if the merge sources contain _getters_.

> **NOTE**: For copying property definitions (including their enumerability) into prototypes, use [`Object.getOwnPropertyDescriptor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) and [`Object.defineProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) instead.

## Examples

### Cloning an object

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### Warning for Deep Clone

For [deep cloning](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy), we need to use alternatives, because `Object.assign()` copies property values. If the source value is a reference to an object, it only copies the reference value:

```js
const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 0, b: { c: 0 } }

obj1.a = 1;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 0, b: { c: 0 } }

obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(obj2); // { a: 2, b: { c: 3 } }

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = JSON.parse(JSON.stringify(obj3));
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }
```

### Merging objects

```js
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

### Merging objects with same properties

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

The properties are overwritten by other objects that have the same properties later in the parameters order.

### Properties on the prototype chain and non-enumerable properties cannot be copied

```js
const obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
  bar: {
    value: 2  // bar is a non-enumerable property.
  },
  baz: {
    value: 3,
    enumerable: true  // baz is an own enumerable property.
  }
});

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### Primitives will be wrapped to objects

```js
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

## References

1. [`Object.assign()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
