# Promise.all()

The **`Promise.all()`** method ==takes an iterable of promises as input and returns a single [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This returned promise fulfills when all of the input's promises fulfill== (including when an empty iterable is passed), with an array of the fulfillment values. ==It rejects when any of the input's promises rejects, with this first rejection reason==.

## Syntax

```js
Promise.all(iterable)
```

## Parameters

#### `iterable`

An [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (such as an [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)) of promises.

## Return value

A Promise that is:

- **Already fulfilled**, if the `iterable` passed is empty.
- **Asynchronously fulfilled**, _when all the promises in the given `iterable` fulfill_. The fulfillment value is an array of fulfillment values, in the order of the promises passed, regardless of completion order. If the `iterable` passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) fulfilled.
- **Asynchronously rejected**, _when any of the promises in the given `iterable` rejects_. The rejection reason is the rejection reason of the first promise that was rejected.

## Description

The `Promise.all()` can be useful for aggregating the results of multiple promises. It is ==typically used when there are multiple related asynchronous tasks that the overall code relies on to work successfully== — all of whom we want to fulfill before the code execution continues.

==`Promise.all()` will reject immediately upon **any** of the input promises rejecting==. In comparison, the promise returned by [`Promise.allSettled()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) will wait for all input promises to complete, regardless of whether or not one rejects. Use `Promise.allSettled()` if you need the final result of every promise in the input iterable.

## References

1. [`Promise.all()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)