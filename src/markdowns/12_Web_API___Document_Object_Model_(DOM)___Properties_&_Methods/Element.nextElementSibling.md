# Element.nextElementSibling

The ==read-only== `nextElementSibling` property ==returns the next [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) in the same tree level (parent's children list), or `null` if the specified element is the last one in the list==.

## Syntax

```js
element.nextElementSibling;
```

## Return Value

- The next sibling element
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

1. [Element.nextElementSibling - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling)
2. [nextElementSibling - w3schools](https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp)
