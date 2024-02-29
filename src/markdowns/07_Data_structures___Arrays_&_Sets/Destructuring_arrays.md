# Destructuring arrays

## What is destructuring?

The **destructuring assignment** syntax is a ==JavaScript expression== that makes it possible to ==unpack values from arrays, or properties from objects, into distinct variables==.

## Syntax

```js
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;
```

## Array destructuring

In array destructuring, you ==use an **array literal** on the **left-hand-side of an assignment expression**==. Each variable name on the array literal maps to the corresponding item at the same index on the destructured array:

```js
const rgb = [255, 200, 0];

// Array Destructuring
const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`);
// R: 255, G: 200, B: 0
```

In this example, we have assigned the items in the `rgb` array to three local variables: `red`, `green` and `blue` using array destructuring. Notice that each variable is mapped to the corresponding item at the same index on the `rgb` array.

> **NOTE**: ==Destructuring arrays is a **shortcut for assign arrays items to variables**==. Is a feature that help you to split up an array into variables or constants, which you then can use throughout your code. It simply saves you the extra work of doing this manually and therefore can speed up your development process.
>
> ```js
> const rgb = [255, 200, 0];
>
> // WITHOUT array destructuring:
> const red = rgb[0];
> const green = rgb[1];
> const blue = rgb[2];
>
> // WITH array destructuring:
> const [red, green, blue] = rgb;
> ```

## Binding and assignment

For both object and array destructuring, there are ==two kinds of destructuring patterns==: ==**binding** pattern== and ==**assignment** pattern==, with slightly different syntaxes.

In binding patterns, the pattern starts with a declaration keyword (`var`, `let`, or `const`). Then, each individual property must either be bound to a variable or further destructured.

```js
// Binding pattern
const rgb = [255, 200, 0];
const [red, green, blue] = rgb;
```

In assignment patterns, the pattern does not start with a keyword. Each destructured property is assigned to a target of assignment — which may either be declared beforehand with `var` or `let`, or is a property of another object — in general, anything that can appear on the left-hand side of an assignment expression.

```js
// Assignment pattern
let red, green, blue;
const rgb = [255, 200, 0];
[red, green, blue] = rgb;
```

## Default Values

If the number of items in the array is more than the number of local variables passed to the destructuring array literal, then the excess items are not mapped. But if the number of local variables passed to the destructuring array literal exceed the number of items in the array, then each excess local variable will be assigned a value of `undefined`, except you specify a ==default value==.

Just as with object destructuring, you can set default values for local variables using array destructuring.

```js
const rgb = [200];

// Assign default values of 255 to red and blue
const [red = 255, green, blue = 255] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`);
// R: 200, G: undefined, B: 255
```

You can also do an ==**array destructuring assignment**==. Unlike with object destructuring, you ==_don’t need to enclose the assignment expression in parentheses_==.

```js
let red = 100;
let green = 200;
let blue = 50;

const rgb = [200, 255, 100];

// Destructuring assignment to red and green
[red, green] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`);
// R: 200, G: 255, B: 50
```

## Skipping Items

It is possible to skip some items you don’t want to assign to local variables and only assign the ones you are interested in.

```js
const rgb = [200, 255, 100];

// Skip the first two items
// Assign the only third item to the blue variable
const [, , blue] = rgb;

console.log(`Blue: ${blue}`);
// Blue: 100
```

We used comma _separation `,`_ to omit the first two items of the `rgb` array, since we only needed the third item.

## Swapping Variables

One very nice application of array destructuring is in swapping local variables. Imagine you are building a photo manipulation app and you want to be able to swap the `height` and `width` dimensions of a photo when the orientation of the photo is switched between landscape and portrait. The old-fashioned way of doing this will look like the following:

```js
let width = 300;
let height = 400;
const landscape = true;

console.log(`${width} x ${height}`); // 300 x 400

if (landscape) {
  // An extra variable needed to copy initial width
  let initialWidth = width;

  // Swap the variables
  width = height;

  // height is assigned the copied width value
  height = initialWidth;

  console.log(`${width} x ${height}`); // 400 x 300
}
```

The following snippet shows how array destructuring can be used to achieve this:

```js
let width = 300;
let height = 400;
const landscape = true;

console.log(`${width} x ${height}`); // 300 x 400

if (landscape) {
  // Swap the variables
  [width, height] = [height, width];

  console.log(`${width} x ${height}`); // 400 x 300
}
```

## Nested Array Destructuring

Just as with objects, you can also do nested destructuring with arrays. ==**The corresponding item must be an array** in order to use a nested destructuring== array literal to assign items in it to local variables.

```js
const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];

// Use nested destructuring to assign red, green and blue
const [hex, [red, green, blue]] = color;

console.log(hex, red, green, blue);
// #FF00FF 255 0 255
```

## Rest Items

Sometimes you may want to assign some items to variables, while ensuring that the remaining items are captured (assigned to another local variable). The new **rest parameter** syntax (`...param`) added in ES6 can be used with destructuring to achieve this.

```js
const rainbow = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

// Assign the first and third items to red and yellow
// Assign the remaining items to otherColors variable using the spread operator(...)
const [red, , yellow, ...otherColors] = rainbow;

console.log(otherColors);
// ['green', 'blue', 'indigo', 'violet']
```

> **NOTE**: The rest parameter, if used, must always appear as the last item in the destructuring array literal otherwise an error will be thrown.

You can use array destructuring and the rest parameter syntax to create an array clone:

```js
const rainbow = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

// Cloning with array destructuring and spread operator
const [...rainbowClone] = rainbow;

console.log(rainbow === rainbowClone); // false
console.log(rainbowClone); // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
```

## Mixed Destructuring

There are cases when you are working with a pretty complex object/array structure and you need to assign some values from it to local variables. A good example would be an object with several deeply nested objects and arrays. In cases like this, you can use a combination of object destructuring and array destructuring to target certain parts of the complex structure as required.

```js
const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207],
  },
};

// Observe how mix of object and array destructuring is being used here
// We are assigning 5 variables: name, country, city, lat, lng
const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
```

## Destructuring patterns with other syntaxes

In many syntaxes where the language binds a variable for you, you can use a destructuring pattern as well. These include:

- The looping variable of [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) and [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops;
- [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) parameters;
- The [`catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) binding variable.

## References

1. [ES6 Destructuring: The Complete Guide - codeburst.io](https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f)
2. [Destructuring assignment - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
