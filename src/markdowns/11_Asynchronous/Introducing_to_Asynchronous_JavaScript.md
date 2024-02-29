# Introducing to Asynchronous JavaScript

JavaScript is a ==**single-threaded** language== and, at the same time, also ==non-blocking, **asynchronous** and concurrent==.

==JavaScript is a single-threaded programming language which means **only one thing can happen at a time**. That is, the **JavaScript Engine can only process one statement at a time** in a single thread. _While the single-threaded languages simplify writing code because you don’t have to worry about the concurrency issues, this also means you can’t perform long operations such as network access without blocking the main thread_==. Imagine requesting some data from an API; depending upon the situation, the server might take some time to process the request while blocking the main thread making the web page unresponsive.

That’s where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as **callbacks** or **Promises**), you can perform long network requests without blocking the main thread. _Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result_.

## Single-Thread Language

A single-thread language is one with a ==single Call Stack== and a ==single Memory Heap==. It means that it ==runs only one thing at a time==.

==In a single-thread language like JavaScript, browser steps through the code **_one line at a time, in the order we wrote it_**==. At each point, the browser waits for each line of code to finish its work before going on to the next line. It has to do this because each line depends on the work done in the preceding lines. That makes this a **synchronous program**.

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = 'John';
const greeting = makeGreeting(name);
console.log(greeting); // "Hello, my name is John!"
```

Here, `makeGreeting()` is a ==**synchronous function**== _because the caller has to wait for the function to finish its work and return a value before the caller can continue_.

> **NOTE**: JavaScript has only **one threat of execution** and so it can **only do one thing at a time**. There is absolutely no multitasking happening in JavaScript itself.

## Single-Thread Language problem: long-running synchronous functions that work in the Call Stack

What if a synchronous function takes a long time? We'll start by looking at the problem with long-running synchronous functions, which make asynchronous programming a necessity. Consider the following code:

```js
let number;
const longRunningTask = function() {
    for (let i = 0; i < 10000000; i++) {
        number = i;
    };
    console.log('2. Long running task has finished...')
};

console.log('1. Start');
longRunningTask();
console.log('3. Finish');

// 1. Start
// 2. Long running task has finished...
// 3. Finish
```

What we should note here is that the browser effectively steps through the program _one line at a time, in the order we wrote it_, and at each point it waits for the line to finish its work, before going on to the next line. It has to do this, because each line depends on the work that was done in the preceding lines. _You'll find that while our `for` loop is running, our program is completely unresponsive: the user can't type anything, or click anything, or do anything else. This is the basic problem with long-running synchronous functions_. What we would like here is a way that our program can:

- start a long-running operation by calling a function;
- have the function start the operation and return right away, so our program can still be responsive to other events;
- be notified with the result of the operation, when it eventually completes.

==That's what an **asynchronous function** offers us. Asynchronous programming is a technique that enables your program to start a potentially **long-running task**, and then rather than having to wait until that task has finished, to be able to continue to be **responsive to other events while the long-running task runs**. Once the task is completed, your program is presented with the result==.

## Asynchronous functions & Web APIs

==**Browsers** provide to JavaScript language **Web APIs**, so JavaScript can use asynchronous functions.== When you run some JavaScript code in a browser, the JavaScript Engine starts to parse the code. Each line is executed and popped on and off the Call Stack. But, what happen when the JavaScript Engine meet a Web APIs function? ==Web APIs are not something JavaScript Engine recognizes, so the JavaScript Engine knows to pass Web APIs functions to the browser for handle them==. When the browser has finished running its Web APIs functions, it puts what is needed to be ran by JavaScript into the Callback Queue. The Callback Queue can't be ran until the Call Stack is completely empty. So, the Event Loop is constantly checking the Call Stack to see if it is empty, so that it can add anything in the Callback Queue back into the Call Stack. And finally, once it is back in the Call Stack, it is ran and then popped off the stack.

```js
let number;

console.log('1. Start');

setTimeout(function() {
    for (let i = 0; i < 1000000; i++) {
        number = i;
    };
    console.log('2. Long running task has finished...')
}, 1);

console.log('3. Finish');

