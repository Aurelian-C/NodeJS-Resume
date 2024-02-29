# Element.attributes

The `Element.attributes` property ==**returns a live collection** of all attribute nodes registered to the specified node==.

The live collection is a [`NamedNodeMap`](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap), not an `Array`, so it has no [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) methods and the [`Attr`](https://developer.mozilla.org/en-US/docs/Web/API/Attr) nodes' indexes may differ among browsers. To be more specific, ==`attributes` is a **key/value pair of strings** that represents any information regarding that attribute==.

> **Note**: The **`NamedNodeMap`** interface represents a collection of [`Attr`](https://developer.mozilla.org/en-US/docs/Web/API/Attr) objects. A `NamedNodeMap` is an _array-like unordered collection_, so objects inside a `NamedNodeMap` are not in any particular order, unlike [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), although they may be accessed by an index as in an array.
>
> A `NamedNodeMap` has a `length` property that returns the number of nodes. The nodes can be accessed by name or index numbers. The index starts at `0`.
>
> A `NamedNodeMap` object is *live* and will thus be auto-updated if changes are made to its contents internally or elsewhere.
>
> Although called `NamedNodeMap`, this interface doesn't deal with [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) objects but with [`Attr`](https://developer.mozilla.org/en-US/docs/Web/API/Attr) objects, which are a specialized class of [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) objects.

## Syntax

```js
node.attributes;
```

## Return Value

A `NamedNodeMap` object (a collection of attribute objects).

## References

1. [Element.attributes - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)

2. [HTML DOM Element attributes - w3school](https://www.w3schools.com/jsref/prop_node_attributes.asp)
