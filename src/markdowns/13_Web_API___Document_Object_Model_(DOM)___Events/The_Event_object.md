# The Event Object

==Sometimes, inside an event handler function, you'll see a parameter specified with a name such as `event`, `evt`, or `e`. This is called the event object, and it is **automatically passed to event handlers to provide extra features and information**==.

> **Note:** You can use any name you like for the event object — you just need to choose a name that you can then use to reference it inside the event handler function. `e`/`evt`/`event` is most commonly used by developers because they are short and easy to remember. It's always good to be consistent — with yourself, and with others if possible.

## How to create an `Event` object

The simplest way to create an event is to click somewhere on the page. When you click, a `click` event is triggered. This `event` is actually an object containing information about the action that just happened. In this example's case, the event would have info such as the coordinates of the click (`event.screenX` for example), the element on which you clicked (`event.target`), and much more.

==Now, events happen all the time, however you are not interested in all the events that happen. When you **are interested in some event, it's when you add an event listener to the element you know will have events flow through it**. For example you are interested in knowing **when the user clicks on a 'Subscribe' button** and you want to **do something** when this event happens. In order to do something about this event you bind an **event handler** to the button you are interested in. The way to bind the handler to the element is by doing `element.addEventListener(eventName, handler)`==.

==`eventName` is a **string** and it's the name of the event you are interested in, in this case that would be `'click'` (for the "click" event). The `handler` is simply a **function** which does something (it's executed) when the event happens. The handler function, by default, when executed **is passed the `event` object** (that was created when the event/action you are interested in happened) **as an argument**==.

==Defining the `event` as a parameter of your handler function is _optional_ but, sometimes (most times), it is useful for the handler function to know about the event that happened. When you **do** define it **this is the `e`/`evt`/`event` you see in some event handler functions**. Remember, _the `event` is just a regular JavaScript object, with lots of properties on it_==.

==`e`/`evt`/`event` only exists when an event happens. You could have the handler function, which has access to the `e` object when it gets executed, to store it in some global variable and work on that==.

> **Note**: The parameter `e`/`evt`/`event` is an [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) object, and it represents the event being fired which caused your function to be executed.

==Most event objects have a **_standard_ set of properties and methods** available on the `Event` object== (see the [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) object reference for a full list). ==Some event objects add **_extra_ properties that are relevant to that particular type of event**==. For example, the [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) event fires when the user presses a key. Its event object is a [`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent), which is a specialized `Event` object with a `key` property that tells you which key was pressed:

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);
```

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

## Most common properties and methods available on the `Event` object

### Preventing default behavior

Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default. The most common example is that of a web form, for example, a custom registration form. When you fill in the details and click the submit button, the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a "success message" page of some kind (or the same page, if another is not specified).

The trouble comes when the user has not submitted the data correctly — as a developer, you want to prevent the submission to the server and give an error message saying what's wrong and what needs to be done to put things right. Some browsers support automatic form data validation features, but since many don't, you are advised to not rely on those and implement your own validation checks. Let's look at a simple example.

First, a simple HTML form that requires you to enter your first and last name:

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>
```

Now some JavaScript — here we implement a very simple check inside a handler for the [`submit`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) event (the submit event is fired on a <form> when it is submitted) that tests whether the text fields are empty. If they are, we call the [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) function on the event object — which stops the <form> submission — and then display an error message in the paragraph below our form to tell the user what's wrong:

```js
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
});
```

## `Event.target` vs `Event.currentTarget`

The read-only [`Event.target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) property of the [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) interface is ==a reference to the object onto which the event was dispatched==. It is different from [`Event.currentTarget`](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget) when the event handler is called during the bubbling or capturing phase of the event.

The `Event.currentTarget` read-only property of the `Event` interface ==identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to `Event.target`, which identifies the element on which the event occurred and which may be its descendant==.

## References

1. [HTML DOM Event Objects - w3schools](https://www.w3schools.com/jsref/obj_events.asp)
2. [Event Object - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects)
3. [What exactly is the parameter e (event) and why pass it to JavaScript functions? - stackoverflow.com](https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions)
4. [HTMLFormElement: submit event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
5. [Event.preventDefault() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
6. [Event.target - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
7. [target Event Property - MDN](https://www.w3schools.com/jsref/event_target.asp)
8. [Event.currentTarget - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)
9. [currentTarget Event Property - w3schools](https://www.w3schools.com/jsref/event_currenttarget.asp)
10. [Event.composedPath() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath)

