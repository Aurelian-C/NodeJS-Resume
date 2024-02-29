# Node.parentElement

The ==read-only== `parentElement` property of [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==returns the parent [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) of the specified node, or `null` if the node either has no parent, or its parent isn't an`Element` node==.

> **Note**: The `parentElement` property returns the parent element of the specified node. The difference between `parentElement` and [`parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode), is that `parentElement` returns `null` if the parent node is not an `Element` node.
>
> ```js
> document.body.parentNode; // Returns the <html> element
> document.body.parentElement; // Returns the <html> element
>
> document.documentElement.parentNode; // Returns the Document node
> document.documentElement.parentElement; // Returns null (<html> does not have a parent element node)
> ```

## Syntax

```js
node.parentElement;
```

## Return value

An `Element` that is the parent element of the current node, or `null` if there isn't one.

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

1. [Node.parentElement - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
2. [parentElement Property - w3schools](https://www.w3schools.com/Jsref/prop_node_parentelement.asp)
