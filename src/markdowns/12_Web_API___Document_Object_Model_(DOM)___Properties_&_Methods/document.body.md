# Document.body

The `document.body` property ==**sets** _or_ **returns** a document's [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) element==. `document.body` is the element that contains the content for the document. 

Though the `body` property is settable, setting a new body on a document will effectively remove all the current children of the existing `<body>` element.

> **Note**: Setting the `body` property overwrites all elements in the document's `<body>`.

## Syntax

```js
// Return the body property
document.body;

// Set the body property
document.body = newContent;
```

> `newContent`: The new content for the `<body>` element.

## Return Value

The `<body>` element of the document _or_ `null` if no such element exists.

## The difference between `document.body` and [`document.documentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)

- `document.body` returns the `<body>` element.
- `document.documentElement` returns the `<html>` element.

## References

1. [Document body - w3schools](https://www.w3schools.com/jsref/prop_doc_body.asp)

2. [Document.body - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/body)
