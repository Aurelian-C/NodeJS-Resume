# HTMLElement: input event

The `input` event ==fires when the `value` of an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), or [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) element has been changed==.

For `<input>` elements with `type=checkbox` or `type=radio`, the `input` event should fire whenever a user toggles the control. However, historically this has not always been the case. Check compatibility, or use the [`HTMLElement: change event`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) instead for elements of these types.

> **Note:** The `input` event is fired every time the `value` of the element changes. This is unlike the `change` event, which only fires when the value is committed, such as by pressing the enter key, selecting a value from a list of options, and the like.

For `<textarea>` and `<input>` elements that accept text input (`type=text`, `type=tel`, etc.), the interface is [`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent); for others, the interface is [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event).

## Syntax

Use the event name in methods like [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), or set an _event handler property_:

```js
addEventListener('input', (event) => {});
// or
oninput = (event) => {};
```

## Event type

A generic [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event).

## References

1. [HTMLElement: input event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)