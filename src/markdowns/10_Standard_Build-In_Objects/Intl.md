# `Intl` build-in object

The `Intl` object is the namespace for the ECMAScript Internationalization API, which provides ==language sensitive string comparison==, ==number formatting==, and ==date and time formatting==. The `Intl` object provides access to several constructors, as well as functionality common to the internationalization constructors and other language sensitive functions.

## Locale identification and negotiation

==The internationalization constructors use a common pattern for identifying locales and determining the one they will actually use: they all accept `locales` and `options` arguments, and negotiate the requested locale(s) against the locales they support using an algorithm specified in the `options.localeMatcher` property==.

### Locales argument

==The `locales` argument is used to **determine the locale** used in a given operation.== The JavaScript implementation examines `locales`, and then computes a locale it understands that comes closest to satisfying the expressed preference. `locales` may be:

- `undefined` (or omitted): The implementation's default locale will be used.
- A locale: A locale identifier or an [`Intl.Locale`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) object that wraps a locale identifier.
- A list of locales: Any other value, that will be converted into an object and then treated as an array of locales.

In the latter two cases, the actual locale used is the best-supported locale determined by [locale negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_negotiation).

> **NOTE**: You can use <code>navigator.language</code> read-only property for setting your locales parameter.

### Locale negotiation

The list of locales specified by the `locales` argument, after Unicode extensions have been removed from them, is interpreted as a prioritized request from the application. The runtime compares it against the locales it has available and picks the best one available. If the application doesn't provide a `locales` argument, or the runtime doesn't have a locale that matches the request, then the runtime's default locale is used. The matcher can be selected using a property of the `options` argument.

## `options` argument

==The `options` argument must be **an object with properties that vary between constructors and functions**. If the `options` argument is not provided or is `undefined`, default values are used for all properties.==

## Examples

### Formatting dates and numbers

You can use `Intl` to format dates and numbers in a form that's conventional for a specific language and region:

```js
const count = 26254.39;
const date = new Date("2012-05-24");

function log(locale) {
  console.log(`${new Intl.DateTimeFormat(locale).format(date)}`);
  console.log(`${new Intl.NumberFormat(locale).format(count)}`);
}

log("en-US"); // 5/24/2012    // 26,254.39
log("de-DE"); // 24.5.2012    // 26.254,39
```

You can use [`navigator.language`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) read-only property for setting your `locales` parameter:

```js
const count = 26254.39;
const date = new Date("2012-05-24");
const locale = navigator.language; 
console.log(locale); // In my case is 'ro-RO'

function log() {
  console.log(`${new Intl.DateTimeFormat(locale).format(date)}`);
  console.log(`${new Intl.NumberFormat(locale).format(count)}`);
}

log(); // 24.05.2012    // 26.254,39
```

## References

1. [Intl - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
1. [`navigator.language` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)