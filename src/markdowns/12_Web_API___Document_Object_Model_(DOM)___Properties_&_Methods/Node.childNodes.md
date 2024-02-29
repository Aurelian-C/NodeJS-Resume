# Node.childNodes

The ==read-only== `childNodes` property of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface returns a ==**live** [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) of child [`nodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node)== of the given element where the first child node is assigned index `0`. Child nodes include elements nodes, text nodes and comment nodes.

> **Note**: It is important to keep in mind that `childNodes` returns *all* child nodes: element nodes, non-element nodes like text (whitespace between elements are also text nodes) and comment. To get a collection containing only element nodes, use [`Element.children`](https://developer.mozilla.org/en-US/docs/Web/API/Element/children) instead.
>
> The `Element.children` property returns only **elements nodes** (ignores text and comments).

The `NodeList` being ==live== means that its ==content is changed each time new children are added or removed==.

`childNodes[0]` is the same as [`firstChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild).

## Syntax

```js
node.childNodes();
```

## Return value

A ==live `NodeList`== containing the children of the node.

> **Note:** Several calls to `childNodes` return the *same* `NodeList`.

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

1. [Node.childNodes - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
2. [childNodes - w3schools](https://www.w3schools.com/jsref/prop_node_childnodes.asp)
