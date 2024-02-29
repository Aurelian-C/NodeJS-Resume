# Object Accessors (Getters and Setters)

Getters and setters allow you to define Object Accessors (Computed Properties). Getters and setters are basically **functions that get and set a value**.

## JavaScript Getter (the `get` keyword)

This example uses a `lang` property to `get` the value of the `language` property.

```js
// Create an object:
const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: 'en',
  get lang() {
    return this.language;
  },
};

// Display data from the object using a getter:
document.getElementById('demo').innerHTML = person.lang;
```

## JavaScript Setter (the `set` keyword)

This example uses a `lang` property to `set` the value of the `language` property.

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: '',
  set lang(lang) {
    this.language = lang;
  },
};

// Set an object property using a setter:
person.lang = 'en';

// Display data from the object:
document.getElementById('demo').innerHTML = person.language;
```

## JavaScript Function or Getter?

What is the differences between these two examples?

```js
// ***** Example 1 *****
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

// Display data from the object using a method:
document.getElementById('demo').innerHTML = person.fullName();

// ***** Example 2 *****
const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

// Display data from the object using a getter:
document.getElementById('demo').innerHTML = person.fullName;
```

Example 1 access fullName **as a function**: person.fullName().

Example 2 access fullName **as a property**: person.fullName.

The second example provides a simpler syntax.

## Data Quality

JavaScript can secure **better data quality when using getters and setters**.

```js
// Using the lang property, in this example, returns the value of the language property in upper case:
const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: 'en',
  get lang() {
    return this.language.toUpperCase();
  },
};

document.getElementById('demo').innerHTML = person.lang;

// Using the lang property, in this example, stores an upper case value in the language property:
const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: '',
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
};

person.lang = 'en';

document.getElementById('demo').innerHTML = person.language;
```

## Why Using Getters and Setters?

- It gives simpler syntax
- It allows equal syntax for properties and methods
- It can secure better data quality
- It is useful for doing things behind-the-scenes
