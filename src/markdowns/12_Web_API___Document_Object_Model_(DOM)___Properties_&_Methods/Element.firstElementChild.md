# Element.firstElementChild

The `firstElementChild` ==read-only== property ==returns the _first child_ [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) of the specified element, or `null` if there are no child elements==.

> **Note**: `firstElementChild` includes only element nodes. To get all child nodes, including non-element nodes like text and comment nodes, use [`Node.firstChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild).

The `firstElementChild` property returns the same as [`children[0]`](https://developer.mozilla.org/en-US/docs/web/api/element/children).

## Syntax

```js
element.firstElementChild;
```

## Return value

An `Element` object, _or_ `null`.

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

1. [Element.firstElementChild - MDN](https://developer.mozilla.org/en-US/docs/web/api/element/firstelementchild)
2. [firstElementChild - w3schools](https://www.w3schools.com/jsref/prop_element_firstelementchild.asp)
