# Element.clientHeight

The `clientHeight` ==read-only== property ==**returns the inner height of an element in pixels**, including padding, but not the border, margin or horizontal scrollbar==. `clientHeight` is zero for elements with no CSS or inline layout boxes.

`clientHeight` can be calculated as: CSS `height` + CSS `padding` - height of horizontal scrollbar (if present).

When `clientHeight` is used on the root element (the `<html>` element), (or on `<body>` if the document is in quirks mode), the viewport's height (excluding any horizontal scrollbar) is returned.

![clientHeight_Width](../../img/clientHeight_Width.png)

## Syntax

```js
element.clientHeight
```

## Return Value

An integer number.

> **Note:** ==This property will round the value to an integer==. If you need a fractional value, use [`element.getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).

## References

1. [Element.clientHeight - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight)

2. [Element clientHeight - w3schools](https://www.w3schools.com/jsref/prop_element_clientheight.asp)
