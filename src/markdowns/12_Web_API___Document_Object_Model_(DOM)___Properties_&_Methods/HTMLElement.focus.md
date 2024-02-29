# HTMLElement.focus()

The `HTMLElement.focus()` method ==**sets focus on the specified element**, _if it can be focused_. The focused element is the element that will receive keyboard and similar events by default==.

By default the browser will scroll the element into view after focusing it, and it may also provide visible indication of the focused element (typically by displaying a "focus ring" around the element). Parameter options are provided to disable the default scrolling and force visible indication on elements.

> **Note**: If you call `HTMLElement.focus()` from a mousedown event handler, you must call `event.preventDefault()` to keep the focus from leaving the `HTMLElement`

## Syntax

```js
element.focus()
element.focus(options)
```

## Parameters

#### `options` _(optional)_

An optional object for controlling aspects of the focusing process. This object may contain the following properties:

`preventScroll` _(optional)_

A boolean value indicating whether or not the browser should scroll the document to bring the newly-focused element into view. A value of `false` for `preventScroll` (the default) means that the browser will scroll the element into view after focusing it. If `preventScroll` is set to `true`, no scrolling will occur.

`focusVisible` _(optional)_

A boolean value that should be set to `true` to force visible indication that the element is focused. By default, or if the property is not `true`, a browser may still provide visible indication if it determines that this would improve accessibility for users.

## Return value

None (`undefined`).

## Examples

### Focus on a text field

This example uses a button to set the focus on a text field.

```html
<input id="myTextField" value="Text field." />
<button id="focusButton">Click to set focus on the text field</button>
```

The code below adds an event handler to set the focus on the text field when the button is pressed. Note that most browsers will automatically add visible indication (a "focus ring") for a focused text field, so the code does not set `focusVisible` to `true`.

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myTextField").focus();
});
```

### Focus on a button

This example demonstrates how you can set the focus on a button element.

```html
<button id="myButton">Button</button>
<button id="focusButton">Click to set focus on "Button"</button>
<button id="focusButtonVisibleIndication">
  Click to set focus and focusVisible on "Button"
</button>
```

The code below sets up handlers for click events on the middle and right buttons.

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myButton").focus();
});

document.getElementById("focusButtonVisibleIndication").addEventListener("click", () => {
  document.getElementById("myButton").focus({focusVisible: true});
});
```

### Focus with and without scrolling

This example shows the effect of setting focus with the option [`preventScroll`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#preventscroll) set `true` and `false` (the default).

```html
<button id="focus_scroll">Click to set focus on off-screen button</button>
<button id="focus_no_scroll">
  Click to set focus on offscreen button without scrolling
</button>

<div id="container">
  <button id="myButton" style="margin-top: 500px;">Button</button>
</div>
```

This code sets a click event handler on the first and second buttons to set the focus on the last button. Note that the first handler doesn't specify the `preventScroll` option so scrolling to the focused element will be enabled.

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus();  // default: {preventScroll:false}
});


document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus({preventScroll:true});
});
```

## References

1. [HTMLElement.focus() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)
2. [HTML DOM Element focus() - w3schools](https://www.w3schools.com/jsref/met_html_focus.asp)