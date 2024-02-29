# Document.documentElement

`Document.documentElement` ==returns the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) that is the root element of the [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document)== (for example, the [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) element for HTML documents).

  The `documentElement` is ==read-only==. 

## Syntax

```js
document.documentElement;
```

## Return Value

A `Element` object.

## Description

==For any non-empty HTML document, `documentElement` will always be an `<html>` element==. For any non-empty XML document, `documentElement` will always be whatever element is the root element of the document.

## The difference between [`document.body`](https://developer.mozilla.org/en-US/docs/Web/API/Document/body) and `document.documentElement`

- `document.body` returns the `<body>` element
- `document.documentElement` returns the `<html>` element

## References

1. [documentElement - w3schools](https://www.w3schools.com/jsref/prop_document_documentelement.asp)

2. [Document.documentElement - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)
