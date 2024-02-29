# Element.scrollIntoView()

The [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface's `scrollIntoView()` method ==scrolls an element into the visible area of the browser window==.

> **Note**: Depending on the layout of other elements, some elements may not be scrolled completely to the top or to the bottom.

## Syntax

```js
element.scrollIntoView()
element.scrollIntoView(alignToTop)				// Boolean parameter
element.scrollIntoView(scrollIntoViewOptions)	// Object parameter
```

## Parameters

#### `alignToTop` _(optional)_

A boolean value:

- If `true`, the top of the element will be aligned to the top of the visible area of the scrollable ancestor. Corresponds to `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. This is the default value.
- If `false`, the bottom of the element will be aligned to the bottom of the visible area of the scrollable ancestor. Corresponds to `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

#### `scrollIntoViewOptions` _(optional)_

An Object with the following properties:

`behavior` _(optional)_

- Defines the transition animation. One of `auto` or `smooth`. Defaults to `auto`.

`block` _(optional)_

- Defines vertical alignment. One of `start`, `center`, `end`, or `nearest`. Defaults to `start`.

`inline` _(optional)_

- Defines horizontal alignment. One of `start`, `center`, `end`, or `nearest`. Defaults to `nearest`.

## Return value

None (`undefined`).

## Examples

```js
const element = document.getElementById('box');

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: 'end' });
element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
```

## References

1. [Element.scrollIntoView() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
2. [Element scrollIntoView - w3schools](https://www.w3schools.com/jsreF/met_element_scrollintoview.asp)
