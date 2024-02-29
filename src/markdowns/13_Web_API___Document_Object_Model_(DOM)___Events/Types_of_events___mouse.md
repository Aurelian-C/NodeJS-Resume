# Mouse Events: `mouseout`, `mouseover`, `mouseenter` & `mousemove`

The `mouseout` event is ==fired at an [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) when a pointing device (usually a mouse) is used to move the cursor so that it is no longer contained within the element or one of its children. `mouseout` is also delivered to an element if the cursor enters a child element==, because the child element obscures the visible area of the element.

The `mouseover` event is ==fired at an `Element` when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements==.

The `mouseenter` event is ==fired at an `Element` when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired==.

The `mousemove` event is ==fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it==.

To see the difference between `mousemove`, `mouseenter` and `mouseover`, access this [W3Schools Tryit Editor](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseenter_mouseover#:~:text=mouseenter%20and%20mouseover.-,The%20mouseover%20event%20triggers%20when%20the%20mouse%20pointer%20enters%20the,moved%20over%20the%20div%20element.).

>The `mouseover` event triggers _when_ the mouse pointer _enters the element, and its child elements_.
>
>The `mouseenter` event is _only_ triggered when the mouse pointer _enters the element_.
>
>The `mousemove` event triggers _every time_ the mouse pointer is _moved over the element_.

## Syntax

Use the event name in methods like [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), or set an _event handler property_:

```js
addEventListener('mouseout', (event) => {});
onmouseout = (event) => {};

addEventListener('mouseover', (event) => {});
onmouseover = (event) => { };

addEventListener('mouseenter', (event) => {});
onmouseenter = (event) => { };
```

## Event type

A [`MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent). Inherits from [`UIEvent`](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) and [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event).

## References

1. [Element: mouseout event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event)
2. [Element: mouseover event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event)
3. [Element: mouseenter event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)
4. [Element: mousemove event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)