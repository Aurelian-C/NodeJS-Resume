# Destructuring objects

## What is destructuring?

The **destructuring assignment** syntax is a ==JavaScript expression== that makes it possible to ==unpack values from arrays, or properties from objects, into distinct variables==.

## Syntax

```js
const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

({ a, b } = obj); // brackets are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);
```

## Why to use object destructuring?

To explain the why of object destructuring, we will consider a scenario which most of us might be familiar with, or might have come across at one time or the other when coding in JavaScript. Imagine we have the data of a student including scores in three subjects (_Maths, English, Science_) represented in an object and we need to display some information based on this data. We could end up with something that looks like this:

```js
const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
    science: 85,
  },
};

function displaySummary(student) {
  console.log('Hello, ' + student.name);
  console.log('Your Maths score is ' + (student.scores.maths || 0));
  console.log('Your English score is ' + (student.scores.english || 0));
  console.log('Your Science score is ' + (student.scores.science || 0));
}

displaySummary(student);
// Hello, John Doe
// Your Maths score is 74
// Your English score is 63
// Your Science score is 85
```

With the above code snippet, we would achieve the desired result. However, there are a few caveats to writing code this way. One of which is — you can easily make a typo and instead of writing `scores.english` for example, you write `score.english` which will result in an error. Again, if the `scores` object we are accessing is deeply nested in another object, the object access chain becomes longer which could mean more typing. These may not seem to be much an issue, but with destructuring we can do the same in a more expressive and compact syntax.

Destructuring simply implies ==**breaking down a complex structure into simpler parts**==. In JavaScript, _this complex structure is usually an object or an array_. With the destructuring syntax, you can ==**extract smaller fragments from arrays and objects**==. Destructuring syntax can be used for ==_variable declaration (also call binding)_== or ==_variable assignment_==. _You can also handle nested structures by using nested destructuring syntax_.

Using destructuring, the function from our previous snippet will look like this:

```js
function displaySummary({
  name,
  scores: { maths = 0, english = 0, science = 0 },
}) {
  console.log('Hello, ' + name);
  console.log('Your Maths score is ' + maths);
  console.log('Your English score is ' + english);
  console.log('Your Science score is ' + science);
}
```

What we saw in that last snippet is a form of ==object destructuring being used as an assignment to a function==. 

## Binding and assignment

For both object and array destructuring, there are ==two kinds of destructuring patterns==: ==**binding** pattern== and ==**assignment** pattern==, with slightly different syntaxes.

In binding patterns, the pattern starts with a declaration keyword (`var`, `let`, or `const`). Then, each individual property must either be bound to a variable or further destructured.

```js
// Binding pattern
const obj = { 
    a: 1, 
    b: { c: 2 } 
};

const { a, b } = obj;
```

In assignment patterns, the pattern does not start with a keyword. Each destructured property is assigned to a target of assignment — which may either be declared beforehand with `var` or `let`, or is a property of another object — in general, anything that can appear on the left-hand side of an assignment expression.

```js
// Assignment patterns
let a, b;

const obj = { 
    a: 1, 
    b: { c: 2 } 
};

({ a, b } = obj);
```

> **NOTE:** The parentheses `( ... )` around the assignment statement are required when using object literal destructuring assignment without a declaration.
>
> `{ a, b } = { a: 1, b: 2 }` is not valid stand-alone syntax, as the `{a, b}` on the left-hand side is considered a block and not an object literal. However, `({ a, b } = { a: 1, b: 2 })` is valid, as is `const { a, b } = { a: 1, b: 2 }`.

## Default Values

Trying to assign a variable corresponding to a key that does not exist on the destructured object will cause the value `undefined` to be assigned instead. You can pass **default values** that will be assigned to such variables instead of `undefined`. Here is a simple example.

