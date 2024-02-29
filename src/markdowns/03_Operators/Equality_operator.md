# Equality operator `==`

The equality operator `==` ==checks whether its two operands are equal, returning a Boolean result==. Unlike the [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) operator, it attempts to ==**convert** _and_ **compare** operands that are of different types==.

## Syntax

```js
x == y
```

## Description

The equality operators (`==` and `!=`) provide the [IsLooselyEqual](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using) semantic. This can be roughly summarized as follows:

1. If the operands have the same type, they are compared as follows:

   - Object: return `true` only if both operands reference the same object.

   - String: return `true` only if both operands have the same characters in the same order.
   - Number: return `true` only if both operands have the same value. `+0` and `-0` are treated as the same value. If either operand is `NaN`, return `false`; so, `NaN` is never equal to `NaN`.
   - Boolean: return `true` only if operands are both `true` or both `false`.
   - BigInt: return `true` only if both operands have the same value.
   - Symbol: return `true` only if both operands reference the same symbol.

2. If one of the operands is `null` or `undefined`, the other must also be `null` or `undefined` to return `true`. Otherwise return `false`.

3. If one of the operands is an object and the other is a primitive, convert the object to a primitive using the object's [`@@toPrimitive()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (with `"default"` as hint), [`valueOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), and [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) methods, in that order. (This primitive conversion is the same as the one used in [addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition).)

4. At this step, both operands are converted to primitives (one of String, Number, Boolean, Symbol, and BigInt). The rest of the conversion is done case-by-case.

   - If they are of the same type, compare them using step 1.
   - If one of the operands is a Symbol but the other is not, return `false`.
   - If one of the operands is a Boolean but the other is not, [convert the boolean to a number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` is converted to 1, and `false` is converted to 0. Then compare the two operands loosely again.
   - Number to String: [convert the string to a number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Conversion failure results in `NaN`, which will guarantee the equality to be `false`.
   - Number to BigInt: compare by their numeric value. If the number is ±Infinity or `NaN`, return `false`.
   - String to BigInt: convert the string to a BigInt using the same algorithm as the [`BigInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) constructor. If conversion fails, return `false`.

## Differences between `==` and `===`

The most notable difference between this operator and the [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) operator is that the ==strict equality operator does not attempt type conversion==. Instead, the ==strict equality operator always considers operands of different types to be different==. The strict equality operator essentially carries out only step 1, and then returns `false` for all other cases.

## Examples

```js
// Comparison with no type conversion
1 == 1; // true
"hello" == "hello"; // true

// Comparison with type conversion
"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false

// Comparison of objects
const object1 = { key: "value" };
const object2 = { key: "value" };
object1 == object2; // false
object1 == object1; // true

// Comparing arrays and strings
const a = [1, 2, 3];
const b = "1,2,3";
a == b; // true, `a` converts to string

const c = [true, 0.5, "hey"];
const d = c.toString(); // "true,0.5,hey"
c == d; // true
```

## References

1. [Equality (==) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
2. [Expressions and operators - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)