# Node.previousSibling

The ==read-only== `previousSibling` property ==returns the previous node on the same tree level (parent's childNodes list), or `null` if the specified node is the first in that list==.

> **Note**: Browsers insert text nodes into a document to represent whitespace in the source markup. Therefore a node obtained, for example, using `Node.firstChild` or `Node.previousSibling` may refer to a whitespace text node rather than the actual element the author intended to get.
>
> You can use [`Element.previousElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling) to get the previous element node (skipping text nodes and any other non-element nodes).
>
> `previousSibling` returns the previous sibling node: an element node, a text node, or a comment node. Whitespace between elements are also text nodes. `Element.previousElementSibling` returns the previous sibling element (ignores text and comments)

To navigate the opposite way through the child nodes list use [`Node.nextSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling).

## Syntax

```js
element.previousSibling;
// or
node.previousSibling;
```

## Return Value

- The previous sibling of the node
- `null` if no previous sibling exists

## HTML Nodes vs Elements

In the HTML DOM (Document Object Model), an HTML document is a collection of nodes with/without child nodes:

- **Nodes** are ==Element== nodes, ==Text== nodes, and ==Comment== nodes;
- **Whitespace** between elements are also ==Text== nodes;
- **Elements** are only Element nodes.

### Siblings vs Element Siblings

- **Siblings** are "brothers" and "sisters"
- **Siblings** are ==nodes with the same parent== (in the same **childNodes** list)
- **Element Siblings** are ==elements with the same parent== (in the same **children** list)

### childNodes vs children

- **childNodes** returns ==child **nodes**== (element nodes, text nodes, and comment nodes)
- **children** returns ==child **elements**== (not text and comment nodes)

### nextSibling vs nextElementSibling

- **nextSibling** returns the ==next **node**== (an element node, a text node or a comment node).Whitespace between elements are also text nodes
- **nextElementSibling** returns the ==next **element**== (not text and comment nodes)

### previousSibling vs previousElementSibling

- **previousSibling** returns the ==previous **node**== (an element node, a text node or a comment node). Whitespace between elements are also text nodes
- **previousElementSibling** returns the ==previous **element**== (not text and comment nodes)

## References

1. [Node.previousSibling - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling)
2. [previousSibling - w3schools](https://www.w3schools.com/jsref/prop_node_previoussibling.asp)
