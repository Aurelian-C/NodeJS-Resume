# Window.scrollY

The ==read-only== `scrollY` property of the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) interface ==**returns the number of pixels that the document is currently scrolled vertically** (from the upper left corner of the window)==. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number.

> **Note**: The `scrollY` property is equal to the `pageYOffset` property. ==The `pageYOffset` property is an alias for the `scrollY` property==:
>
> ```js
> window.pageYOffset == window.scrollY; // true
> ```
>
> For cross-browser compatibility, use `window.pageYOffset` instead of `window.scrollY`.

You can get the number of pixels the document is scrolled horizontally from the [`scrollX`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX) property.

## Syntax

```js
window.scrollY;
// or just
scrollY;
```

## Return Value

A number. If the document isn't scrolled at all up or down, then `scrollY` is 0.

In more technical terms, `scrollY` returns the Y coordinate of the top edge of the current [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport). If there is no viewport, the returned value is 0.

## Notes

Use this property to check that the document hasn't already been scrolled when using relative scroll functions such as [`scrollBy()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy), [`scrollByLines()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByLines), or [`scrollByPages()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByPages).

There is slightly better support for `pageYOffset` than for `scrollY` in older browsers, but if you're not concerned about browsers more than a handful of years old, you can use either one.

## Examples

```js
// Make sure and go down to the second page
if (window.scrollY) {
  window.scroll(0, 0);  // reset the scroll position to the top left of the document.
}

window.scrollByPages(1);
```

## References

1. [Window scrollY - w3schools](https://www.w3schools.com/jsref/prop_win_scrolly.asp)

2. [Window.scrollY - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)

3. [Window pageYOffset - w3schools](https://www.w3schools.com/jsref/prop_win_pageyoffset.asp)

4. [Window.pageYOffset - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset)
