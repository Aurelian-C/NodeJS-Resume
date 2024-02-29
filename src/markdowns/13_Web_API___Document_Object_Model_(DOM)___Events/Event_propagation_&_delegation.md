# Event propagation & delegation

HTML events are things that happen to HTML elements. They can be something the browser does, or something a user does. This results in calling a Web API to instantiate an [`Event`](https://www.w3schools.com/jsref/obj_events.asp) object with the interface defining the type of event that needs to be fired. If an event listener is set with JavaScript, it can run a callback as a reaction to these events when they are detected. 

[`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) gives access to the `Event` object, logging it out shows all the properties and methods it has:

```js
element.addEventListener('click', function (e) {
    console.log(e);
})
```

Here are some examples of HTML events:

- An HTML web page has finished loading
- An HTML input field was changed
- An HTML button was clicked

## What is event propagation?

==Event propagation is a way of defining the element order when an event occurs. If you have a `<li>` element inside a `<ul>` element inside of a `<div>` element, and the user clicks on the `<li>` element, which element's "click" event should be handled first?==

```html
<div>
  <ul>
    <li></li>
    <li></li>
  </ul>
<div>
```

HTML elements on a page are nested instead of covering each other, this means that when a `<li>` is clicked, every parent element receives a "click" event as well. That, in a nutshell is event propagation.

Propagation has 3 phases:

1. **Capturing** phase — _the event is first registered with the outermost element, then it propagates down the DOM tree towards target element through it’s child nodes, running event handlers on all elements which have an event handler registered (turned off by default)_. ==In capturing phase the outer most element's event is handled first and then the inner==: the <div> element's click event will be handled first, then the <ul> element's click event and then the <li> element's click event.
2. **Target** phase — _event is registered with the target, if there are event handlers, they are run_.
3. **Bubbling** phase — _the event is registered with the target element, handler is run, then all the parent nodes of the target consecutively receive the event and handlers attached to that event + parent element are run accordingly_. ==In bubbling phase the inner most element's event is handled first and then the outer==: the <li> element's click event is handled first, then the <ul> element's click event and then the <div> element's click event.

![event_propagation](../../img/event_propagation.jpg)

==Event bubbling and capture are terms that describe phases in **how the browser handles events targeted at nested elements**. With the `addEventListener()` method you can specify the propagation type by using the `useCapture` parameter==:

```js
addEventListener(event, function, useCapture);
```

==The default value of `useCapture` is `false`, which will use the bubbling propagation, when the value is set to `true`, the event uses the capturing propagation==.

There are two possible values for the `useCapture` argument of `addEventListener()`:

- If it’s `false` or omitted, then the handler is set on the _bubbling_ phase.
- If it’s `true`, then the handler is set on the _capturing_ phase.

>**Note**: ==Capturing phase is turned off by default so event handlers are not triggered. To catch an event on the capturing phase, the `useCapture` argument of `addEventListener()` should be set to `true`==. 
>
>```js
>element.addEventListener('click', function (e) {
>    console.log(e);
>}, true)
>```

## History of capturing and bubbling phases 

==Events capture and bubble for historical reasons==. During the time of “browser wars” different browsers had conflicting ways to deal with propagation. Microsoft and Netscape developers agreed that the parent elements should be aware if an event has occurred on a child element but disagreed on which order should they be notified.

One model was event capture (advocated by the Netscape developers). This notified the `<html>` element first and worked its way down the tree.

Microsoft supported event bubbling which notified the target element first, and worked its way up the tree, Netscape’s model notified `<html>` first and went down the structure towards the target.

The eventual compromise was that both bubbling and capturing should be the thing, so the event works its way down the tree and then back up again.

## Examples of event bubbling and capturing

### Setting a listener on a parent element

Consider a web page like this:

```html
<div id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>
```

Here the button is inside another element, a <div> element. We say that the <div> element here is the **parent** of the element it contains. What happens if we add a click event handler to the parent, then click the button?

```js
const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element`;
}

const container = document.querySelector('#container');
container.addEventListener('click', handleClick);
```

You'll see that the parent fires a click event when the user clicks the button:

```js
You clicked on a DIV element
```

This makes sense: the button is inside the <div>, so when you click the button you're also implicitly clicking the element it is inside.

### Bubbling example

What happens if we add event listeners to the button *and* the parent?

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

Let's try adding click event handlers to the button, its parent (the <div>), and the <body> element that contains both of them:

```js
const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element`;
}

const container = document.querySelector('#container');
const button = document.querySelector('button');

document.body.addEventListener('click', handleClick);
container.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);
```

You'll see that all three elements fire a click event when the user clicks the button:

```js
You clicked on a BUTTON element
You clicked on a DIV element
You clicked on a BODY element
```

In this case the click on the button fires first, followed by the click on its parent (the <div> element), followed by the <div> element's parent (the <body> element). We describe this by saying that the event **bubbles up** from the innermost element that was clicked. This behavior can be useful and can also cause unexpected problems.

### Video player example

This example shows and hides a <div> with a [<video>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) element inside it:

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source
      src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.mp4"
      type="video/mp4" />
    <source
      src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.webm"
      type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
```

