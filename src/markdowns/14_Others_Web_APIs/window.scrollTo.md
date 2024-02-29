# Window.scrollTo()

The `scrollTo()` method ==**scrolls to a particular set of coordinates in the document**==.

> **Note**: For the `scrollTo()` method to work, the document must be larger than the screen, and the scrollbar must be visible.

## Syntax

```js
window.scrollTo(x-coord, y-coord);
// or
window.scrollTo(options);
```

## Parameters

#### `x-coord`

 The coordinate to scroll to (horizontally), in pixels.

#### `y-coord`

The coordinate to scroll to (vertically), in pixels.

#### `options`

A dictionary containing the following parameters:

- `top` - specifies the number of pixels along the Y axis to scroll the window or element.
- `left` - specifies the number of pixels along the X axis to scroll the window or element.
- `behavior` - specifies whether the scrolling should animate smoothly (`smooth`), or happen instantly in a single jump (`auto`, the default value).

## Return Value

None (`undefined`)

## Examples

```js
window.scrollTo(0, 1000);

// Using options:
window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth',
});
```

## Notes

[`Window.scroll()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll) is effectively the same as this method. For relative scrolling, see [`Window.scrollBy()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy), [`Window.scrollByLines()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByLines), and [`Window.scrollByPages()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByPages).

For scrolling elements, see [`Element.scrollTop`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop) and [`Element.scrollLeft`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft).

## References

1. [Window scrollTo() - w3schools](https://www.w3schools.com/jsref/met_win_scrollto.asp)

2. [Window.scrollTo() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)
