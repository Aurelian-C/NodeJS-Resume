# `Object.create()`

The `Object.create()` method ==**creates a new object**, using an existing object as the prototype of the newly created object==.

## Syntax

```js
Object.create(proto)
Object.create(proto, propertiesObject)
```

## Parameters

#### `proto`

The object which should be the prototype of the newly-created object.

#### `propertiesObject` _(optional)_

If specified and not `undefined`, an object whose [enumerable own properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of [`Object.defineProperties()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties).

## Return value

A new object with the specified prototype object and properties. A [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) is thrown if `proto` is neither `null` nor an [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

## References

1. [`Object.create()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)