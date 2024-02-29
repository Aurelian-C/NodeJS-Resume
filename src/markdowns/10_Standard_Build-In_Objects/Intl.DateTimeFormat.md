# `Intl.DateTimeFormat`

The `Intl.DateTimeFormat` object ==enables language-sensitive **_date_ and _time_ formatting**==.

## Syntax

```js
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)

Intl.DateTimeFormat()
Intl.DateTimeFormat(locales)
Intl.DateTimeFormat(locales, options)
```

> **NOTE**: ==`Intl.DateTimeFormat()` can be called with or without [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).== Both create a new `Intl.DateTimeFormat` instance. However, there's a special behavior when it's called without `new` and the `this` value is another `Intl.DateTimeFormat` instance.

## Parameters

#### `locales` _(optional)_

A ==string with a [BCP 47 language tag](http://www.lingoes.net/en/translator/langcode.htm)==, or an array of such strings.

> You can use [`navigator.language`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) read-only property for setting your `locales` parameter.

#### `options` _(optional)_

An ==object== with some or all of the following properties:

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

## Return value

A new `Intl.DateTimeFormat` object.

## Examples

### Using `DateTimeFormat`

==In basic use **without specifying a locale**, `DateTimeFormat` uses the **default locale** and **default options**:==

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// "new Date().toLocaleString()" without arguments depends on the implementation, the default locale and the default time zone
console.log(new Intl.DateTimeFormat().format(date)); // "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Using `timeStyle` and `dateStyle`

```js
const shortTime = new Intl.DateTimeFormat("en", {timeStyle: "short"});
console.log(shortTime.format(Date.now())); // "13:31 AM"

const shortDate = new Intl.DateTimeFormat("en", {dateStyle: "short"});
console.log(shortDate.format(Date.now())); // "07/07/20"

const mediumTime = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "short",
});
console.log(mediumTime.format(Date.now())); // "07/07/20, 13:31:55 AM"
```

## References

1. [Intl - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
2. [`Intl.DateTimeFormat()` constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
3. [ISO Language Code Table](http://www.lingoes.net/en/translator/langcode.htm)
4. [ISO 4217 - wikipedia.org](https://en.wikipedia.org/wiki/ISO_4217)
5. [`navigator.language` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)