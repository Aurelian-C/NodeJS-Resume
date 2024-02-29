# `Date.prototype.getTime()`

The `getTime()` method ==returns the **number of milliseconds** since the 1 January 1970 00:00:00 (ECMAScript epoch)==. You can use this method to help assign a date and time to another `Date` object.

## Syntax

```js
new Date().getTime()
```

## Return value

==A number representing the milliseconds== elapsed between 1 January 1970 00:00:00 UTC and the given date.

## Reduced time precision

==To offer protection against timing attacks and fingerprinting, the precision of `new Date().getTime()` might get rounded depending on browser settings==. In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 20µs in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
new Date().getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
new Date().getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

In Firefox, you can also enable `privacy.resistFingerprinting`, the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

## References

1. [`Date.prototype.getTime()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
1. [Date `getTime()` - w3schools](https://www.w3schools.com/jsref/jsref_gettime.asp)