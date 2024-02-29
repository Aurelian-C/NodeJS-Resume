# Node.firstChild

The ==read-only== `firstChild` property of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==returns the _first child_ node of a specified node, or `null` if the node has no children==. If the node is a [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document), this property returns the first node in the list of its direct children.

> **Note:** The `firstChild` returns _any type of node_ that is the first child of a specified node. It may be an element node, a text node (whitespace between elements are also text nodes) or a comment node. If you want to get the first `Element` that is a child of another element, consider using [`Element.firstElementChild`](https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild).
>
> The `Element.firstElementChild` returns the first child `Element` node (ignores text and comment nodes).

The `firstChild` property is the same as [`childNodes[0]`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes).

## Syntax

```js
element.firstChild;
// or
node.firstChild;
```

## Return value

A `Node`, _or_ `null` if there are none.

## HTML Nodes vs Elements

In the HTML DOM (Document Object Model), an HTML document is a collection of nodes with/without child nodes:

- **Nodes** are ==Element== nodes, ==Text== nodes, and ==Comment== nodes;
- **Whitespace** between elements are also ==Text== nodes;
- **Elements** are only Element nodes.

### childNodes vs children

- **childNodes** returns child ==nodes== (**Element** nodes, **Text** nodes, and **Comment** nodes);
- **children** returns child ==elements== (not Text and Comment nodes).

### firstChild vs firstElementChild

- **firstChild** returns the ==first child **node**== (an element node, a text node or a comment node). Whitespace between elements are also text nodes
- **firstElementChild** returns the ==first child **element**== (not text and comment nodes)

### lastChild vs lastElementChild

- **lastChild** returns the ==last child **node**== (an element node, a text node or a comment node). Whitespace between elements are also text nodes
- **lastElementChild** returns ==the last child **element**== (not text and comment nodes)

## References

1. [Node.firstChild - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild)
2. [firstChild - w3schools](https://www.w3schools.com/jsref/prop_node_firstchild.asp)
