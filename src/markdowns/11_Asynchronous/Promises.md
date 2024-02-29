# Promises

Promises are **the foundation of asynchronous programming in modern JavaScript**.

==A `Promise` is an **object returned by an asynchronous function**, which represents the current state of the asynchronous operation. At the time the `Promise` is returned to the caller, the asynchronous operation often isn't finished, but **the `Promise` object provides methods to handle the eventual success or failure of the asynchronous operation**==.

Traditionally (before promises), asynchronous tasks were designed as callbacks; we use of callbacks to implement asynchronous functions. With that design, you call the asynchronous function, passing in your callback function; the function returns immediately and calls your callback when the operation is finished. This design lead to a problem known as "Callback Hell".

On the other hand, ==a `Promise` allows to transform the callback-based API to a promise-based one==. With a promise-based API, the asynchronous function starts the operation and returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object. You can then attach handlers to the `Promise` object, and these handlers will be executed when the operation has succeeded or failed.

## What is a Promise?

==A `Promise` is an **object** that is used as a **placeholder for the future result** of an **asynchronous operation**. In other words, a `Promise` is a **container** for an **asynchronously** delivered **value** or a **container** for a future **value**==.

> **NOTE**: The perfect example of a future value is the response coming from an AJAX call. When we start the AJAX call, there is no value yet, but we know that there will be some value in the future, so we can use a Promise to handle this future value.

#### Promises vs Callback Hell

Essentially, ==a `Promise` is a returned object to which you attach callbacks, instead of passing callbacks into a function==. 

==With Promises we no longer need to rely on _events_ and _callbacks_ passed into asynchronous functions to handle asynchronous results. Instead of _nesting callbacks_, we can **chain Promises** for a sequence of asynchronous operations, escaping callback hell==:

```js
// In the old days, doing several asynchronous operations in a row would lead to the classic callback pyramid of doom (Callback Hell):
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

// With modern functions, we attach our callbacks to the returned promises instead, forming a promise chain
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(1)
    .then(() => {
    	console.log('1 second passed');
    	return wait(1);
	})
    .then(() => {
    	console.log('2 second passed');
    	return wait(1);
	})
    .then(() => {
    	console.log('3 second passed');
    	return wait(1);
	})
    .then(() => {
    	console.log('4 second passed');
	});

```

A Promise is a proxy for a value not necessarily known when the promise is created. It _allows you to associate handlers with an asynchronous action's eventual success value or failure reason_. This lets asynchronous methods return values like synchronous methods: ==instead of immediately returning the final value, the asynchronous method returns a *Promise* to supply the value at some point in the future==.

## The Promise lifecycle

Since Promises work with asynchronous operations, Promises are ==time sensitive==, so they ==change over time==, and so Promises can be in ==different states== and this is what they call the cycle of a Promise.

![asynchronous-promises1](../../img/asynchronous_promises1.jpg)

In the very beginning, we say that a Promise is ==**pending**== and this is _before any value resulting from the asynchronous task is available_. Now, _during the pending time, the asynchronous task is still doing its work in the background_. When the asynchronous task finishes, we say that the Promise is ==**settled**== and there are _two different types of settled_: ==**fulfilled**== and ==**rejected**==. _**Once settled, a Promise can not be resettled.** The immutability of a settled Promise is an important feature. **A Promise is only settled once** and so from there, the state will remain unchanged forever, so the Promise was either fulfilled or rejected, but it's impossible to change that state_.

==A **fulfilled Promise** is a Promise that has **successfully resulted in a value**.== On the other hand, a **rejected Promise** means that there has been an **error during the asynchronous task**.

Now these two different states are very important to understand because when we use Promises in our code, we will be able to **handle these different states** in order to do something as a result of either a successful Promise or a rejected one.

## Build & consume Promises

These different states that I showed you are relevant and useful when we use a Promise to get a result, which is called to **consume a promise**. So we consume a Promise when we already have a Promise, for example, the Promise that was returned from the [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) function. But in order for a Promise to exist in the first place, it must first be built, so it must be created. **_In the case of the Fetch API, it's the `fetch()` function that builds the Promise and returns it for us to consume, so in this case, we don't have to build the Promise ourselves in order to consume it_**. Now, most of the time we will actually just consume Promises, which is also the easier and more useful part, but sometimes we also need to build a Promise and to not just consume it.

## Promise terminology

Promises come with some quite specific terminology that it's worth getting clear about. First, a Promise can be in one of three states:

- **pending**: the Promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your Promise is in when it's returned from a call to `fetch()`, and the request is still being made.
- **fulfilled**: the asynchronous function has succeeded. When a Promise is fulfilled, its [`then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) handler is called.
- **rejected**: the asynchronous function has failed. When a Promise is rejected, its [`catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) handler is called.

Note that what "succeeded" or "failed" means here is up to the API in question: for example, `fetch()` considers a request successful if the server returned an error like [`404 Not Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404), but not if a network error prevented the request being sent.

Sometimes, we use the term **settled** to cover both **fulfilled** and **rejected**. A Promise is **resolved** if it is settled, or if it has been "locked in" to follow the state of another Promise.

## References

1. [Promise - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
1. [What is a Promise? - medium.com](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261#.aa7ubggsy)
1. [Using Promises - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
1. [How to use Promises - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
