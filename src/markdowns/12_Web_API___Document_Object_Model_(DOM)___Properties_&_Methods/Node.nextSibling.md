# Node.nextSibling

The ==read-only== `nextSibling` property ==returns the next node on the same tree level (parent's [childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes) list), or `null` if the specified node is the last child in the parent element==.

> **Note**: Browsers insert text nodes into a document to represent whitespace in the source markup. Therefore a node obtained, for example, using [`Node.firstChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild) or [`Node.previousSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling) may refer to a whitespace text node rather than the actual element the author intended to get.
>
> You can use [`Element.nextElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling) to obtain the next element, skipping any whitespace nodes, other between-element text, or comments.
>
> `nextSibling` returns the next sibling **node**: an element node, a text node, or a comment node. Whitespace between elements are also text nodes. `Element.nextElementSibling` returns the next sibling `Element` (ignores text and comments).

To navigate the opposite way through the child nodes list use [`Node.previousSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling).

## Syntax

```js
element.nextSibling;
// or
node.nextSibling;
```

## Return Value

- The next sibling of the node
- `null` if no next sibling exists

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

1. [Node.nextSibling - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)
2. [nextSibling - w3schools](https://www.w3schools.com/jsref/prop_node_nextsibling.asp)
