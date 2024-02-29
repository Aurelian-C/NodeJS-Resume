# Event handling

==Events are signals fired inside the browser window, that notify of changes in the browser or operating system environment. Programmers can create **event handler code that will run when an event fires**, allowing web pages to respond appropriately to change==. 

Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

There are 3 ways of registering event handlers:

- `addEventListener()` method _(recommended)_;
- event handler properties;
- inline event handlers.

## Registering event listeners: `EventTarget.addEventListener()`

The _recommended_ mechanism for register event listeners in web pages is the **[`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)** method. ==This approach **allows multiple listeners to be assigned to an element without overwriting existing events**, and for listeners to be *removed* if needed using the [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) method==.

The `addEventListener()` method of the [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface ==**sets up a function that will be called whenever the specified event is delivered to the target**. Common targets are [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) or its children, [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) and [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window), but the target may be any object that supports events (such as [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest))==.

> **Note**: The `addEventListener()` method allows you to add event listeners on any HTML DOM object such as HTML elements, the HTML document, the `window` object, or other objects that support events, like the `xmlHttpRequest` object.

### Syntax

```js
addEventListener(type, listener)
addEventListener(type, listener, useCapture)
```

### Parameters

#### `type`

A case-sensitive string representing the [event type](https://developer.mozilla.org/en-US/docs/Web/Events) to listen for.

#### `listener`

A JavaScript function that we want to call when the event occurs.

#### `useCapture` _(optional)_

A boolean value specifying whether to use event bubbling or event capturing. If not specified, `useCapture` defaults to `false`.

### Description

==Inside the `addEventListener()` function, we specify **two parameters**:==

- ==the **name of the event** we want to register this handler for, _and_==
- ==**the code that comprises the handler function** we want to run in response to it==

```js
const btn = document.querySelector('button');

btn.addEventListener('click', function(event) {
   console.log('greet:', event);
});

// or

// It is fine to make the handler function a separate named function
function greet(event) {
  console.log('greet:', event);
};
btn.addEventListener('click', greet);
```

The `addEventListener()` method is the *recommended* way to register an event listener. The `addEventListener()` method:

- attaches an event handler to the specified element
- allows to add many event handlers to one element without overwriting existing event handlers
- allows to add many event handlers of the same type to one element (example: two "click" events)
- allows to add event listeners to any DOM object, not only HTML elements (example: the `window` object)
- works on any event target, not just HTML or SVG elements
- in contrast to using an event handler properties (example: `onXYZ` property), it gives you finer-grained control of the phase when the listener is activated (capturing vs. bubbling)
- makes it easier to control how the event reacts to bubbling

You can have multiple handlers for a single event by making more than one call to `addEventListener()`, providing different handlers:

```js
// Both functions would now run when the element is clicked
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
```

## Two ways NOT to register event listeners

==We recommend that you use `addEventListener()` to register event handlers==. It's the most powerful method and scales best with more complex programs. However, there are two other ways of registering event handlers that you might see: ==**event handler properties**== and ==**inline event handlers**==.

### Event handler properties

_By convention, JavaScript objects that fire events have a corresponding `onevent` properties (named by prefixing "on" to the name of the event)_. These properties are called to run associated handler code when the event is fired, and may also be called directly by your own code.

```js
const btn = document.querySelector('button');

function greet(event) {
  console.log('greet:', event);
}

btn.onclick = greet;
// or
btn.onclick = function(event) {
   console.log('greet:', event);
}
```

With event handler properties, you can't add more than one handler for a single event. If needed the handler can be replaced by assigning another function to the same property, but that will overwrite earlier assigned handlers. 

For example, you can call `addEventListener('click', handler)` on an element multiple times, with different functions specified in the second argument:

```js
element.addEventListener('click', function1);
element.addEventListener('click', function2);
```

This is impossible with event handler properties because any subsequent attempts to set the property will overwrite earlier ones:

```js
element.onclick = function1;
element.onclick = function2;
```

### Inline event handlers

You might also see a pattern like this in your code:

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

_The earliest method of registering event handlers found on the Web involved [event handler HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#event_handler_attributes) (or *inline event handlers*) like the one shown above — the attribute value is literally the JavaScript code you want to run when the event occurs_. The above example invokes a function defined inside a [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element on the same page, but you could also insert JavaScript directly inside the attribute, for example:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

_You can find HTML attribute equivalents for many of the event handler properties; however, you shouldn't use these — they are considered bad practice_. It might seem easy to use an event handler attribute if you are doing something really quick, but they quickly become unmanageable and inefficient. For a start, it is not a good idea to mix up your HTML and your JavaScript, as it becomes hard to read. Keeping your JavaScript separate is a good practice, and if it is in a separate file you can apply it to multiple HTML documents. 

Even in a single file, inline event handlers are not a good idea. One button is fine, but what if you had 100 buttons? You'd have to add 100 attributes to the file; it would quickly turn into a maintenance nightmare. With JavaScript, you could easily add an event handler function to all the buttons on the page no matter how many there were, using something like this:

```js
const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', bgChange);
}
```

Finally, ==many common server configurations will disallow inline JavaScript, as a security measure. **You should never use the HTML event handler attributes** — those are outdated, and using them is bad practice==.

## Removing event listeners: `EventTarget.removeEventListener()`

If you've added an event handler using `addEventListener()`, you can remove it again using the [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) method. The `removeEventListener()` method of the [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface removes an event listener previously registered with `addEventListener()` from the target. The event listener to be removed is identified using a combination of the event type, the event listener function itself, and various optional options that may affect the matching process.

Calling `removeEventListener()` with arguments that do not identify any currently registered event listener on the `EventTarget` has no effect. If an event listener is removed from an `EventTarget` while another listener of the target is processing an event, it will not be triggered by the event. However, it can be reattached.

> **Warning:** If a listener is registered twice, one with the *capture* flag set and one without, you must remove each one separately. Removal of a capturing listener does not affect a non-capturing version of the same listener, and vice versa.

### Syntax

```js
removeEventListener(type, listener)
removeEventListener(type, listener, useCapture)
```

### Parameters

#### `type`

A string which specifies the type of event for which to remove an event listener.

#### `listener`

The event listener function of the event handler to remove from the event target.

#### `useCapture` _(optional)_

A boolean value that specifies whether the event listener to be removed is registered as a capturing listener or not. If this parameter is absent, the default value `false` is assumed.

### Matching event listeners for removal

Given an event listener previously added by calling `addEventListener()`, you may eventually come to a point at which you need to remove it. Obviously, you need to specify the same `type` and `listener` parameters to `removeEventListener()`. 

But what about the `useCapture` parameters? `removeEventListener()` checks is the `capture`/`useCapture` flag. Its value must match for `removeEventListener()` to match. For example, consider this call to `addEventListener()`:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Now consider each of these two calls to `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false);	// Fails
element.removeEventListener("mousedown", handleMouseDown, true);	// Succeeds
```

The first call fails because the value of `useCapture` doesn't match. The second succeeds, since `useCapture` matches up.

> **Note**: For simple, small programs, cleaning up old, unused event handlers isn't necessary, but for larger, more complex programs, it can improve efficiency. Also, the ability to remove event handlers allows you to have the same button performing different actions in different circumstances: all you have to do is add or remove handlers.

## DOM Event Objects

When an event occurs in HTML, the event belongs to a certain event object, like a mouse click event belongs to the [`MouseEvent`](https://www.w3schools.com/jsref/obj_mouseevent.asp) object. 

All event objects are based on the `Event` Object, and inherit all of their properties and methods:

| Event Object                                           | Description                     |
| :----------------------------------------------------- | :------------------------------ |
| [Event](https://www.w3schools.com/jsref/obj_event.asp) | The parent of all event objects |

These are the most common event objects:

| Event Object                                                 | Description                                    |
| :----------------------------------------------------------- | :--------------------------------------------- |
| [AnimationEvent](https://www.w3schools.com/jsref/obj_animationevent.asp) | For CSS animations                             |
| [ClipboardEvent](https://www.w3schools.com/jsref/obj_clipboardevent.asp) | For modification of the clipboard              |
| [DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp) | For drag and drop interaction                  |
| [FocusEvent](https://www.w3schools.com/jsref/obj_focusevent.asp) | For focus-related events                       |
| [HashChangeEvent](https://www.w3schools.com/jsref/obj_hashchangeevent.asp) | For changes in the anchor part of the URL      |
| [InputEvent](https://www.w3schools.com/jsref/obj_inputevent.asp) | For user input                                 |
| [KeyboardEvent](https://www.w3schools.com/jsref/obj_keyboardevent.asp) | For keyboard interaction                       |
| [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) | For mouse interaction                          |
| [PageTransitionEvent](https://www.w3schools.com/jsref/obj_pagetransitionevent.asp) | For navigating to, and away from, web pages    |
| [PopStateEvent](https://www.w3schools.com/jsref/obj_popstateevent.asp) | For changes in the history entry               |
| [ProgressEvent](https://www.w3schools.com/jsref/obj_progressevent.asp) | For the progress of loading external resources |
| [StorageEvent](https://www.w3schools.com/jsref/obj_storageevent.asp) | For changes in the window's storage area.      |
| [TouchEvent](https://www.w3schools.com/jsref/obj_touchevent.asp) | For touch interaction                          |
| [TransitionEvent](https://www.w3schools.com/jsref/obj_transitionevent.asp) | For CSS transitions                            |
| [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp)   | For user interface interaction                 |
| [WheelEvent](https://www.w3schools.com/jsref/obj_wheelevent.asp) | For mousewheel interaction                     |

## The value of [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) within the handler

It is often desirable to reference the element on which the event handler was fired, such as when using a generic handler for a set of similar elements. ==When attaching a handler function to an element using `addEventListener()`, the value of `this` inside the handler will be a reference to the element. It will be the same as the value of the [`currentTarget`](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget) property of the event argument that is passed to the handler==:

```js
myElement.addEventListener('click', function (e) {
  console.log(this.className)           // logs the className of myElement
  console.log(e.currentTarget === this) // logs `true`
})
```

As a reminder, arrow functions do not have their own `this` context:

```js
myElement.addEventListener('click', (e) => {
  console.log(this.className)           // WARNING: `this` is not `myElement`
  console.log(e.currentTarget === this) // logs `false`
})
```

==If an event handler (for example, `onclick`) is specified on an element in the HTML source, the JavaScript code in the attribute value is effectively wrapped in a handler function that binds the value of `this` in a manner consistent with the `addEventListener()`==; an occurrence of `this` within the code represents a reference to the element:

```html
<table id="my_table" onclick="console.log(this.id);">
  <!-- `this` refers to the table; logs 'my_table' -->
  …
