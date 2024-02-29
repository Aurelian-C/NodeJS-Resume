# Element: wheel event

The `wheel` event fires when the ==user rotates a wheel button== on a pointing device (typically a mouse). This event replaces the non-standard deprecated `mousewheel` event.

> **Note:** ==Don't confuse the `wheel` event with the `scroll` event==. The default action of a `wheel` event is implementation-specific, and doesn't necessarily dispatch a `scroll` event. Even when it does, the `delta*` values in the `wheel` event don't necessarily reflect the content's scrolling direction. Therefore, do not rely on the `wheel` event's `delta*` properties to get the scrolling direction. Instead, detect value changes of `scrollLeft` and `scrollTop` of the target in the `scroll` event.

## Syntax

Use the event name in methods like [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), or set an _event handler property_.

```js
addEventListener('wheel', (event) => {
    // statement
});
```

## References

1. [Element: wheel event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event)