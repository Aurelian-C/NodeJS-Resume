# Node.contains()

The `contains()` method of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==**returns a boolean value** indicating whether a node is a descendant of a given node, that is the node itself, one of its direct children ([`childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)), one of the children's direct children, and so on==.

> **Note:** A node is *contained* inside itself.

The `contains()` method returns:

- `true` if a node is a descendant of a node
- returns `false` if not

> **Note**: A descendant can be a child, grandchild, great-grandchild, ...

## Syntax

```js
node.contains(otherNode)
```

## Parameters

#### `otherNode`

The `Node` to test with.

> **Note:** `otherNode` is not optional, but can be set to `null`.

## Return value

A boolean value that is `true` if `otherNode` is contained in the node, `false` if not. If the `otherNode` parameter is `null`, `contains()` always returns `false`.

## Examples

This function checks to see if an element is in the page's body. As `contains` is inclusive and determining if the body contains itself isn't the intention of `isInPage` this case explicitly returns `false`.

```js
function isInPage(node) {
  return (node === document.body) ? false : document.body.contains(node);
}
```

## References

1. [Node.contains() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/contains)
2. [HTML DOM Element contains() - w3schools](https://www.w3schools.com/jsref/met_node_contains.asp)