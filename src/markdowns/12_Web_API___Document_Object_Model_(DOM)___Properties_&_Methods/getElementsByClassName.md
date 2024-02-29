# Document.getElementsByClassName()

The `getElementsByClassName` method of [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) interface ==returns a **live** [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) of elements with the specified class name(s). If not matching elements were found, an empty HTMLCollection is returned==.

When called on the [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object, the complete document is searched, including the root node. You may also call `getElementsByClassName()` on any element; it will return only elements which are descendants of the specified root element with the given class name(s).

> **Note**: The HTMLCollection is an **array-like** object of all child elements which have all of the given class name(s).

The returned HTMLCollection is **live**, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call `document.getElementsByClassName()` again.

> **Note**: `getElementsByClassName` returns a live HTMLCollection. Changes in the DOM will reflect in the array-like object as the changes occur. If an element selected by this array-like objcet no longer qualifies for the selector, it will automatically be removed. Be aware of this for iteration purposes.

The `getElementsByClassName` method:

- returns a **live** HTMLCollection of elements with a specified class name(s)
- is read-only
- can be called on any element, not only on the `document`. The element on which it is called will be used as the root of the search

## Syntax

```js
const elements = document.getElementsByClassName(classname/s);
// or
const elements = rootElement.getElementsByClassName(classname/s);
```

## Parameters

#### `classname/s`

A ==string== representing the class name(s) to match; multiple class names are separated by whitespace.

## Return value

A ==live HTMLCollection== of found elements.

## Example

```js
// Get all elements that have a class of 'test'
document.getElementsByClassName('test');

// Get all elements that have both the 'red' and 'test' classes
document.getElementsByClassName('red test');

// Get all elements that have a class of 'test', inside of an element that has the ID of 'main'
document.getElementById('main').getElementsByClassName('test');
```

## References

1. [Document.getElementsByClassName() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

2. [getElementsByClassName() - w3schools](https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp)
