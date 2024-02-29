# Type Coercion

==**Type coercion**== is the ==automatic or **implicit conversion** of values from one data type to another== (such as strings to numbers). ==**Type conversion**== is _similar to type coercion_ because they both convert values from one data type to another with one key difference — ==**type coercion is implicit** whereas **type conversion can be either implicit *or* explicit**==.

## Implicit and Explicit Conversion

_Implicit conversion_ happens when the compiler (for compiled languages) or runtime (for script languages like [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)) _automatically_ converts data types.

```js
// Implicit type coercion
const val1 = "5";
const val2 = 9;
const sum = val1 + val2; //"59"
```

In the above example, JavaScript has *coerced* the `9` from a number into a string, and then concatenated the two values together, resulting in a string of `"59"`. JavaScript had a choice between a string or a number and decided to use a string. This behavior is also called ==**string concatenation**== because `+` operator also supports strings. 

> **Note**: Keep in mind that ==only arithmetic operator `+` supports strings== though. For example, this will not work:
>
> ```js
> // Implicit type coercion
> const a = 'hi' - 'there' // NaN
> const b = 'hi' * 'there' // NaN
> ```

The compiler could have coerced the string `"5"` into a number and returned a sum of `9`, but it did not. To return this result, you'd have to explicitly convert the string `"5"` to a number using the [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) method:

```js
// Explicit type conversion
const sum = Number(val1) + val2; //9
```

## Converting Data Types

==Whatever you get from a user, from a HTML input in your JavaScript, code will always be a string (text)==.

[`Number.parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt) will try to parse some text, so a string, as number without decimal places, and [`Number.parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat) will do the same thing but with decimal places. `Number.parseInt()` and `Number.parseFloat()` are functions built in JavaScript that will take a string as an input you pass in and will then convert to a number.

## Some considerations about Implicit Type Coercion

```js
true + false;			// 1
12 / "6"				// 2
"number" + 15 + 3		// "number153"
15 + 3 + "number"		// "18number"
[1] > null				// true
"foo" + + "bar"			// "fooNaN"
'true' == true			// false
false == 'false'		// false
null == ''				// false
!!"false" == !!"true"	// true
["x"] == "x"			// true
[] + null + 1			// "null1"
[1,2,3] == [1,2,3]		// false
{}+[]+{}+[1]			// "0[object Object]1"
!+[]+[]+![]				// "truefalse"
new Date(0) - 0			// 0
new Date(0) + 0			// "Thu Jan 01 1970 02:00:00(EET)0"
```

==In 90% of use cases it’s better to **avoid Implicit Type Coercion**==.

Type coercion can be ==explicit== and ==implicit==. 

When a developer expresses the intention to convert between types by writing the appropriate code, like `Number(value)`, it’s called ==**explicit type coercion**== (or type casting).

==Since **JavaScript is a weakly-typed language**, _values can also be converted between different types **automatically**_==, and it is called ==**implicit type coercion**==. It usually happens when you apply operators to values of different types:

```js
1 == null;			//false
2/"5"				//0.4
null + new Date() //"nullSat Oct 01 2022 11:52:01 GMT+0300 (Eastern European Summer Time)""
```

Implicit type coercion can also be triggered by the surrounding context, like with `if (value) {…}`, where `value` is coerced to boolean.

==One operator that does not trigger implicit type coercion is `===`, which is called the strict equality operator==. The loose equality operator `==` on the other hand does both comparison and type coercion if needed.

## Type Coercion for primitive values

The first rule to know is there are only ==**3 types of conversion** in JavaScript==:

- to ==string==;
- to ==boolean==;
- to ==number==.

Secondly, ==conversion logic for primitives and objects works differently, but both primitives and objects can only be converted in those 3 ways==.

#### String conversion

To _explicitly_ convert values to a string apply the `String()` function. _Implicit_ coercion is triggered by the binary `+` operator, when any operand is a string:

```js
String(123) // explicit
123 + ''    // implicit
```

All primitive values are converted to strings naturally as you might expect:

```js
String(123)                   // '123'
String(-12.3)                 // '-12.3'
String(null)                  // 'null'
String(undefined)             // 'undefined'
String(true)                  // 'true'
String(false)                 // 'false'
```

#### Boolean conversion

To _explicitly_ convert a value to a boolean apply the `Boolean()` function. _Implicit_ conversion happens in _logical context_, or is triggered by _logical operators_ ( `||` `&&` `!`) .

```js
Boolean(2)          // explicit
if (2) { ... }      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator (short-circuiting)
```

> **Note**: Logical operators such as `||` and `&&` do boolean conversions internally, but [actually return the value of original operands](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators), even if they are not boolean (also called short-circuit evaluation).
>
> ```js
> let x = 'hello' && 123;   // x === 123
> // returns number 123, instead of returning true
> // 'hello' and 123 are still coerced to boolean internally to calculate the expression
> ```

There are only 2 possible results of boolean conversion: `true` or `false`, it’s just easier to remember the list of _falsy values_:

```js
Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false

// Any value that is not in the list is converted to true, including object, function, Array, Date, user-defined type, and so on.
// Empty object and arrays are truthy values as well.
Boolean({})             // true
Boolean([])             // true
Boolean(function() {})  // true
```

#### Numeric conversion

For an _explicit_ conversion just apply the `Number()` function, same as you did with `Boolean()` and `String()`.

_Implicit_ conversion is tricky, because it’s triggered in more cases:

- comparison operators (`>`, `<`, `<=`,`>=`)
- bitwise operators ( `|` `&` `^` `~`)
- arithmetic operators (`-` `+` `*` `/` `%` ). Note, that binary`+` does not trigger numeric conversion, when any operand is a string.
- unary `+` operator
- loose equality operator `==` (incl. `!=`). Note that `==` does not trigger numeric conversion when both operands are strings.

```js
Number('123')   // explicit
+'123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5/null          // implicit
true | 0        // implicit
```

Here is how primitive values are converted to numbers:

```js
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
```

When converting a string to a number, the engine first trims leading and trailing whitespace, `\n`, `\t` characters, returning `NaN` if the trimmed string does not represent a valid number. If string is empty, it returns `0`.

`null` and `undefined` are handled differently: `null` becomes `0`, whereas `undefined` becomes `NaN`.

## Type Coercion for Objects

When it comes to objects and engine encounters expression like `[1] + [2,3]`, first it needs to convert an object to a primitive value, which is then converted to the final type. And remember "Type Coercion for primitive values" that there are still only three types of conversion: numeric, string and boolean.

The simplest case is boolean conversion: any non-primitive value is always coerced to `true`, no matter if an object or an array is empty or not.

## References

1. [Type coercion - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
2. [JavaScript type coercion explained - Alexey Samoshkin](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)
3. [Type conversion - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion)