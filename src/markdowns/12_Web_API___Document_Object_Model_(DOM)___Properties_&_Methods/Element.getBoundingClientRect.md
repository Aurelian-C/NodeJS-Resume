# Element.getBoundingClientRect()

The `Element.getBoundingClientRect()` method ==**returns a [`DOMRect`](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect) object** providing information about the size of an element and its position **_relative to the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport)_**==.

> **Note**: A **`DOMRect`** describes the size and position of a rectangle.

The `Element.getBoundingClientRect()` method return:

- the **size** of an _element_ 
- the element **position** relative to the _viewport_

## Syntax

```js
element.getBoundingClientRect()
```

## Parameters

None.

## Return value

The returned value is ==a `DOMRect` object== which is the smallest rectangle which contains the entire element, including its padding and border-width. The `left`, `top`, `right`, `bottom`, `x`, `y`, `width`, and `height` properties describe the position and size of the overall rectangle in pixels. Properties other than `width` and `height` are relative to the top-left of the viewport.

> **Note**: The scrolling that has been done is taken into account. This means that the rectangle's edges (`top`, `left`, `bottom`, and `right`) change their values every time the scrolling position changes.

![getBoundingClientRect](../../img/getBoundingClientRect.jpg)

==The `width` and `height` properties of the `DOMRect` object returned by the method include the `padding` and `border-width`, not only the content width/height==. In the standard box model, this would be equal to the `width` or `height` property of the element + `padding` + `border-width`. But if [`box-sizing: border-box`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) is set for the element this would be directly equal to its `width` or `height`.

Empty border-boxes are completely ignored. If all the element's border-boxes are empty, then a rectangle is returned with a `width` and `height` of zero and where the `top` and `left` are the top-left of the border-box for the first CSS box (in content order) for the element.

==The amount of scrolling that has been done of the viewport area (or any other scrollable element) is taken into account when computing the bounding rectangle. This means that the rectangle's boundary edges (`top`, `right`, `bottom`, `left`) change their values every time the scrolling position changes (_because their values are relative to the viewport and not absolute_)==.

> **Note**: If you need the bounding rectangle relative to the top-left corner of the document, just add the current scrolling position to the `top` and `left` properties (these can be obtained using [`window.scrollY`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY) and [`window.scrollX`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX)) to get a bounding rectangle which is independent from the current scrolling position.

## References

1. [Element.getBoundingClientRect() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

2. [getBoundingClientRect() - w3schools](https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp)
