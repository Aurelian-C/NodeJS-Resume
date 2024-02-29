# Node.replaceChild()

The `replaceChild()` method of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) element ==replaces a child node within the given (parent) node==.

## Syntax

```js
node.replaceChild(newChild, oldChild);
```

## Parameters

#### `newChild`

The new node to replace `oldChild`. 

> **Warning**: ==If the new node is already present somewhere else in the DOM, it is first removed from that position==.

#### `oldChild`

The child to be replaced.

> **Note**: The parameter order, *new* before *old*, is unusual. [`Element.replaceWith()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith), applying only to nodes that are elements, may be easier to read and use.

## Return value

The replaced `Node`. This is the same node as `oldChild`.

## Examples

```js
const newNode = document.createTextNode('Water');
const element = document.getElementById('myList').children[0];
element.replaceChild(newNode, element.childNodes[0]);
```

## References

1. [Node.replaceChild() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)
2. [replaceChild() - w3schools](https://www.w3schools.com/jsref/met_node_replacechild.asp)