```js
const person = {
  name: 'John Doe',
  country: 'Canada',
};

// Assign default value of 25 to age if undefined
const { name, country, age = 25 } = person;

// Here I am using ES6 template literals
console.log(`I am ${name} from ${country} and I am ${age} years old.`);

// I am John Doe from Canada and I am 25 years old.'
```

Here we assigned a default value of `25` to the `age` variable. Since the `age` key does not exist on the `person` object, 25 is assigned to the `age` variable instead of `undefined`.

## Using Different Variable Names

So far, we have been assigning to variables that have the same name as the corresponding object key. You can assign to a different variable name using this syntax: `[object_key]:[variable_name]`. You can also pass default values using the syntax: `[object_key]:[variable_name] = [default_value]`:

```js
const person = {
  name: 'John Doe',
  country: 'Canada',
};

// Assign default value of 25 to years if age key is undefined
const { name: fullname, country: place, age: years = 25 } = person;

// Here I am using ES6 template literals
console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);

// I am John Doe from Canada and I am 25 years old.'
```

Here we created three local variables namely: `fullname`, `place` and `years` that map to the `name`, `country` and `age` keys respectively of the `person` object. Notice that we specified a default value of 25 for the `years` variable in case the `age` key is missing on the `person` object.

## Nested Object Destructuring

Referring back to our initial destructuring example, we recall that the `scores` object is nested in the `student` object. Let’s say we want to assign the _Maths_ and _Science_ scores to local variables. The following code snippet shows how we can use nested object destructuring to do this:

```js
const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
  },
};

// We define 3 local variables: name, maths, science
const {
  name,
  scores: { maths, science = 50 },
} = student;

console.log(
  `${name} scored ${maths} in Maths and ${science} in Elementary Science.`
);

// John Doe scored 74 in Maths and 50 in Elementary Science.
```

Here, we defined three local variables: `name`, `maths` and `science`. Also, we specified a default value of `50` for `science` in case it does not exist in the nested `scores` object. Notice that, `scores` is not defined as a variable. Instead, we use nested destructuring to extract the `maths` and `science` values from the nested `scores` object.

==**When using nested object destructuring, be careful to avoid using an empty nested object literal**. Though it is valid syntax, it actually does no assignment.== For example, the following destructuring does absolutely no assignment.

```js
// This does no assignment
// Because of the empty nested object literal ({})
const {
  scores: {},
} = student;
```

## Extracting a dynamic name property

You can extract to variables properties with a dynamic name (the property name is known at runtime):

```js
const { [propName]: identifier } = expression;
```

`propName` expression should evaluate to a property name (usually a string), and the `identifier` should indicate the variable name created after the destructuring. The second `expression` should evaluate to the object you'd like to destructure.

An equivalent code without object destructuring:

```js
const identifier = expression[propName];
```

Let's look at an example where `prop` holds the property name:

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
};
const prop = 'name';
const { [prop]: name } = hero;
name; // => 'Batman'
```

`const { [prop]: name } = hero` is an object destructuring that assigns to variable `name` the value `hero[prop]`, where `prop` is a variable holding the property name.

## Rest object after destructuring

The `rest` syntax is useful to collect the remaining properties after the destructuring:

```js
const { identifier, ...rest } = expression;
```

Where `identifier` is the name of the property to access and `expression` should evaluate to an object.

After the destructuring, the variable `identifier` contains the property value. `rest` variable is a plain object with the remaining properties.

For example, let's extract the property `name`, but keep the rest of the properties:

```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
};
const { name, ...realHero } = hero;
realHero; // => { realName: 'Bruce Wayne' }
```

The destructuring `const { name, ...realHero } = hero` extracts the property `name`.

At the same time, the remaining properties (`realName` in this case) are collected into the variable `realHero: { realName: 'Bruce Wayne' }`.

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

2. [How to Use Object Destructuring in JavaScript - Dmitri Pavlutin](https://dmitripavlutin.com/javascript-object-destructuring/#7-extracting-a-dynamic-name-property)

3. [Destructuring assignment - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
