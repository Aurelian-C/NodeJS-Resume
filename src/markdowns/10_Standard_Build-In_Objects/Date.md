# `Date` build-in object

The `Date` object represent a single moment in time in a platform-independent format. ==`Date` object contain a `Number` that represents milliseconds since 1 January 1970 UTC==.

## The ECMAScript epoch and timestamps

==A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since the [ECMAScript epoch](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range), which is defined as January 1, 1970, UTC (equivalent to the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time))==.

> **NOTE**: It's important to keep in mind that while the time value at the heart of a `Date` object is UTC, the basic methods to fetch the date and time or its components all work in the local (i.e. host system) time zone and offset.

It should be noted that the maximum `Date` is not of the same value as the maximum safe integer (`Number.MAX_SAFE_INTEGER` is 9,007,199,254,740,991). Instead, it is defined in ECMA-262 that a maximum of ±100,000,000 (one hundred million) days relative to January 1, 1970 UTC (that is, April 20, 271821 BCE ~ September 13, 275760 CE) can be represented by the standard `Date` object (equivalent to ±8,640,000,000,000,000 milliseconds).

## Date format and time zone conversions

==There are several methods available to **obtain a date in various formats**, as well as to **perform time zone conversions**==. Particularly useful are the functions that output the date and time in Coordinated Universal Time (UTC), the global standard time defined by the World Time Standard. (This time is historically known as *Greenwich Mean Time*, as UTC lies along the meridian that includes London — and nearby Greenwich — in the United Kingdom.) ==The user's device provides the local time==.

In addition to methods to read and alter individual components of the local date and time (such as [`getDay()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) and [`setHours()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)), there are also versions of the same methods that read and manipulate the date and time using UTC (such as [`getUTCDay()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay) and [`setUTCHours()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours)).

## `Date()` Constructor vs `Date` function

==The `Date()` constructor can create a `Date` instance _or_ return a string representing the current time==.

==When `Date()` is _called as a function_, returns a string representation of the current date and time. All arguments are ignored. The result is the same as executing [`new Date().toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)==.

==When `Date()` is _called as a constructor_ (with the `new` keyword), returns a new `Date` object==.

> **NOTE:** `Date()` can be called with or without [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new), but with different effects.

### Syntax

```js
new Date();
new Date(value);
new Date(dateString);
new Date(dateObject);

new Date(year, monthIndex);
new Date(year, monthIndex, day);
new Date(year, monthIndex, day, hours);
new Date(year, monthIndex, day, hours, minutes);
new Date(year, monthIndex, day, hours, minutes, seconds);
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);

Date();
```

### Parameters

There are five basic forms for the `Date()` constructor:

#### `No parameters`

When no parameters are provided, the newly-created `Date` object represents the current date and time as of the time of instantiation.

#### `Time value or timestamp number`

An integer value representing the number of milliseconds since January 1, 1970, 00:00:00 UTC (the ECMAScript epoch, equivalent to the UNIX epoch), with leap seconds ignored.

#### `Date string`

A string value representing a date, in a format recognized by the [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) method.

#### `Date object`

An existing `Date` object. This effectively makes a copy of the existing `Date` object with the same date and time.

#### `Individual date and time component values`

When one parameter is passed to the `Date()` constructor, `Date` instances are specially treated. All other values are [converted to primitives](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion). If the result is a string, it will be parsed as a date string. Otherwise, the resulting primitive is further coerced to a number and treated as a timestamp.

Given at least a year and month, this form of `Date()` returns a `Date` object whose component values (year, month, day, hour, minute, second, and millisecond) all come from the following parameters. Any missing fields are given the lowest possible value (`1` for `day` and `0` for every other component). The parameter values are all evaluated against the local time zone, rather than UTC.

If any parameter overflows its defined bounds, it "carries over". For example, if a `monthIndex` greater than `11` is passed in, those months will cause the year to increment; if a `minutes` greater than `59` is passed in, `hours` will increment accordingly, etc. Therefore, `new Date(1990, 12, 1)` will return January 1st, 1991; `new Date(2020, 5, 19, 25, 65)` will return 2:05 A.M. June 20th, 2020.

Similarly, if any parameter underflows, it "borrows" from the higher positions. For example, `new Date(2020, 5, 0)` will return May 31st, 2020.

### Return value

==Calling `new Date()` (the `Date()` constructor) returns a `Date` object==. If called with an invalid date string, or if the date to be constructed will have a UNIX timestamp less than `-8,640,000,000,000,000` or greater than `8,640,000,000,000,000` milliseconds, it returns a `Date` object whose [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) method returns the literal string `Invalid Date`.

==Calling the `Date()` function (without the `new` keyword) returns a string representation of the current date and time, exactly as `new Date().toString()` does. Any arguments given in a `Date()` function call (without the `new` keyword) are ignored==; regardless of whether it's called with an invalid date string — or even called with any arbitrary object or other primitive as an argument — it always returns a string representation of the current date and time.

### Several ways to create a Date object

```js
const today = new Date()
const birthday = new Date('December 17, 1995 03:24:00') // DISCOURAGED: may not work in all runtimes
const birthday2 = new Date('1995-12-17T03:24:00')   // This is ISO8601-compliant and will work reliably
const birthday3 = new Date(1995, 11, 17)            // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0)
const birthday5 = new Date(628021800000)            // passing epoch timestamp
```

## `Date` static method: `Date.now()`

`Date.now()` static method on `Date` object ==returns the numeric value corresponding to the current time — the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored==.

### Calculating elapsed time

The following examples show how to determine the elapsed time between two JavaScript dates in milliseconds. 

Due to the differing lengths of days (due to daylight saving changeover), months, and years, expressing elapsed time in units greater than hours, minutes, and seconds requires addressing a number of issues, and should be thoroughly researched before being attempted.

```js
// Using Date objects
const start = Date.now();

