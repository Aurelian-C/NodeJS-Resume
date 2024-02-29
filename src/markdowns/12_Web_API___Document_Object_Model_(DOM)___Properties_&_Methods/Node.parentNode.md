# Node.parentNode

The ==read-only== `parentNode` property of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==returns the parent of the specified node== in the DOM tree.

> **Note**: `Document` and `DocumentFragment` nodes can never have a parent, so `parentNode` will always return `null`. It also returns `null` if the node has just been created and is not yet attached to the tree.

## Syntax

```js
element.parentNode;
// or
node.parentNode;
```

## Return Value

- A `Node` that is the parent of the current node
- `null` if the node has no parent

## HTML Nodes vs Elements

In the HTML DOM (Document Object Model), an HTML document is a collection of nodes with/without child nodes:

- **Nodes** are ==Element== nodes, ==Text== nodes, and ==Comment== nodes;
- **Whitespace** between elements are also ==Text== nodes;
- **Elements** are only Element nodes.

### childNodes vs children

- **childNodes** returns child ==nodes== (**Element** nodes, **Text** nodes, and **Comment** nodes);
- **children** returns child ==elements== (not Text and Comment nodes).

### Siblings vs Element Siblings

- **Siblings** are "brothers" and "sisters";
- **Siblings** are nodes with the ==same parent== (in the same **childNodes** list);
- **Element Siblings** are elements with the ==same parent== (in the same **children** list).

## References

1. [Node.parentNode - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)
2. [parentNode - w3schools](https://www.w3schools.com/Jsref/prop_node_parentnode.asp)