</table>
```

Note that the value of `this` inside a function, *called by* the code in the attribute value, behaves as per [standard rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this). This is shown in the following example:

```html
<script>
  function logID() {
    console.log(this.id);
  }
</script>
<table id="my_table" onclick="logID();">
  <!-- when called, `this` will refer to the global object -->
  …
</table>
```

The value of `this` within `logID()` is a reference to the global object [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) (or `undefined` in the case of [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

### Specifying `this` using bind()

The [`Function.prototype.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method lets you establish a fixed `this` context for all subsequent calls — bypassing problems where it's unclear what `this` will be, depending on the context from which your function was called. Note however that you'll need to keep a reference to the listener around so you can remove it later.

This is an example with and without `bind()`:

```js
const Something = function (element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.onclick1 = function (event) {
    console.log(this.name); // undefined, as |this| is the element
  };

  this.onclick2 = function (event) {
    console.log(this.name); // 'Something Good', as |this| is bound to newly created object
  };

  // bind causes a fixed `this` context to be assigned to onclick2
  this.onclick2 = this.onclick2.bind(this);

  element.addEventListener('click', this.onclick1, false);
  element.addEventListener('click', this.onclick2, false); // Trick
}
const s = new Something(document.body);
```

### Getting data into and out of an event listener

==It may seem that event listeners are like islands, and that it is extremely difficult to pass them any data, much less to get any data back from them after they execute. Event listeners only take one argument, the [Event Object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects), which is automatically passed to the listener, and the return value is ignored. So how can we get data in and back out of them? There are a number of good methods for doing this==.

