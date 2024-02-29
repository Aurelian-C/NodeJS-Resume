# HTMLElement: change event

The `change` event is ==fired for [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), and [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) elements when the user modifies the element's value. Unlike the [`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) event, the `change` event is not necessarily fired for each alteration to an element's `value`==.

Depending on the kind of element being changed and the way the user interacts with the element, the `change` event fires at a different moment:

- When a `<input type="checkbox">` element is checked or unchecked (by clicking or using the keyboard);
- When a `<input type="radio">` element is checked (but not when unchecked);
- When the user commits the change explicitly (e.g., by selecting a value from a `<select>`'s dropdown with a mouse click, by selecting a date from a date picker for `<input type="date">`, by selecting a file in the file picker for `<input type="file">`, etc.);
- When the element loses focus after its value was changed: for elements where the user's interaction is typing rather than selection, such as a `<textarea>` or the `text`, `search`, `url`, `tel`, `email`, or `password` types of the `<input>` element.

## Syntax

Use the event name in methods like [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), or set an _event handler property_:

```js
addEventListener('change', (event) => {});
// or
onchange = (event) => { };
```

## Event type

A generic [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event).

## References

1. [HTMLElement: change event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)