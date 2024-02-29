# Element.append()

The `Element.append()` method ==inserts a set of [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) objects or string objects **after the last child** of the `Element`. String objects are inserted as equivalent [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) nodes==.

Differences from [`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild):

|             `Element.append()`             |        `Node.appendChild()`        |
| :----------------------------------------: | :--------------------------------: |
| Allows you to also append _string objects_ |    Only accepts _Node objects_     |
|             _No return_ value              | _Returns_ the appended Node object |
|   Can append _several nodes and strings_   |     Can only append _one node_     |

## Syntax

```js
element.append(param1)
element.append(param1, param2)
element.append(param1, param2, /* … ,*/ paramN)
```

## Parameters

#### `param1`, …, `paramN`

A set of `Node` or string objects to insert.

## Return value

None (`undefined`).

## Example

```js
let div = document.createElement('div');
let p = document.createElement('p');

// Appending an element
div.append(p);

// Appending text
div.append('Some text');

// Appending an element and text
div.append('Some text', p);
```

## References

1. [Element.append() - MDN](https://developer.mozilla.org/en-US/docs/web/api/element/append)