When the [<button>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) is clicked, the video is displayed, by changing the class attribute on the <div> from `hidden` to `showing` (the example's CSS contains these two classes, which position the box off the screen and on the screen, respectively):

```js
const btn = document.querySelector('button');
const videoBox = document.querySelector('div');

function displayVideo() {
  if (videoBox.getAttribute('class') === 'hidden') {
    videoBox.setAttribute('class','showing');
  }
}

btn.addEventListener('click', displayVideo);
```

We then add a couple more "click" event handlers — the first one to the <div> and the second one to the <video>:

```js
videoBox.addEventListener('click', () => videoBox.setAttribute('class', 'hidden'));

const video = document.querySelector('video');

video.addEventListener('click', () => video.play());
```

Now, when the area of the <div> outside the video is clicked, the box should be hidden again and when the <video> itself is clicked, the video should start to play. But there's a problem — currently, when you click the video it starts to play, but it causes the <div> to be hidden at the same time. This is because the video is inside the <div> — it is part of it — so clicking the video actually runs *both* the above event handlers.

### Video player example explained

When an event is fired on an element that has parent elements (in this case, the [<video>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) has the [<div>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) as a parent), modern browsers run three different phases — the **capturing** phase, the **target** phase, and the **bubbling** phase.

In the **capturing** phase:

- The browser checks to see if the element's outer-most ancestor ([<html>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)) has a `click` event handler registered on it for the capturing phase, and runs it if so.
- Then it moves on to the next element inside <html> and does the same thing, then the next one, and so on until it reaches the direct parent of the element that was actually clicked.

In the **target** phase:

- The browser checks to see if the [`target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) property has an event handler for the `click` event registered on it, and runs it if so.
- Then, if [`bubbles`](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) is `true`, it propagates the event to the direct parent of the clicked element, then the next one, and so on until it reaches the <html> element. Otherwise, if [`bubbles`](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) is `false`, it doesn't propagate the event to any ancestors of the target.

In the **bubbling** phase, the exact opposite of the **capturing** phase occurs:

- The browser checks to see if the direct parent of the clicked element has a `click` event handler registered on it for the bubbling phase, and runs it if so.
- Then it moves on to the next immediate ancestor element and does the same thing, then the next one, and so on until it reaches the <html> element.

In modern browsers, by default, all event handlers are registered for the bubbling phase. So in our current example, when you click the video, the event bubbles from the <video> element outwards to the <html> element. Along the way:

- It finds the `click` handler on the <video> element and runs it, so the video first starts playing.
- It then finds the `click` handler on the `videoBox` element and runs that, so the video is hidden as well.

> **Note:** All JavaScript events go through the capturing and target phases. Whether an event enters the bubbling phase can be checked by the read-only [`bubbles`](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles) property.

> **Note:** Event listeners registered for the `<html>` element aren't at the top of the hierarchy. For example, event listeners registered for the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) and [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) objects are higher in the hierarchy.

### Fixing the problem with `stopPropagation()`

As we saw in the video example, this can be a very annoying behavior, but there is a way to prevent it! The standard [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) object has a function available on it called [`stopPropagation()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) which, when invoked on a handler's event object, makes it so that the first handler is run but the event doesn't bubble any further up the chain, so no more handlers will be run.

So we can fix our current problem by changing the second handler function in the previous code block to this:

```js
video.addEventListener('click', (e) => {
  e.stopPropagation();
  video.play();
});
```

> **Note:** Why bother with both capturing and bubbling? Well, in the bad old days when browsers were much less cross-compatible than they are now, Netscape only used event capturing, and Internet Explorer used only event bubbling. When the W3C decided to try to standardize the behavior and reach a consensus, they ended up with this system that included both, which is the one modern browsers implemented.

> **Note:** As mentioned above, by default almost all event handlers are registered in the bubbling phase, and this makes more sense most of the time. If you really want to register an event in the capturing phase instead, you can do so by registering your handler using [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), and setting the optional third property to `true`.

## Event delegation

Event bubbling isn't just annoying though: it can be very useful. In particular, it enables a practice called **event delegation**. In this practice, when we want some code to run when the user interacts with any one of a large number of child elements, we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually.

**Event delegation** takes advantage of event propagation and so, allows the event listener to be set on a parent element, thus avoiding adding event listeners to specific nodes. That event listener analyses bubbled events to match itself or any child elements to pass to an event handler.

## Not all events bubble

The [`blur`](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event), [`focus`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event), [`load`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) and [`unload`](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event) events don’t bubble like other events. The `blur` and `focus` events can actually be accessed using the capturing phase (in browsers other than IE which still hasn’t compromised on adding a capturing phase) instead of the bubbling phase

## References

1. [Event Propagation & Event delegation - medium.com](https://medium.com/@marjuhirsh/event-propagation-event-delegation-7d3db1baf02a)
1. [Introduction to events - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
1. [What is event bubbling and capturing? - stackoverflow.com](https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing)
1. [Event order - quirksmode.org](https://www.quirksmode.org/js/events_order.html)
1. [Event.stopPropagation() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
1. [stopPropagation() Event Method - w3schools](https://www.w3schools.com/jsref/event_stoppropagation.asp)