# Keyboard Events: `keydown` & `keyup`

[`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) objects describe a ==user interaction with the keyboard==; each event describes a single interaction between the user and a key (or combination of a key with modifier keys) on the keyboard. ==The event type ([`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event), [`keypress`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event), or [`keyup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event)) identifies what kind of keyboard activity occurred==.

> **Note:** ==`KeyboardEvent` events just indicate what interaction the user had with a key on the keyboard at a low level, providing no contextual meaning to that interaction. When you need to handle text input, use the [`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) event instead==. Keyboard events may not be fired if the user is using an alternate means of entering text, such as a handwriting system on a tablet or graphics tablet.

## Events

The following events are based on the `KeyboardEvent` type. Each event applies generally to all of the recipients, including [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element), [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document), and [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window).

- `keydown` - ==the event fires when a key has been _pressed_==. Unlike the deprecated `keypress` event, the `keydown` event is fired for all keys, regardless of whether they produce a character value.

- `keyup` - ==the event fires when a key has been _released_==.

- `keypress` _(deprecated)_ - the event fires when _a key that normally produces a character value has been pressed_. This event was highly device-dependent and is obsolete. You should not use it.

> **Note**: ==The `keydown` and `keyup` events provide a code indicating which key is pressed, while `keypress` indicates which character was entered==. For example, a lowercase "a" will be reported as 65 by `keydown` and `keyup`, but as 97 by `keypress`. An uppercase "A" is reported as 65 by all events.

## Syntax

Use the event name in methods like [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), or set an _event handler property_:

```js
addEventListener('keydown', (event) => {});
onkeydown = (event) => {};

addEventListener('keyup', (event) => {});
onkeyup = (event) => {};
```

## Event type

A [`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent). Inherits from [`UIEvent`](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) and [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event).

## Special cases

==Some keys toggle the state of an indicator light; these include keys such as Caps Lock, Num Lock, and Scroll Lock. On Windows and Linux, these keys dispatch only the `keydown` and `keyup` events. However, a limitation of the macOS event model causes Caps Lock to dispatch only the `keydown` event==.

### Auto-repeat handling

When a key is pressed and held down, it begins to auto-repeat. This results in a sequence of events similar to the following being dispatched:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <<repeating until the user releases the key>>
6. `keyup`

## References

1. [Element: keydown event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)
1. [Element: keyup event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event)
1. [Element: keypress event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event)
1. [KeyboardEvent - MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)