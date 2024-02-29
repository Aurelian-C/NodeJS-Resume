# `Date.prototype.getFullYear()`

The `getFullYear()` method ==returns the **full year (4 digits)** of the specified date **according to local time**==. Use this method instead of the [`getYear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear) method.

## Syntax

```js
new Date().getFullYear()
```

## Return value

==A number== corresponding to the year of the given date, according to local time (4 digits for dates between year 1000 and 9999).

## Description

==The value returned by `getFullYear()` is an absolute number==. For dates between the years 1000 and 9999, `getFullYear()` returns a four-digit number, for example, 1995. Use this function to make sure a year is compliant with years after 2000.

## References

1. [`Date.prototype.getFullYear()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
1. [Date `getFullYear()` - w3schools](https://www.w3schools.com/jsref/jsref_getfullyear.asp)