// The event to time goes here:
doSomethingForALongTime();
const end = Date.now();
const elapsed = end - start; // elapsed time in milliseconds
```

```js
// Using built-in methods
const start = new Date();

// The event to time goes here:
doSomethingForALongTime();
const end = new Date();
const elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds
```

### Get the number of seconds since the ECMAScript Epoch

```js
const seconds = Math.floor(Date.now() / 1000);
```

## Date Methods and Properties

| Name                                                         | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [constructor](https://www.w3schools.com/jsref/jsref_constructor_date.asp) | Returns the function that created the Date object's prototype |
| [getDate()](https://www.w3schools.com/jsref/jsref_getdate.asp) | Returns the day of the month (from 1-31)                     |
| [getDay()](https://www.w3schools.com/jsref/jsref_getday.asp) | Returns the day of the week (from 0-6)                       |
| [getFullYear()](https://www.w3schools.com/jsref/jsref_getfullyear.asp) | Returns the year                                             |
| [getHours()](https://www.w3schools.com/jsref/jsref_gethours.asp) | Returns the hour (from 0-23)                                 |
| [getMilliseconds()](https://www.w3schools.com/jsref/jsref_getmilliseconds.asp) | Returns the milliseconds (from 0-999)                        |
| [getMinutes()](https://www.w3schools.com/jsref/jsref_getminutes.asp) | Returns the minutes (from 0-59)                              |
| [getMonth()](https://www.w3schools.com/jsref/jsref_getmonth.asp) | Returns the month (from 0-11)                                |
| [getSeconds()](https://www.w3schools.com/jsref/jsref_getseconds.asp) | Returns the seconds (from 0-59)                              |
| [getTime()](https://www.w3schools.com/jsref/jsref_gettime.asp) | Returns the number of milliseconds since midnight Jan 1 1970, and a specified date |
| getYear()                                                    | Deprecated. Use the [getFullYear()](https://www.w3schools.com/jsref/jsref_getfullyear.asp) method instead |
| [now()](https://www.w3schools.com/jsref/jsref_now.asp)       | Returns the number of milliseconds since midnight Jan 1, 1970 |
| [parse()](https://www.w3schools.com/jsref/jsref_parse.asp)   | Parses a date string and returns the number of milliseconds since January 1, 1970 |
| [prototype](https://www.w3schools.com/jsref/jsref_prototype_date.asp) | Allows you to add properties and methods to an object        |
| [setDate()](https://www.w3schools.com/jsref/jsref_setdate.asp) | Sets the day of the month of a date object                   |
| [setFullYear()](https://www.w3schools.com/jsref/jsref_setfullyear.asp) | Sets the year of a date object                               |
| [setHours()](https://www.w3schools.com/jsref/jsref_sethours.asp) | Sets the hour of a date object                               |
| [setMilliseconds()](https://www.w3schools.com/jsref/jsref_setmilliseconds.asp) | Sets the milliseconds of a date object                       |
| [setMinutes()](https://www.w3schools.com/jsref/jsref_setminutes.asp) | Set the minutes of a date object                             |
| [setMonth()](https://www.w3schools.com/jsref/jsref_setmonth.asp) | Sets the month of a date object                              |
| [setSeconds()](https://www.w3schools.com/jsref/jsref_setseconds.asp) | Sets the seconds of a date object                            |
| [setTime()](https://www.w3schools.com/jsref/jsref_settime.asp) | Sets a date to a specified number of milliseconds after/before January 1, 1970 |
| setYear()                                                    | Deprecated. Use the [setFullYear()](https://www.w3schools.com/jsref/jsref_setfullyear.asp) method instead |
| [toDateString()](https://www.w3schools.com/jsref/jsref_todatestring.asp) | Converts the date portion of a Date object into a readable string |
| [toISOString()](https://www.w3schools.com/jsref/jsref_toisostring.asp) | Returns the date as a string, using the ISO standard         |
| [toJSON()](https://www.w3schools.com/jsref/jsref_tojson.asp) | Returns the date as a string, formatted as a JSON date       |
| [toLocaleDateString()](https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp) | Returns the date portion of a Date object as a string, using locale conventions |
| [toLocaleTimeString()](https://www.w3schools.com/jsref/jsref_tolocaletimestring.asp) | Returns the time portion of a Date object as a string, using locale conventions |
| [toLocaleString()](https://www.w3schools.com/jsref/jsref_tolocalestring.asp) | Converts a Date object to a string, using locale conventions |
| [toString()](https://www.w3schools.com/jsref/jsref_tostring_date.asp) | Converts a Date object to a string                           |
| [toTimeString()](https://www.w3schools.com/jsref/jsref_totimestring.asp) | Converts the time portion of a Date object to a string       |

## References

1. [Date - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
2. [Date - w3schools](https://www.w3schools.com/jsref/jsref_obj_date.asp)
3. [`Date()` constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
4. [`Date.now()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)