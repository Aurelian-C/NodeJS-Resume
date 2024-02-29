# Strings

==The `String` object is used to represent and manipulate a **sequence of characters**==.

==Strings are useful for holding data that can be represented in **text form**==. Some of the most-used operations on strings are to check their [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), to build and concatenate them using the [`+` and `+=` string operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators), checking for the existence or location of substrings with the [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method, or extracting substrings with the [`substring()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) method.

## Creating strings

Strings can be ==created as **primitives**, from string literals, or as **objects**, using the [`String()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String) constructor==:

```js
const string1 = "A string primitive"; // A literal is a string primitive
const string2 = 'Also a string primitive'; // A literal is a string primitive
const string3 = `Yet another string primitive`; // A literal is a string primitive

const string4 = new String("A String object"); // String with new returns a string wrapper object

console.log(typeof string1); // "string"
console.log(typeof string2); // "string"
console.log(typeof string3); // "string"
console.log(typeof string4); // "object"
```

>**NOTE**: _String function_ and _String constructor_ produce different results: `new String()` creates a new `String` object. When called instead as a function like `String()`, it performs type conversion to a [primitive string](https://developer.mozilla.org/en-US/docs/Glossary/String), which is usually more useful.
>
>```js
>const strPrim1 = String(1);		// Coerced into the string primitive "1"
>const strPrim2 = String(true);	// Coerced into the string primitive "true"
>```
>
>The function produces a string (the [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) type) as promised. However, the constructor (with `new`) produces an instance of the type String (an object wrapper) and that's why you rarely want to use the String constructor at all.

String primitives and string objects share many behaviors, but have other important differences and caveats.

## Character access

==You can treat the string as an array-like object, where individual characters correspond to a numerical index==:

```js
'cat'[1] // gives value "a"
```

> **NOTE**: Strings are zero-indexed: The index of a string's first character is `0`, and the index of a string's last character is the length of the string minus 1.

## Comparing strings

All comparison operators, including [`===`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) and [`==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality), compare strings ==case-sensitively==. A common way to compare strings case-insensitively is to convert both to the same case (upper or lower) before comparing them:

```js
function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
};
```

## String primitives and String objects

Note that JavaScript distinguishes between `String` objects and [primitive string](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) values.

String literals (denoted by double or single quotes) and strings returned from `String` calls in a non-constructor context (that is, called without using the [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) keyword) are primitive strings. ==In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup on the wrapper object instead==.

```js
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
```

> **WARNING:** You should rarely find yourself using `String` as a constructor.

## String coercion

Many built-in operations that expect strings first coerce their arguments to strings. ==There are several ways to coerce to a string:==

- ==**[Template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)**==: ``${x}`` does a string coercion
- ==The **[`String()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String) function**==: `String(x)` uses the same algorithm to convert `x`, except that [Symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) don't throw a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError), but return `"Symbol(description)"`, where `description` is the [description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) of the Symbol.
- ==Using the **[`+` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)**==: `"" + x` coerces its operand to a *primitive* instead of a *string*, and, for some objects, has entirely different behaviors from normal string coercion.

## Long literal strings

Sometimes, your code will include strings which are very long. Rather than having lines that go on endlessly, or wrap at the whim of your editor, you may wish to _specifically break the string into multiple lines in the source code without affecting the actual string contents_.

==You can use the [`+`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition) operator to append multiple strings together==, like this:

```js
const longString = "This is a very long string which needs " +
                   "to wrap across multiple lines because " +
                   "otherwise my code is unreadable."
```

Or you can use the backslash character (`\`) at the end of each line to indicate that the string will continue on the next line. Make sure there is no space or any other character after the backslash (except for a line break), or as an indent; otherwise it will not work:

```js
const longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."
```

Both of the above methods result in identical strings.

## Template literals (Template strings)

Template literals are literals delimited with backtick (`) characters, allowing for [multi-line strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#multi-line_strings), [string interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#string_interpolation) with embedded expressions, and special constructs called [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates).

> Template literals are enclosed by backtick (`) characters instead of double or single quotes.

Template literals are sometimes informally called *template strings*, because they are used most commonly for [string interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#string_interpolation) (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom [tag function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) to perform whatever operations you want on the different parts of the template literal.

### Syntax

```js
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`
```

### Parameters

#### `string text`

The string text that will become part of the template literal. Almost all characters are allowed literally, including [line breaks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) and other [whitespace characters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space). However, invalid escape sequences will cause a syntax error, unless a [tag function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates_and_escape_sequences) is used.

#### `expression`

An expression to be inserted in the current position, whose value is converted to a string or passed to `tagFunction`.

#### `tagFunction`

If specified, it will be called with the template strings array and substitution expressions, and the return value becomes the value of the template literal. See [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates).

### Description

Along with having normal strings, template literals can also contain other parts called *placeholders*, which are embedded expressions delimited by a dollar sign and curly braces: `${expression}`. The strings and placeholders get passed to a function — either a default function, or a function you supply. The default function (when you don't supply your own) just performs [string interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#string_interpolation) to do substitution of the placeholders and then concatenate the parts into a single string.

To supply a function of your own, precede the template literal with a function name; the result is called a [**tagged template**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates). In that case, the template literal is passed to your tag function, where you can then perform whatever operations you want on the different parts of the template literal.

### Multi-line strings

Any newline characters inserted in the source are part of the template literal. Using normal strings, you would have to use the following syntax in order to get multi-line strings:

```js
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"
```

Using template literals, you can do the same with this:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### String interpolation

Without template literals, when you want to combine output from expressions with strings, you'd [concatenate them](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenation_using_) using the [addition operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition) `+`:

```js
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

That can be hard to read – especially when you have multiple expressions.

With template literals, you can avoid the concatenation operator — and improve the readability of your code — by using placeholders of the form `${expression}` to perform substitutions for embedded expressions:

```js
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

Note that there's a mild difference between the two syntaxes. Template literals [coerce their expressions directly to strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), while addition coerces its operands to primitives first.

### Tagged templates

A more advanced form of template literals are *tagged* templates. Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.

The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string. (Alternatively, it can return something completely different, as described in one of the following examples).

The name of the function used for the tag can be whatever you want.

```js
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
```

Tag functions don't even need to return a string!

```js
function template(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

const t1Closure = template`${0}${1}${0}!`;
// const t1Closure = template(["","","","!"],0,1,0);
t1Closure("Y", "A"); // "YAY!"

const t2Closure = template`${0} ${"foo"}!`;
// const t2Closure = template([""," ","!"],0,"foo");
t2Closure("Hello", { foo: "World" }); // "Hello World!"

const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
// const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure("foo", { name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
t3Closure({ name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
```

## References

1. [String - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
2. [`String()` constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String)
3. [Template literals (Template strings) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)