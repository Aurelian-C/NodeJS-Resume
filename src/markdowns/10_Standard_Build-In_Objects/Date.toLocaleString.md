# `Date.prototype.toLocaleString()`

The `toLocaleString()` method ==**returns a** `Date` **object as a string**, using **locale settings**==.

==The **default** language depends on the **locale setup on your computer**.==

In implementations with [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) support, this method simply calls `Intl.DateTimeFormat`.

## Syntax

```js
new Date().toLocaleString()
new Date().toLocaleString(locales)
new Date().toLocaleString(locales, options)
```

## Parameters

The `locales` and `options` arguments ==**customize** the behavior of the function== and let applications specify the language whose formatting conventions should be used.

#### `locales` _(optional)_

 ==A **string** with a [BCP 47 language tag](http://www.lingoes.net/en/translator/langcode.htm), _or_ an **array of such strings**.== 

==This parameter tags corresponds to the `locales` parameter of the `Intl.DateTimeFormat()` constructor:==

| Tag     | Description        |
| ------- | ------------------ |
| `en-GB` | British English    |
| `en-US` | US English         |
| `ro-RO` | Romanian (Romania) |
| ...     | ...                |

#### `options` _(optional)_

An ==**object** *adjusting the output format*==.

| Key            | Value                                                 |
| -------------- | ----------------------------------------------------- |
| `dateStyle`    | Legal values: `"full"` `"long"` `"medium"` `"short"`  |
| `timeStyle`    | `"full"` `"long"` `"medium"` `"short"`                |
| `weekday`      | `"long"` `"short"` `"narrow`"                         |
| `year`         | `"2-digit"` `"numeric"`                               |
| `month`        | `"2-digit"` `"long"` `"narrow"` `"numeric"` `"short"` |
| `day`          | `"2-digit"` `"numeric"`                               |
| `hour`         | `"2-digit"` `"numeric"`                               |
| `minute`       | `"2-digit"` `"numeric"`                               |
| `second`       | `"2-digit"` `"numeric"`                               |
| `timeZoneName` | `"long"` `"short"`                                    |
| ...            | ...                                                   |

> **NOTE**: ==This parameter keys/values pair correspond exactly to the `Intl.DateTimeFormat()` constructor `options` parameter.==

## Return value

A ==string== representing the given date according to language-specific conventions. 

> **NOTE**: In implementations with `Intl.DateTimeFormat`, this is equivalent to:
>
> ```js
> new Intl.DateTimeFormat(locales, options).format(date);
> ```

## Examples

In basic use _without specifying a locale_, a formatted string in the default locale and with default options is returned:

```js
const date = new Date(2012, 11, 12);
date.toLocaleString() // toLocaleString() without arguments depends on the implementation, the default locale, and the default time zone.
```

Using locales:

```js
const date = new Date(2012, 11, 12);

// US English uses month-day-year order and 12-hour time with AM/PM
date.toLocaleString('en-US'); // → "12/19/2012, 7:00:00 PM"

// British English uses day-month-year order and 24-hour time without AM/PM
date.toLocaleString('en-GB'); // → "20/12/2012 03:00:00"
```

The results provided by `toLocaleString()` can be customized using the `options` argument:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Request a weekday along with a long date
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

date.toLocaleString('de-DE', options) // → "Donnerstag, 20. Dezember 2012"
```

## References

1. [`Date.prototype.toLocaleString()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
1. [Date `toLocaleString()` - w3schools](https://www.w3schools.com/jsref/jsref_tolocalestring.asp)
1. [ISO Language Code Table](http://www.lingoes.net/en/translator/langcode.htm)