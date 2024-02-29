# Document.getElementById()

The [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) method `getElementById()` ==returns an [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) object representing the element whose [`ID`](https://developer.mozilla.org/en-US/docs/Web/API/Element/id) property matches the specified string==. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly. Since the same ID shouldn't occur more than once on your page, it'll always return exactly that one element.

> **Note**: Any ID should be unique, but if two or more elements with the same ID exist, `getElementById()` returns the first.

The `getElementById()` method:

- takes as parameter an ID (without `#`, just the string name) and returns the element that has that ID
- returns `null` if no element with the specified ID could be found

> **Note**: If you need to get access to an element which doesn't have an ID, you can use [`querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) to find the element using any [selector](https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector).

## Syntax

```js
const element = document.getElementById(id);
```

## Parameters

#### `id`

The ID of the element to locate but without `#`. The ID is case-sensitive string which is unique within the document; only one element may have any given ID.

## Return value

- An `Element` object describing the DOM element object matching the specified ID, _or_

- `null` if no matching element was found in the document

## Description

Unlike some other element-lookup methods such as [`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) and [`Document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll), ==`getElementById()` is only available as a method of the global `document` object, and *not* available as a method on all element objects in the DOM==:

```js
const parentDOM = document.getElementById("parent-id");
const test1 = parentDOM.getElementById("test1"); // Uncaught TypeError: parentDOM.getElementById is not a function
```

==Elements not in the document are not searched by `getElementById()`==. When creating an element and assigning it an ID, you have to insert the element into the document tree with [`Node.insertBefore()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) or a similar method before you can access it with `getElementById()`:

```js
const element = document.createElement('div');
element.id = 'testqq';
const el = document.getElementById('testqq'); // el will be null!
```

## References

1. [Document.getElementById() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

2. [Document getElementById() - w3schools](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
