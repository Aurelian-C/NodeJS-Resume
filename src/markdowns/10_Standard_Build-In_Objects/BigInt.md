# `BigInt`

==In JavaScript, the `BigInt` is a **numeric primitive** that was introduced with ECMAScript 2020 (ES11) to **represent integers of arbitrary precision**.==

Prior to the introduction of `BigInt`, JavaScript had a single numeric type called `Number`, which could represent both integers and floating-point numbers. However, ==due to the limitations of the double-precision floating-point representation used by `Number`, it could not accurately represent very large integers or maintain precision for certain operations==.

`BigInt` was introduced to address this limitation by ==allowing the representation of arbitrarily **large integers**==.

You can create a `BigInt` by appending the `n` suffix to an integer literal or by using the `BigInt()` constructor. Here are some examples:

```js
const bigIntLiteral = 123n; // Outputs: 123n
const bigIntFromConstructor = BigInt(456); // Outputs: 456n
```

`BigInt` values can be used in mathematical operations just like regular numbers:

```js
const a = 123n;
const b = 456n;

const sum = a + b; // Outputs: 579n
const product = a * b; // Outputs: 56088n
```

==It's important to note that **you cannot mix `BigInt` and regular `Number` types in arithmetic operations without explicit conversion**.== For example, the following would result in a TypeError:

```js
const result = 123n + 456; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

To convert between `BigInt` and `Number`, you can use the `Number()` and `BigInt()` functions:

```js
const a = 123n;
const b = 456;

const sum = a + BigInt(b); // Outputs: 579n
```

`BigInt` is particularly useful when dealing with situations where precise integer arithmetic is required, such as cryptography, large integer calculations, or scenarios where the limitations of regular JavaScript numbers become a problem.

## References

1. [BigInt - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)