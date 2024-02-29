# Element.clientWidth

The `clientWidth` ==read-only== property ==**returns the inner width of an element in pixels**, including padding, but not the border, margin or vertical scrollbar==. `clientWidth` is zero for elements with no CSS or inline layout boxes.

When `clientWidth` is used on the root element (the `<html>` element), (or on `<body>` if the document is in quirks mode), the viewport's width (excluding any vertical scrollbar) is returned.

![clientHeight_Width](../../img/clientHeight_Width.png)

## Syntax

```js
element.clientWidth
```

## Return Value

An integer number.

> **Note:** This property will round the value to an integer. If you need a fractional value, use [`element.getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).

## References

1. [Element.clientWidth - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth)

2. [Element clientWidth - w3schools](https://www.w3schools.com/jsref/prop_element_clientwidth.asp)
