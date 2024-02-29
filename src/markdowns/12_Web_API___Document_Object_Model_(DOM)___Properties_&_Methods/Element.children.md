# Element.children

The ==read-only== `children` property ==returns a **live** [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) which contains all of the child [`elements`](https://developer.mozilla.org/en-US/docs/Web/API/Element) of the element upon which it was called==. If the element has no element children, then `children` is an empty list with a `length` of `0`.

> **Note**: `Element.children` includes ==only element nodes==. To get all child nodes, including non-element nodes like text and comment nodes, use [`Node.childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes).

## Syntax

```js
element.children;
```

## Example

```js
// Get a collection of the <body> element's children
const collection = document.body.children;
```

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

1. [Element.children - MDN](https://developer.mozilla.org/en-US/docs/web/api/element/children)
2. [children - w3schools](https://www.w3schools.com/jsref/prop_element_children.asp)
