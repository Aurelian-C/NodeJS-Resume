# `Number.parseInt()`

The `Number.parseInt()` method ==**parses a string** argument and **returns an integer** of the specified radix or base==.

The `Number.parseInt()` method:

- parses a value as a string and returns the first integer;
- a `radix` parameter specifies the number system to use: 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal;
- if `radix` is omitted, JavaScript assumes `radix` 10. If the value begins with "0x", JavaScript assumes `radix` 16.

`Number.parseInt()` method has the same functionality as the global [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) function:

```js
Number.parseInt === parseInt // true
```

## Syntax

```js
Number.parseInt(string)
Number.parseInt(string, radix)
```

## Parameters

#### `string`

==The value to parse, [coerced to a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)==. Leading whitespace in this argument is ignored. 

#### `radix` _(optional)_

==An integer between `2` and `36` that represents the *radix* (the base in mathematical numeral systems)== of the `string`. If `radix` is undefined or `0`, it is assumed to be `10` except when the number begins with the code unit pairs `0x` or `0X`, in which case a radix of `16` is assumed.

## Return value

==An integer parsed from the given `string`==. If the `radix` is smaller than `2` or bigger than `36`, or the first non-whitespace character cannot be converted to a number, [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) is returned.

> **NOTE**: ==If the first character cannot be converted, `NaN` is returned.== Leading and trailing spaces are ignored. Only the first integer found is returned.

## References

1. [`Number.parseInt()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)
1. [`parseInt()` - w3schools](https://www.w3schools.com/jsref/jsref_parseint.asp)