// 1. Start
// 3. Finish
// 2. Long running task has finished...
```

## Synchronous vs Asynchronous

In **synchronous** programming, tasks are executed one after another. Each task waits for any previous task to be completed and is executed only then.

In **asynchronous** programming, when one task is executed, you can switch to a different task without waiting for the previous one to be completed.

## Early Asynchronous Programming & Event handlers

Event handlers are a form of asynchronous programming: you provide a function (the event handler) that will be called, not right away, but whenever the event happens. If "the event" is "the asynchronous operation has completed", then that event could be used to notify the caller about the result of an asynchronous function call. Some early asynchronous APIs used events in just this way.

The [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) API enables you to make HTTP requests to a remote server using JavaScript. Since this can take a long time it's an asynchronous API, and you get notified about the progress and eventual completion of a request by attaching event listeners to the `XMLHttpRequest` object.

```js
const request = new XMLHttpRequest();
request.open('GET', 'https://someApi.com/endpoint');
request.send();
request.addEventListener('load', function () {
  // statement
});
```

## Early Asynchronous Programming & Chaining Callbacks: Callback Hell

An event handler is a particular type of callback. A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. As we just saw, callbacks used to be the main way asynchronous functions were implemented in JavaScript.

However, callback-based code can get hard to understand when the callback itself has to call functions that accept a callback. This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions.

```js
const request1 = new XMLHttpRequest();
request.open('GET', 'https://someApi.com/endpoint');
request.send();
request.addEventListener('load', function () {
	const request2 = new XMLHttpRequest();
	request.open('GET', 'https://someApi.com/endpoint');
	request.send();
	request.addEventListener('load', function() {
		const request3 = new XMLHttpRequest();
		request.open('GET', 'https://someApi.com/endpoint');
		request.addEventListener('load', function() {
			//statement
		};
	});
});

// Another example of Callback Hell
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
```

Because we have to call callbacks inside callbacks, we get a deeply nested functions, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).

When we nest callbacks like this, it can also get very hard to handle errors: often you have to handle errors at each level of the "pyramid", instead of having error handling only once at the top level. For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Early Asynchronous Programming: AJAX

==**A**==synchronous ==**J**==avaScript ==**A**==nd ==**X**==ML, while ==not a technology in itself (is not a programming language)==, is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a combination of existing technologies together, including [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or [XHTML](https://developer.mozilla.org/en-US/docs/Glossary/XHTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), [XML](https://developer.mozilla.org/en-US/docs/Web/XML), [XSLT](https://developer.mozilla.org/en-US/docs/Web/XSLT), and most importantly the [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object. When these technologies are combined in the AJAX model, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.

==In a nutshell, AJAX is the use of the `XMLHttpRequest` object to communicate with servers.== ==It can send and receive information in various formats, including JSON, XML, HTML, and text files.== AJAX's most appealing characteristic is its "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.

The two major features of AJAX allow you to do the following:

- Make requests to the server without reloading the page
- Receive and work with data from the server

![asynchronous_ajax](D:\Websites\Projects\Cioloca Aurelian__Javascript Resume\src\img\asynchronous_ajax.jpg)

Modern Browsers can use [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of the `XMLHttpRequest` Object. The Fetch API interface allows web browser to make HTTP requests to web servers. If you use the `XMLHttpRequest` Object, Fetch API can do the same in a simpler way. Fetch API is a modern, promise-based replacement for `XMLHttpRequest`.

>**NOTE**: ==AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or **[JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON) text**.== JSON is preferred over XML nowadays because of its many advantages such as being a part of JavaScript, thus being lighter in size. Both JSON and XML are used for packaging information in the AJAX model.
>
>![async](../../img/asynchronous_api-format.jpg)

### What is JSON?

JSON stands for ==**J**==ava==**S**==cript ==**O**==bject ==**N**==otation. JSON is a ==**text format** for _storing and transporting data_==.

> **NOTE**: The JSON syntax is derived from JavaScript Object Notation, but the JSON format is text only. Code for reading and generating JSON exists in many programming languages.

#### Why use JSON instead XML?

==**The JSON format is syntactically similar to the code for creating JavaScript objects.** Because of this, a JavaScript program can easily convert JSON data into JavaScript objects==. Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

==When storing data, the data has to be a certain format, and regardless of where you choose to store it, *text* is always one of the legal formats. JSON makes it possible to **store JavaScript objects as text**.==

JavaScript has a built in function for converting JSON strings into JavaScript objects: [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

JavaScript also has a built-in function for converting an object into a JSON string: [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

## The core of AJAX: XMLHttpRequest API

==`XMLHttpRequest` (XHR) objects are used to interact with servers==. You can retrieve data from a URL without having to do a full page refresh. This enables a web page to update just part of a page without disrupting what the user is doing. `XMLHttpRequest` is used heavily in AJAX programming.

> **NOTE:** The constructor `XMLHttpRequest` isn't limited to only XML documents. It starts with "XML" because when it was created the main format that was originally used for asynchronous data exchange was XML.

To make an HTTP request to the server with JavaScript, you need an instance of an object with the necessary functionality. This is where `XMLHttpRequest()` constructor comes in.

### Using XMLHttpRequest API

To send an HTTP request, first you need create an `XMLHttpRequest` object:

```js
const httpRequest = new XMLHttpRequest();
```

> **NOTE**: The `XMLHttpRequest()` constructor initializes an `XMLHttpRequest`. It must be called before any other method calls.

After you create an `XMLHttpRequest` object, you need to actually make the request, by calling the [`open()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open) and [`send()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send) methods of the HTTP request object:

```js
httpRequest.open('GET', 'http://www.example.org/example.txt');
httpRequest.send();
```

After the transaction completes, you will receive a response back. The `XMLHttpRequest` object will contain useful information such as the response body and the [HTTP status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) of the result. You need to handle that result by adding an event listener to the `XMLHttpRequest` object:

```js
httpRequest.addEventListener('load', function() {});
```

### Summary syntax

```js
const httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://www.example.org/example.txt');
httpRequest.send();
httpRequest.addEventListener('load', function() {});
```

## More on `XMLHttpRequest.open()` method

### Syntax

```js
open(method, url)
open(method, url, async)
open(method, url, async, user)
open(method, url, async, user, password)
```

### Parameters

#### `method`

The [HTTP request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) to use, such as `"GET"`, `"POST"`, `"PUT"`, `"DELETE"`, etc.

#### `url`

A string representing the URL to send the request to.

#### `async` _(optional)_

An optional Boolean parameter, defaulting to `true`, indicating whether or not to perform the operation asynchronously. If this value is `false`, the `send()` method does not return until the response is received. If `true`, notification of a completed transaction is provided using event listeners. This *must* be true if the `multipart` attribute is `true`, or an exception will be thrown.

#### `user` _(optional)_

The optional user name to use for authentication purposes; by default, this is the `null` value.

#### `password` _(optional)_

The optional password to use for authentication purposes; by default, this is the `null` value.

## More on `XMLHttpRequest.send()` method

The `XMLHttpRequest` method `send()` sends the request to the server. If the request is asynchronous (which is the default), this method returns as soon as the request is sent and the result is delivered using events. If the request is synchronous, this method doesn't return until the response has arrived.

`send()` accepts an optional parameter which lets you specify the request's body; this is primarily used for requests such as [`PUT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT). If the request method is [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) or [`HEAD`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD), the `body` parameter is ignored and the request body is set to `null`.

