# Element: click event

An element receives a `click` event when a pointing device button (such as a mouse's primary mouse button) is both pressed and released while the pointer is located inside the element.

If the button is pressed on one element and the pointer is moved outside the element before the button is released, the event is fired on the most specific ancestor element that contained both elements.

`click` fires after both the [`mousedown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event) and [`mouseup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event) events have fired, in that order.

## Syntax

Use the event name in methods like [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), or set an event handler property:

```js
addEventListener('click', (event) => {});
// or
onclick = (event) => {};
```

## Event type

A [`MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent). This interface also inherits properties of its parents, [`UIEvent`](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) and [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event).

## Usage notes

The `MouseEvent` object passed into the event handler for `click` has its [`detail`](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail) property set to the number of times the [`target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) was clicked. In other words, `detail` will be 2 for a double-click, 3 for triple-click, and so forth. This counter resets after a short interval without any clicks occurring; the specifics of how long that interval is may vary from browser to browser and across platforms. The interval is also likely to be affected by user preferences; for example, accessibility options may extend this interval to make it easier to perform multiple clicks with adaptive interfaces.

## Safari Mobile issues

Safari Mobile 7.0+ (and likely earlier versions too) suffers from a bug where `click` events aren't fired on elements that aren't typically interactive (e.g. `<div>`) and which also don't have event listeners directly attached to the elements themselves (i.e. event delegation is being used).

Safari Mobile considers the following elements to be typically interactive (and thus they aren't affected by this bug):

- [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) (but it must have an `href`)
- [`<area>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) (but it must have an `href`)
- [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) (but it must be associated with a form control)
- [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
- *This list is incomplete; you can help MDN by doing further testing/research and expanding it.*

## References

1. [Element: click event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)