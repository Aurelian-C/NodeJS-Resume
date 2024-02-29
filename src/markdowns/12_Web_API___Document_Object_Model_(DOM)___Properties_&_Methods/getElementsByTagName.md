# Document.getElementsByTagName()

The `getElementsByTagName()` method of [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) interface ==returns a **live** [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) of elements with the specified tag name. The complete document is searched, including the root node. If not matching elements were found, an empty HTMLCollection is returned==.

> **Note**: `getElementsByTagName('*')` returns all elements in the document.

When called on the [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object, the complete document is searched, including the root node. You may also call `getElementsByTagName()` on any element; it will return only elements which are descendants of the specified root element with the given tag name.

> **Note**: The HTMLCollection is an **array-like** object of all child elements which have all of the given tag name.

The returned HTMLCollection is **live**, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call `document.getElementsByTagName()` again. Changes in the DOM will reflect in the array-like object as the changes occur. If an element selected by this array-like objcet no longer qualifies for the selector, it will automatically be removed.

The `getElementsByTagName()` method:

- returns a **live** HTMLCollection of elements with the specified tag name, in the order they appear in the tree
- is read-only

## Syntax

```js
const elements = document.getElementsByTagName(tagName);
// or
const elements = rootElement.getElementsByTagName(tagName);
```

## Parameters

#### `tagName`

 A ==string== representing the name of the elements. The special string `'*'` represents all elements.

## Return value

A ==live HTMLCollection== of found elements in the order they appear in the tree.

## Description

`getElementsByTagName()` starts from a particular parent element and searches top-down recursively through the DOM from that parent element, building a collection of all descendant elements which match the `tagName` parameter. This demonstrates both `document.getElementsByTagName()` and the functionally identical [`Element.getElementsByTagName()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName), which starts the search at a specific element within the DOM tree.

`document.getElementsByTagName()` is similar to `Element.getElementsByTagName()`, except that its search encompasses the whole document.

## References

1. [Document.getElementsByTagName() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)

2. [getElementsByTagName() - w3schools](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp)
