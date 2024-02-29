# Window.innerHeight

The ==read-only== `innerHeight` property of the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) interface ==returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present==.

The value of `innerHeight` is taken from the height of the window's [layout viewport](https://developer.mozilla.org/en-US/docs/Glossary/Layout_viewport). The width can be obtained using the [`innerWidth`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth) property.

> **Note**: To obtain the height of the window minus its horizontal scroll bar and any borders, use the root [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) element's [`clientHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight) property instead.

## Return value

An integer value indicating the window's layout viewport height in pixels. The property is read only and has no default value.

## Notes

To change the size of a window, see [`window.resizeBy()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeBy) and [`window.resizeTo()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo).

To get the outer height of a window, i.e. the height of the whole browser window, see [`window.outerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/outerHeight).

The following figure shows the difference between `outerHeight` and `innerHeight`:

![innerHeight](../../img/innerHeight.png)

## References

1. [Window.innerHeight - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)
2. [Window innerHeight - w3schools](https://www.w3schools.com/jsref/prop_win_innerheight.asp)