# Document & Element: scroll event

The `scroll` event ==fires when the **document view** _or_ an **element** has been scrolled==.

## Syntax

Use the event name in methods like [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), or set an _event handler property_:

```js
addEventListener('scroll', (event) => {});
// or
onscroll = (event) => { };
```

## Event type

A generic [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event).

## Examples

### Scroll event throttling

==Since `scroll` events can fire at a high rate, the event handler shouldn't execute computationally expensive operations such as DOM modifications==. Instead, it is recommended to throttle the event using [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame), [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout), or a [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent), as follows.

Note, however, that input events and animation frames are fired at about the same rate, and therefore the optimization below is often unnecessary. This example optimizes the `scroll` event for `requestAnimationFrame`.

```js
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
}

document.addEventListener('scroll', (e) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
```

## References

1. [Document: scroll event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event)
2. [Element: scroll event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event)