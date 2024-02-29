# `Intl.NumberFormat()`

The `Intl.NumberFormat` object ==enables language-sensitive **number formatting**==.

## Syntax

```js
new Intl.NumberFormat()
new Intl.NumberFormat(locales)
new Intl.NumberFormat(locales, options)

Intl.NumberFormat()
Intl.NumberFormat(locales)
Intl.NumberFormat(locales, options)
```

> **NOTE**: ==`Intl.NumberFormat()` can be called with or without [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).== Both create a new `Intl.NumberFormat` instance. However, there's a special behavior when it's called without `new` and the `this` value is another `Intl.NumberFormat` instance.

## Parameters

#### `locales` _(optional)_

A ==string with a [BCP 47 language tag](http://www.lingoes.net/en/translator/langcode.htm)==, or an array of such strings.

> You can use [`navigator.language`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) read-only property for setting your `locales` parameter.

#### `options` _(optional)_

An ==object== with some or all of the following properties:

| Key               | Value                                                        |
| ----------------- | ------------------------------------------------------------ |
| `style`           | `"decimal"` `"currency"` `"percent"` `"unit"`                |
| `currency`        | The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as `"USD"` for the US dollar, `"EUR"` for the euro, or `"CNY"` for the Chinese RMB — see the [Current currency & funds code list](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=currency-codes). There is no default value; if the `style` is `"currency"`, the `currency` property must be provided. |
| `currencyDisplay` | `"symbol"` `"narrowSymbol"` `"code"` `"name"`                |
| ...               | ...                                                          |

## Return value

A new `Intl.NumberFormat` object.

## Examples

### Basic usage

==In basic use **without specifying a locale**, a formatted string in the **default locale** and with **default options** is returned.==

```js
const amount = 3500;
new Intl.NumberFormat().format(amount); // '3,500' if in US English locale
```

### Decimal and percent formatting

```js
const amount = 3500;
new Intl.NumberFormat("en-US", {style: "decimal"}).format(amount); // '3,500'
new Intl.NumberFormat("en-US", {style: "percent"}).format(amount); // '350,000%'
```

### Unit formatting

==If the `style` is `'unit'`, a `unit` property must be provided==. Optionally, `unitDisplay` controls the unit formatting.

```js
const amount = 3500;

const options1 = {
    style: "unit",
    unit: "liter",
};
const options2 = {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
}

new Intl.NumberFormat("en-US", options1).format(amount); // '3,500 L'
new Intl.NumberFormat("en-US", options2).format(amount); // '3,500 liters'
```

### Currency formatting

==If the `style` is `'currency'`, a `currency` property must be provided==. Optionally, `currencyDisplay` and `currencySign` control the unit formatting.

```js
const amount = -3500;

const options1 = {
    style: "currency",
    currency: "USD",
};
const options2 = {
    style: "currency",
    currency: "USD",
    currencyDisplay: "name",
};
const options3 = {
    style: "currency",
    currency: "USD",
    currencySign: "accounting",
}

new Intl.NumberFormat("en-US", options1).format(amount); // '-$3,500.00'
new Intl.NumberFormat("bn", options2).format(amount); // '-3,500.00 US dollars'
new Intl.NumberFormat("bn", options3).format(amount); // '($3,500.00)'
```

### Scientific, engineering or compact notations

Scientific and compact notation are represented by the `notation` option and can be formatted like this:

```js
new Intl.NumberFormat("en-US", {notation: "scientific"}).format(987654321); // 9.877E8
new Intl.NumberFormat("pt-PT", {notation: "scientific"}).format(987654321); // 9,877E8
new Intl.NumberFormat("en-GB", {notation: "engineering"}).format(987654321); // 987.654E6
new Intl.NumberFormat("de", {notation: "engineering"}).format(987654321); // 987,654E6
new Intl.NumberFormat("zh-CN", {notation: "compact"}).format(987654321); // 9.9亿
new Intl.NumberFormat("fr", {
  notation: "compact",
  compactDisplay: "long",
}).format(987654321); // 988 millions

new Intl.NumberFormat("en-GB", {
  notation: "compact",
  compactDisplay: "short",
}).format(987654321); // 988M
```

### Displaying signs

Display a sign for positive and negative numbers, but not zero:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

## References

1. [Intl - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
2. [`Intl.NumberFormat()` constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
3. [ISO Language Code Table](http://www.lingoes.net/en/translator/langcode.htm)
4. [ISO 4217 - wikipedia.org](https://en.wikipedia.org/wiki/ISO_4217)
5. [`navigator.language` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)