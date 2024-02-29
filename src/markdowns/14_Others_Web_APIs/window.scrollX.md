# Window.scrollX

The ==read-only== `scrollX` property of the `Window` interface ==**returns the number of pixels that the document is currently scrolled horizontally** (from the upper left corner of the window)==. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number. 

> **Note**: The `scrollX` property is equal to the `pageXOffset` property. ==The `pageXOffset` property is an alias for the `scrollX` property==:
>
> ```js
> window.pageXOffset == window.scrollX; // true
> ```
>
> For cross-browser compatibility, use `window.pageXOffset` instead of `window.scrollX`.

You can get the number of pixels the document is scrolled vertically from the [`scrollY`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY) property.

## Syntax

```js
window.scrollX;
// or just
scrollX;
```

## Return Value

A number. If the document isn't scrolled at all left or right, then `scrollX` returns 0.

In more technical terms, `scrollX` returns the X coordinate of the left edge of the current [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport). If there is no viewport, the returned value is 0.

## Examples

This example checks the current horizontal scroll position of the document. If it's greater than 400 pixels, the window is scrolled back to the beginning.

```js
if (window.scrollX > 400) {
  window.scroll(0,0);
}
```

## References

1. [Window scrollX - w3schools](https://www.w3schools.com/jsref/prop_win_scrollx.asp)

2. [Window.scrollX - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX)

3. [Window pageXOffset - w3schools](https://www.w3schools.com/jsref/prop_win_pagexoffset.asp)

4. [Window.pageXOffset - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageXOffset)
