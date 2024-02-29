# querySelector()

The [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) method `querySelector()` ==returns the _first_ [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned==.

> **Note**: You may also call `querySelector()` on any element; it will return only element which is descendant of the specified root element with the given selector/s.
>
> You can only query for `Element` nodes.

If the specified selector matches an ID that is incorrectly used more than once in the document, the first element with that ID is returned.

If you need a list of all elements matching the specified selectors, you should use [`querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) instead.

## Syntax

```js
element = document.querySelector('selector/s');
```

## Parameters

#### `selector/s`

 A string containing one or more selectors to match. This string must be a valid CSS selector string; if it isn't, a `SyntaxError` exception is thrown. Selectors select HTML elements based on id, classes, types, attributes, values of attributes etc.

## Return value

- an `Element` object representing the first element in the document that matches the specified set of [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), _or_

- `null` is returned if there are no matches

> **Note**: [CSS pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) will never return any elements.

## Examples

```js
// First element in the document with the class "myclass" is returned
const el = document.querySelector('.myclass');

// Returns the first element that is the last <li> tag in the HTML
const el = document.querySelector('li:last-of-type');

// Selectors can also be really powerful
const el = document.querySelector("div.user-panel.main input[name='login']");

// As all CSS selector strings are valid, you can also negate selectors
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']"
);
// This code above will select an input with a parent div with the user-panel class but not the main class.
```

## References

1. [Document.querySelector() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

2. [Document querySelector() - w3schools](https://www.w3schools.com/jsref/met_document_queryselector.asp)