#### Getting data into an event listener using `this`

As mentioned above, you can use `Function.prototype.bind()` to pass a value to an event listener via the `this` reference variable:

```js
const myButton = document.getElementById('my-button-id');
const someString = 'Data';

myButton.addEventListener('click', function () {
  console.log(this); // Expected Value: 'Data'
}.bind(someString));
```

==This method is suitable when you don't need to know which HTML element the event listener fired on programmatically from within the event listener. The primary benefit to doing this is that the event listener receives the data in much the same way that it would if you were to actually pass it through its argument list==.

#### Getting data into an event listener using the outer scope property

When an outer scope contains a variable declaration (with `const`, `let`), all the inner functions declared in that scope have access to that variable. Therefore, one of the simplest ways to access data from outside of an event listener is to make it accessible to the scope in which the event listener is declared.

```js
const myButton = document.getElementById('my-button-id');
let someString = 'Data';

myButton.addEventListener('click', () => {
  console.log(someString);  // Expected Value: 'Data'
  someString = 'Data Again';
});

console.log(someString);  // Expected Value: 'Data' (will never output 'Data Again')
```

> **Note:** Although inner scopes have access to `const`, `let` variables from outer scopes, you cannot expect any changes to these variables to be accessible after the event listener definition, within the same outer scope. Why? Because by the time the event listener would execute, the scope in which it was defined would have already finished executing

