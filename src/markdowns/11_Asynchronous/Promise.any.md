# Promise.any()

The **`Promise.any()`** method ==takes an iterable of promises as input and returns a single [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject== (including when an empty iterable is passed), with an [`AggregateError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) containing an array of rejection reasons.

## Syntax

```js
Promise.any(iterable)
```

## Parameters

#### `iterable`

An [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (such as an [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)) of promises.

## Return value

A Promise that is:

- **Already rejected**, if the `iterable` passed is empty.
- **Asynchronously fulfilled**, when any of the promises in the given `iterable` fulfills. The fulfillment value is the fulfillment value of the first promise that was fulfilled.
- **Asynchronously rejected**, when all of the promises in the given `iterable` reject. The rejection reason is an [`AggregateError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) containing an array of rejection reasons in its `errors` property. The errors are in the order of the promises passed, regardless of completion order. If the `iterable` passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) rejected.

## Description

The `Promise.any()` method is ==useful for returning the first promise that fulfills==. It short-circuits after a promise fulfills, so it does not wait for the other promises to complete once it finds one.

Unlike [`Promise.all()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), which returns an *array* of fulfillment values, we only get one fulfillment value (assuming at least one promise fulfills). This can be beneficial if we need only one promise to fulfill but we do not care which one does. Note another difference: this method rejects upon receiving an *empty iterable*, since, truthfully, the iterable contains no items that fulfill.

Also, unlike [`Promise.race()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race), which returns the first *settled* value (either fulfillment or rejection), this method returns the first *fulfilled* value. This method ignores all rejected promises up until the first promise that fulfills.

## References

1. [`Promise.any()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)