### Syntax

```js
send()
send(body)
```

### Parameters

#### `body` _(optional)_

A body of data to be sent in the XHR request. This can be:

- A [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document), in which case it is serialized before being sent.
- An `XMLHttpRequestBodyInit`, which [per the Fetch spec](https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit) can be a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob), an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), a [`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), a [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView), a [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData), a [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams), or a string literal or object.
- `null`

If no value is specified for the body, a default value of `null` is used.

## References

1. [Introducing asynchronous JavaScript - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
2. [AJAX - MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
3. [AJAX Introduction - w3schools](https://www.w3schools.com/js/js_ajax_intro.asp)
4. [`XMLHttpRequest` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
5. [Using `XMLHttpRequest` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
6. [`XMLHttpRequest.open()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)
7. [`XMLHttpRequest.send()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)
8. [HTTP request methods - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
9. [JSON - MDN](https://developer.mozilla.org/en-US/docs/Glossary/JSON)
10. [JSON Introduction - w3schools](https://www.w3schools.com/js/js_json_intro.asp)
11. [`JSON.parse()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
12. [`JSON.stringify()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
13. [Asynchronous and Single-threaded JavaScript? Meet the Event Loop - thecodest.co](https://thecodest.co/blog/asynchronous-and-single-threaded-javascript-meet-the-event-loop/)
14. [JavaScript Cheat Sheet: The Advanced Concepts - ZTM](https://zerotomastery.io/cheatsheets/javascript-cheatsheet-the-advanced-concepts/)
15. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
