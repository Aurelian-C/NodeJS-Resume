# Node.lastChild

The ==read-only== `lastChild` property of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==returns the _last child_ node of a specified node==. If its parent is an element, then the child is generally an element node, a text node, or a comment node. It returns `null` if there are no child nodes.

> **Note**: `lastChild` returns the last child node: an element node, a text node, or a comment node. Whitespace between elements are also text nodes.
>
> If you want to get the last `Element` that is a last child of another element, consider using [`Element.lastElementChild`](https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild). The `lastElementChild` returns the last child `Element` node (ignores text and comment nodes).

## Syntax

```js
element.lastChild;
// or
node.lastChild;
```

## Return value

A `Node` that is the last child of the node, _or_ `null` is there are no child nodes.

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

1. [Node.lastChild - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild)
2. [lastChild - w3schools](https://www.w3schools.com/jsref/prop_node_lastchild.asp)
