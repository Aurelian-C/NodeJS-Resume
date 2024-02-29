# Document.head

The `document.head` property ==returns the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) element of the document==.

> **Note**: ==If there are no `<head>` element, HTML adds an empty one. If there are more than one `<head>` element, `document.head` property returns the _first_==.

`document.head` is ==read-only==. Trying to assign a value to this property will fail silently or, in [Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), throws a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

## Syntax

```js
document.head
```

## Return Value

The `<head>` element of the document (an [`HTMLHeadElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement)).

## References

1. [Document head - w3schools](https://www.w3schools.com/jsref/prop_doc_head.asp)

2. [Document.head - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/head)
