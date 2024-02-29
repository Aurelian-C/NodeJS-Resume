# Consuming a Promise

After you build a Promise, you need to consume it. The state of a pending can either be ==**fulfilled** with a **value**== or ==**rejected** with a reason (**error**)==. When either of these options occur, the associated handlers queued up by a Promise's [`then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) method are called.

```js
const executor = function(resolve, reject) {
    if (true) {
        resolve(value);
    } else {
        reject(reason);
    }
};

const myPromise = new Promise(executor)
myPromise.then((value) => console.log(value))
```

> You can optionally `resolve()` or `reject()` with values, which will be passed to the callback functions attached with `.then()`. Once a Promise is settled, it must have a value (which may be `undefined` if you don't pass a `value` or a `reason` in the `executor`'s functions). That value must not change.

==If the Promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so _there is no race condition between an asynchronous operation completing and its handlers being attached_==.

## Chained Promises

==One of the great things about using Promises is chaining. The methods [`Promise.prototype.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), [`Promise.prototype.catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) and [`Promise.prototype.finally()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) are _used to associate further action with a Promise that becomes settled_. **As these methods return Promises, they can be chained**==. 

> **NOTE**: With `.then()` and `.catch()` methods is possible to chain Promises with precise control over _how and where errors are handled_. Promises allow you to mimic normal synchronous code’s `try`/`catch` behavior.

The `.then()` method takes up to two optional arguments; the first argument is a callback function for the fulfilled case of the Promise, and the second argument is a callback function for the rejected case. ==Each `.then()` returns a newly generated Promise object, which can optionally be used for chaining==, for example:

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(successCallbackA, failureCallbackA)
  .then(successCallbackB, failureCallbackB)
  .then(successCallbackC, failureCallbackC);
```

## Error Handling

We see that `.then()` have both a success and an error handler. What happens if `successCallbackA()` throws an error? The Promise returned from `.then()` will be rejected, but there’s nothing there to catch the rejection, meaning that an error in your app gets swallowed. For that reason, some people consider the code above to be an anti-pattern, and recommend the following, instead:

```js
// Anti-pattern (not good)
myPromise
  .then(successCallbackA, failureCallbackA)
  .then(successCallbackB, failureCallbackB)
  .then(successCallbackC, failureCallbackC);

// Recommended pattern
myPromise
  .then(successCallbackA)
  .then(successCallbackB)
  .then(successCallbackC)
  .catch(failureCallback);
```

Handling a rejected Promise in each `.then()` has consequences further down the Promise chain. Sometimes there is no choice, because an error must be handled immediately. In such cases we must throw an error of some type to maintain error state down the chain. On the other hand, in the absence of an immediate need, it is simpler to leave out error handling until a final `.catch()` statement. A `.catch()` is really just a `.then()` without a slot for a callback function for the case when the Promise is fulfilled.

> **NOTE**: ==It's recommend ending all Promise chains with a `.catch(failureCallback)`.==
>
> The arguments to `.then()` are optional, and `.catch(failureCallback)` is short for `.then(null, failureCallback)`.

Using arrow functions for the callback functions, implementation of the Promise chain might look something like this:

```js
myPromise
  .then(value => `${value} and bar`)
  .then(value => `${value} and bar again`)
  .then(value => `${value} and again`)
  .then(value => `${value} and again`)
  .then(value => console.log(value))
  .catch(err =>  console.error(err););
```

The termination condition of a Promise determines the "settled" state of the next Promise in the chain. A "fulfilled" state indicates a successful completion of the Promise, while a "rejected" state indicates a lack of success. ==The _return value_ of each fulfilled Promise in the chain is passed along to the next `.then()`, while the reason for rejection is passed along to the next rejection-handler function in the chain==.

### Chaining after a `.catch()`

==It's possible to chain *after* a failure==, i.e. a `.catch()`, which is useful to accomplish new actions even after an action failed in the chain:

```js
new Promise((resolve, reject) => {
    console.log("Initial");
    resolve();
})
   .then(() => {
    	throw new Error("Something failed");
		console.log("Do this");
  })
  .catch(() => {
		console.error("Do that");
  })
  .then(() => {
		console.log("Do this, no matter what happened before");
  });
```

This will output the following text:

```
Initial
Do that
Do this, no matter what happened before
```

> **NOTE:** The text "Do this" is not displayed because the "Something failed" error caused a rejection.

## Avoid nesting chains

==Simple Promise chains are best **kept flat without nesting**, as nesting can be a result of careless composition==. See [common mistakes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#common_mistakes).

Nesting is a control structure to limit the scope of `.catch()` statements. Specifically, a nested `.catch()` only catches failures in its scope and below, not errors higher up in the chain outside the nested scope. When used correctly, this gives greater precision in error recovery:

```js
doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {})
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));
```

Note that the optional steps here are nested, not from the indentation, but from the precarious placement of the outer `(` and `)` around them.

The inner neutralizing `.catch()` statement only catches failures from `doSomethingOptional()` and `doSomethingExtraNice()`, after which the code resumes with `moreCriticalStuff()`. Importantly, if `doSomethingCritical()` fails, its error is caught by the final (outer) `.catch()` only.

## Always return the result of a Promise

==Is very important that **always return the result of a Promise**, _otherwise callbacks won't catch the result of a previous Promise_ (with arrow functions, `() => x` is short for `() => { return x; }`). **If the previous handler started a Promise but did not return it, there's no way to track its settlement anymore, and the Promise is said to be "floating"**. Therefore, as a rule of thumb, whenever your operation encounters a Promise, return it and defer its handling to the next `.then()` handler==:

```js
// Not a good pattern
fetch()
    .then((url) => {    	
    	fetch(url); // I forgot to return this
	})
    .then((result) => {
    	// result is undefined, because nothing is returned from the previous handler. There's no way to know the return value of the fetch() call anymore, or whether it succeeded at all.
	});

// Always return the result of a promise
fetch()
    .then((url) => {    	
    	return fetch(url); 
	})
    .then((result) => {
    	return result.json();
	});
```

## There is no race condition between an asynchronous operation completing and its handlers being attached

Like synchronous code, ==chaining will result in a **sequence that runs in serial**==:

```js
fetch(url)
    .then(process)
    .then(save)
    .catch(handleErrors)
```

Assuming each of the functions, `fetch()`, `process()` and `save()` return Promises, `process()` will wait for `fetch()` to complete before starting, and `save()` will wait for `process()` to complete before starting. `handleErrors()` will only run if any of the previous Promises reject.

## References

1. [Promise - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
1. [What is a Promise? - medium.com](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261#.aa7ubggsy)
1. [Using Promises - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
1. [`Promise.prototype.then()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
1. [`Promise.prototype.catch()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
1. [`Promise.prototype.finally()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)
1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)