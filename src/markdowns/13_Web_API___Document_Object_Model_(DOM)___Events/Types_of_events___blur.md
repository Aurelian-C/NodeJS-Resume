# Element: blur event

The `blur` event ==fires when an element has lost focus==. The main difference between this event and [`focusout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event) is that `focusout` bubbles, while `blur` does not.

The opposite of `blur` is [`focus`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).

> **Note**: This event is not cancelable and does not bubble.

## Syntax

```js
addEventListener('blur', (event) => {
    // statement
});
```

## References

1. [Element: blur event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)