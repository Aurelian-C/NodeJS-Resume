# HTMLElement.offsetHeight

The `HTMLElement.offsetHeight` ==read-only property== ==returns the height of an element in pixels, including vertical padding and borders, but not the margin==.

> **Note:** This property will round the value to an integer. If you need a fractional value, use [`element.getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).

Typically, `offsetHeight` is a measurement in pixels of the element's CSS height, including any borders, padding, and horizontal scrollbars (if rendered). It does not include the height of pseudo-elements such as `::before` or `::after`. For the document body object, the measurement includes total linear content height instead of the element's CSS height. Floated elements extending below other linear content are ignored.

![dimensions_offset](../../img/dimensions_offset.png)

If the element is hidden (for example, by setting `style.display` on the element or one of its ancestors to `"none"`), then `0` is returned.

## Syntax

```js
element.offsetHeight
```

## Return value

An integer number that is the height of an element in pixels.

## References

1. [HTMLElement.offsetHeight - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight)
2. [HTML DOM Element offsetHeight - w3schools](https://www.w3schools.com/jsref/prop_element_offsetheight.asp)