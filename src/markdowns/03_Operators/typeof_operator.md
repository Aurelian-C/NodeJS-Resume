# `typeof` operator

The **`typeof`** operator ==**returns a string indicating the type** of the operand's value==.

## Syntax

```js
typeof operand
```

## Parameter

`operand`: An expression representing the object or primitive whose type is to be returned.

## Description

The following table summarizes the possible return values of `typeof`.

| Type                                                         | Result                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined) | "undefined"                                                  |
| [Null](https://developer.mozilla.org/en-US/docs/Glossary/Null) | `"object"` ([reason](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)) |
| [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) | "boolean"                                                    |
| [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number) | "number"                                                     |
| [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt) | "bigint"                                                     |
| [String](https://developer.mozilla.org/en-US/docs/Glossary/String) | "string"                                                     |
| [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) | "symbol"                                                     |
| [Function](https://developer.mozilla.org/en-US/docs/Glossary/Function) (implements [[Call]] in ECMA-262 terms; [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class) are functions as well) | "function"                                                   |
| Any other object                                             | "object"                                                     |

## References

1. [typeof - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
1. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)