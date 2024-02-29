# Element.scrollTo()

The `scrollTo()` method of the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface ==scrolls to a particular set of coordinates inside a given element==.

## Syntax

```js
element.scrollTo(x-coord, y-coord)
// or
element.scrollTo(options)
```

## Parameters

#### `x-coord, y-coord`

- `x-coord` is the pixel along the horizontal axis of the element that you want displayed in the upper left.
- `y-coord` is the pixel along the vertical axis of the element that you want displayed in the upper left.

#### `options`

A dictionary containing the following parameters:

- `top`: specifies the number of pixels along the Y axis to scroll the window or element.
- `left`: specifies the number of pixels along the X axis to scroll the window or element.
- `behavior`: specifies whether the scrolling should animate smoothly (`smooth`), happen instantly in a single jump (`instant`), or let the browser choose (`auto`, default).

## Return value

None (`undefined`).

## Examples

```js
element.scrollTo(0, 1000);
```

Using `options`:

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## References

1. [Element.scrollTo() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)