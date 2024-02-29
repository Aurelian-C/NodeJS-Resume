# Element.scrollBy()

The `scrollBy()` method of the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface ==scrolls an element by the given amount==.

## Syntax

```js
element.scrollBy(x-coord, y-coord)
// or
element.scrollBy(options)
```

## Parameters

#### `x-coord, y-coord`

- `x-coord` is the horizontal pixel value that you want to scroll by.
- `y-coord` is the vertical pixel value that you want to scroll by.

#### `options`

A dictionary containing the following parameters:

- `top`: specifies the number of pixels along the Y axis to scroll the window or element.
- `left`: specifies the number of pixels along the X axis to scroll the window or element.
- `behavior`: specifies whether the scrolling should animate smoothly (`smooth`), happen instantly in a single jump (`instant`), or let the browser choose (`auto`, default).

## Return value

None (`undefined`).

## Examples

```js
element.scrollBy(300, 300);
```

Using `options`:

```js
element.scrollBy({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## References

1. [Element.scrollBy() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy)