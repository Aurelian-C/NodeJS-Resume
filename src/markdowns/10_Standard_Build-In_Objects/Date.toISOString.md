# `Date.prototype.toISOString()`

The `toISOString()` method ==returns a **date object as a string**, using the **ISO standard**==. The standard is called ISO-8601 and the format is: `YYYY-MM-DDTHH:mm:ss.sssZ`.

## Syntax

```js
new Date().toISOString()
```

## Return value

A ==string==, representing the date and time using the ISO standard format.

## Examples

```js
const today = new Date('05 October 2011 14:48 UTC');
today.toISOString(); // 2011-10-05T14:48:00.000Z
```

## References

1. [`Date.prototype.toISOString()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
1. [Date `toISOString()` - w3schools](https://www.w3schools.com/jsref/jsref_toisostring.asp)