#### Getting data into and out of an event listener using objects

Unlike most functions in JavaScript, objects are retained in memory as long as a variable referencing them exists in memory. This, and the fact that objects can have properties, and that they can be passed around by reference, makes them likely candidates for sharing data among scopes.

> **Note:** Functions in JavaScript are actually objects (hence they too can have properties, and will be retained in memory even after they finish executing if assigned to a variable that persists in memory).

_Because object properties can be used to store data in memory as long as a variable referencing the object exists in memory, you can actually use them to get data into an event listener_, and any changes to the data back out after an event handler executes.

```js
const myButton = document.getElementById('my-button-id');
const someObject = {aProperty: 'Data'};

myButton.addEventListener('click', () => {
  console.log(someObject.aProperty);  // Expected Value: 'Data'
  someObject.aProperty = 'Data Again';  // Change the value
});

setInterval(() => {
  if (someObject.aProperty === 'Data Again') {
    console.log('Data Again: True');
    someObject.aProperty = 'Data';  // Reset value to wait for next event execution
  }
}, 5000);
```

In this example, even though the scope in which both the event listener and the interval function are defined would have finished executing before the original value of `someObject.aProperty` would have changed, because `someObject` persists in memory (by *reference*) in both the event listener and interval function, both have access to the same data (example: when one changes the data, the other can respond to the change).

> **Note:** Objects are stored in variables by _reference_, meaning only the memory location of the actual data is stored in the variable. Among other things, this means variables that "store" objects can actually affect other variables that get assigned ("store") the same object reference. When two variables reference the same object (e.g., `let a = b = {aProperty: 'Yeah'};`), changing the data in either variable will affect the other.

> **Note:** Because objects are stored in variables by reference, you can return an object from a function to keep it alive (preserve it in memory so you don't lose the data) after that function stops executing.

## References

1. [Introduction to events - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
2. [Event handling (overview) - MDN](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers)
3. [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
4. [addEventListener() - w3schools](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
5. [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
6. [HTML DOM Event Objects - w3schools](https://www.w3schools.com/jsref/obj_events.asp)