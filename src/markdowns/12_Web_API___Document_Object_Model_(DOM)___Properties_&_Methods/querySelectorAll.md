# querySelectorAll()

The [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) method `querySelectorAll()` ==returns a **static (not live)** [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) representing a list of the document's elements that match the specified selector, or group of selectors. If no matches are found, empty `NodeList` is returned==.

> **Note**: You may also call `querySelectorAll()` on any element; it will return only elements which are descendants of the specified root element with the given selector/s.

> Note: You can only query for `Element` nodes.

## Syntax

```js
element = document.querySelectorAll('selector/s');
```

## Parameters

#### `selector/s` 

A ==string== containing one or more selectors to match against. This string must be a valid [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) string; if it's not, a `SyntaxError` exception is thrown. Selectors select HTML elements based on id, classes, types, attributes, values of attributes etc. Multiple selectors may be specified by separating them using commas.

## Return value

- a ==**non-live** `NodeList`== containing one `Element` object for each element that matches at least one of the specified selectors, _or_
- ==an empty `NodeList`== in case of no matches

> **Note:** If the specified `selector/s` include a [CSS pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements), the returned list is always empty.

## Examples

```js
// Returns a NodeList of all of the <p> elements in the document
const matches = document.querySelectorAll('p');

// Returns a list of all <div> elements within the document with a class of either note or alert
const matches = document.querySelectorAll('div.note, div.alert');

// You can use an attribute selector to return a list of the <iframe> elements in the document that contain an attribute named data-src
const matches = document.querySelectorAll('iframe[data-src]');
```

### Accessing the matches

Once the `NodeList` of matching elements is returned, you can examine it just like any array. If the array is empty (that is, its `length` property is 0), then no matches were found. 

Otherwise, you can use standard array notation to access the contents of the list. You can use any common looping statement, such as:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

## The Difference Between an `HTMLCollection` and a `NodeList`

A `NodeList` and an `HTMLcollection` is very much the same thing:

- Both are **array-like collections** (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0
- Both have a **length** property that returns the number of elements in the list (collection)
- An HTMLCollection is a collection of **document elements**
- A NodeList is a collection of **document nodes** (element nodes, attribute nodes, and text nodes)
- HTMLCollection items can be accessed by their name, id, or index number
- NodeList items can only be accessed by their index number
- An HTMLCollection is always a **live** collection. Example: If you add a `<li>` element to a list in the DOM, the list in the HTMLCollection will also change
- A NodeList is most often a **static** collection. Example: If you add a `<li>` element to a list in the DOM, the list in NodeList will not change
- The `getElementsByClassName()` and `getElementsByTagName()` methods return a live HTMLCollection
- The `querySelectorAll()` method returns a static NodeList
- The `childNodes` property returns a live NodeList

## References

1. [Document.querySelectorAll() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

2. [Document querySelectorAll() - w3schools](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)
