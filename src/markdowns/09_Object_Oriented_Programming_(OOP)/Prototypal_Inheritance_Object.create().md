# Prototypal Inheritance: `Object.create()` & Prototypes

The `Object.create()` method ==**creates a new object** and **allows you to specify an object that will be used as the new object's prototype**==.

## Syntax

```js
Object.create(proto);
Object.create(proto, propertiesObject);

// Example
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction(); // expected output: "My name is Matthew. Am I human? true"
```

## Parameters

#### ==proto==

The object which should be the prototype of the newly-created object.

#### ==propertiesObject _(optional)_==

If specified and not `undefined`, an object whose [enumerable own properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of [`Object.defineProperties()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties).

## Return value

==A new object== with the specified prototype object and properties.

## Exceptions

A [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) is thrown if `proto` is neither:

- `null` _or_
- an `Object` excluding _primitive wrapper objects_.

```js
oco = Object.create({}); // create a normal object
ocn = Object.create(null); // create a "null" object

console.log(oco); // {} -- Seems normal
console.log(ocn); // {} -- Seems normal here too, so far

oco.p = 1; // create a simple property on normal obj
ocn.p = 0; // create a simple property on "null" obj

console.log(oco); // {p: 1} -- Still seems normal
console.log(ocn); // {p: 0} -- Still seems normal here too. BUT WAIT...

'oco is: ' + oco; // shows "oco is: [object Object]"
'ocn is: ' + ocn; // throws error: Cannot convert object to primitive value

alert(oco); // shows [object Object]
alert(ocn); // throws error: Cannot convert object to primitive value

oco.toString(); // shows [object Object]
ocn.toString(); // throws error: ocn.toString is not a function

oco.valueOf(); // shows {}
ocn.valueOf(); // throws error: ocn.valueOf is not a function

oco.hasOwnProperty('p'); // shows "true"
ocn.hasOwnProperty('p'); // throws error: ocn.hasOwnProperty is not a function

oco.constructor; // shows "Object() { [native code] }"
ocn.constructor; // shows "undefined"
```

> **Note**: With `Object.create()` there are no `prototype` property involved and also no Constructor Functions and no `new` keyword. So instead, we can use `Object.create()` to essentially **manually set the prototype of an object to any other object that we want**.

## More real inheritance than Prototypal Inheritance (Child and Parent)

#### Prototypes and inheritance

Prototypes are a powerful and very flexible feature of JavaScript, making it possible to ==reuse code== and ==combine objects==. Now prototypal inheritance basically allow objects to inherit methods from its prototype, so to delegate their behavior to their prototype.

Up until now we explored how to set a prototype and how prototypal inheritance works in JavaScript. Now it's time to turn our attention to more real inheritance. So what I'm talking about is **real inheritance between classes and not just prototypal inheritance between instances and a `prototype` property** like we've been doing so far. And I'm using class terminology because this simply makes it easier to understand what we're gonna do. But of course, you already know that real classes do not exist in JavaScript.

```js
const Person = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const Student = Object.create(Person);

Student.init = function (firstName, birthYear, course) {
  Person.init.call(this, firstName, birthYear);
  this.course = course;
};

Student.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(Student);
jay.init('Jay Smith', 2002, 'Gangster');
jay.introduce();
jay.calcAge();
```

In this version, with `Object.create()`, we don't even worry about Constructor Function anymore, and also not about `prototype` properties, and not about the `new` operator. So it's really ==just objects linked to other objects==. 

Some people think that this pattern is a lot better than basically trying to fake classes in JavaScript, because faking classes in the way that they exist in other languages like Java or C++, is exactly what we do by using Constructor Functions and even ES6 classes. But here, in this technique that I just showed you with `Object.create()`, we are, in fact, not faking classes. All we are doing is ==simply linking objects together, where some objects then serve as the prototype of other objects==. Personally, I wouldn't mind if this was the only way of doing OOP in JavaScript, but as I mentioned earlier, ES6 classes and Constructor Functions are actually way more used in the real world.

## References

1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
2. [Object-oriented programming - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
3. [`Object.create()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)