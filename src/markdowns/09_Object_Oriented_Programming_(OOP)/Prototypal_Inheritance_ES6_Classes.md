## ES6 Classes

==A JavaScript class is **not an object**, it is a **template** for JavaScript objects. Classes are a **template for creating objects**. They encapsulate data with code to work on that data.==

Classes in JavaScript do not work like traditional classes in other languages like Java or C++. Classes in JavaScript are built on prototypes, so classes are in fact "special functions", "syntactic sugar" over Constructor Function. Classes still implement Prototypal Inheritance behind the scenes, but where they syntax that makes more sense to people coming from other programming languages, and that was basically the goal of adding classes to JavaScript.

![classes_summary](../../img/classes_summary.jpg)

## Defining classes

==Like in functions, we have class **expression** and class **declaration**. In fact **classes are just a special type of functions**==. So although we use the `class` keyword, behind the scenes **classes are still functions**, and therefore we have class expressions and class declarations.

```js
class Student extends Person {
    university = 'University of Nicaragua';
    #studyHours = 0;
    #course;
    static numSubjects = 10;
    
    constructor(fullName, birthYear, startYear, course) {
        super(fullName, birthYear);
        this.startYear = startYear;
        this.#course = course;
    }
    
    introduce() {
        return `I study ${this.#course} at ${this.university}`;
    }
    
    study(h) {
        this.#makeCoffe();
        this.#studyHours += h;
    }
    
    #makeCoffe() {
        return 'Here is a coffe for you'
    }
    
    get testScore() {
        return this._testScore;
    }
    
    set testScore() {
        this._testScore = score < 20 ? score : 0;
    }
    
    static printCurriculum() {
        return `There are ${this.numSubjects} subjects.`
    }
}

const student = new Student('Richard', 2020, 2037, 'Medicine');
```

One way to define a class is using a **class declaration**. To declare a class, you use the `class` keyword with the name of the class:

```js
// Class expression
const Person = class {};

// Class declaration
class Person {};
```

> **Note**: The `constructor` method works in a pretty similar way as a Constructor Function. Just like in Constructor Functions, we pass in `constructor` method arguments for the properties that we wanted to have every object created by `Person` class.

> **Note**: An important difference between **function declarations** and **class declarations** is that **function declarations are hoisted and class declarations are not**. You first need to declare your class and then access it, otherwise code like the following will throw a `ReferenceError`:
>
> ```js
> const p = new Person(); // ReferenceError
>class Person {}
> ```
> 
>This occurs because while the class is hoisted its values are not initialized.

==**Differences between Constructor Function and classes are the syntax**. In classes we don't have to manually mess with the `prototype` property to create methods==. All you have to do is to write the methods inside the class but outside of the `constructor` method, and then they will automatically be added to the `prototype` property of the class.

Just like functions, classes are also first class citizens and so what that means, is that we can pass them into functions and also return them from functions.

## Class body

The body of a class is the part that is in curly brackets `{}`. This is where you define class members, such as methods or constructor. The body of a class is executed in "strict mode", so even if we didn't activate it for our entire script, all the code that is in the class body will be executed in "strict mode".

## Constructor

The `constructor` method is a ==special method for **creating and initializing an object** created with a `class`. There can only be **one** special method with the name "constructor" in a class==. A `SyntaxError` will be thrown if the class contains more than one occurrence of a `constructor` method.

The constructor method is a special method:

- it has to have the exact name "constructor";
- it is executed automatically when a new object is created;
- it is used to initialize object properties.

If you do not define a constructor method, JavaScript will add an empty constructor method.

```js
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}
```

## Prototype methods

==Class methods are created with the same syntax as object methods==. What's important to understand is that all of the methods that we write in a class, so outside of the `constructor`, will be on the prototype of the objects, and not on the objects themselves. So ==methods write in a class, outside of the `constructor`, will be added to `prototype` property==.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Method need to be defined OUTSIDE OF THE CONSTRUCTOR METHOD
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
```

You can also add method or properties directly on the `prototype` property:

```js
Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
```

## Setters and Getters

Classes also allows you to use getters and setters. It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the `get` and `set` keywords:

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar = new Car('Ford');

document.getElementById('demo').innerHTML = myCar.cnam;
```

> **Note**: Even if the getter is a method, you do not use parentheses when you want to get the property value.

The name of the getter/setter method cannot be the same as the name of the property, in this case carname. Many programmers use an underscore character `_` before the property name to separate the getter/setter from the actual property:

```js
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar = new Car('Ford');

document.getElementById('demo').innerHTML = myCar.carname;
```

To use a setter, use the same syntax as when you set a property value, without parentheses:

```js
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar = new Car('Ford');
myCar.carname = 'Volvo';
document.getElementById('demo').innerHTML = myCar.carname;
```

## Static methods and properties

==Static class methods are defined on the class itself. You cannot call a static method on an object instance, only on an object class==.

==The `static` keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance==. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = 'Point';
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### Another example

```js
Array.from(document.querySelectorAll('h1'));
[1, 2, 3].form(); //Uncaught TypeError: [1,2,3].form is not a function
```

This `.from()` method is really a method that is attached to the `Array` constructor. So we could not use the `.from()` method on an simply array because it not gonna work because `.from()` method is attached to the entire Constructor Function, so the `Array` Constructor Function and not to the `prototype` property of the Constructor Function. And so therefore all the arrays do not inherit `.form()` method, again, because its not on their prototype, its attached to the Constructor Function itself. So `Array.from()` is basically just a simple function, but its a function that's attached to the Array Constructor Function with the hep of `static` keyword.

Another example is `Numbers.parsefloat()`, so that's the same thing like `Array.from()`, so `.parsefloat()` method is another static method and its static on the Number Constructor Function. `.parsefloat()` is not available on numbers, but only on Number Constructor. So these are some good examples that we understand what a static method is.

## Encapsulation: Protected Properties and Methods

==Encapsulation means to keep some **properties and methods private inside the class**==, so that they are not accessible from outside of the class, then the rest of the methods are exposed as a public interface, which we can also call **public API**.

There are two big reasons why we need encapsulation and data privacy:

- first is to prevent code from outside of a class to accidentally manipulate our data inside the class;
- second reason is that when we expose only a small interface, so a small public API consisting only of a few public methods, then we can change all the other internal methods with more confidence because in this case we can be sure that external code does not rely on these private methods, and so therefore our code will not break when we do internal changes.

However, JavaScript **classes actually do not yet support real data privacy and encapsulation**. Now there is a **proposal to add truly private class fields and methods** to the language, but it's not completely ready yet. So in this lecture, we will basically fake encapsulation by simply using a convention.

```js
class AccountEncapsulation {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.locale = navigator.language;

    // Protected property
    this._pin = pin;
    this._movements = []; // this does not actually make the property truly private because this is just a convention. So it's something that developers agree to use and then everyone does it this way. But since it is not truly private we call this protected, so protected property.
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // Protected method
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}
```

## Encapsulation: Private Class Fields and Methods

Private class fields and methods are actually part of a bigger proposal for improving and changing JavaScript classes, which is simply called Class Fields. Now this Class Fields proposal is currently at stage three, and so right now it's actually not yet part of the JavaScript language. However, being at stage three means that it's very likely that at some point, it will move forward to stage number four and then it will actually become a part of the JavaScript language, and that's probably gonna happen some point soon in the future. in fact, some parts of this proposal actually already work in Google Chrome but other parts don't.

Now for starters, why is this proposal actually called Class fields? Well, in traditional OOP languages like Java and C++, properties are usually called fields. So what this means is that with this new proposal, JavaScript is moving away from the idea that classes are just syntactic sugar over Constructor Functions. Because with this new class features classes actually start to have abilities that we didn't previously have with Constructor Functions.

In this proposal, there are actually four different kinds of fields and methods, and actually it's even eight. But in this lecture, I'm just gonna focus on these four and that's ==**public fields**==, ==**private fields**==, ==**public methods**== and ==**private methods**==. So essentially there is a public and a private version of both fields and methods:

1. Public fields (we can think of a field as a property that will be on all instances)
2. Private fields (we can not define a field in the constructor)
3. Public methods
4. Private methods

```js
class AccountPrivate {
  // Public fields (instances)
  // These public fields below are gonna be present on all the instances that we are creating through the class, so they are not on the prototype. So this is important to understand.
  locale = navigator.language;

  // Private fields (instances)
  // These private fields below are gonna be present on all the instances that we are creating through the class, so they are not on the prototype. So this is important to understand.
  #movements = []; // this is the syntax that makes a field private in this new class proposal.
  #pin; //So in the beginning, #pin will be set to undefined and then here we can redefine that value in the constructor.

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // this.locale = navigator.language;

    //Protected property
    this.#pin = pin;
    // this._movements = [];
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // Private methods
  // Private methods are very useful to hide the implementation details from the outside. To make a private method, the syntax is exactly the same as private fields. Now, the big problem here, is that right now no browser actually supports this. So I can just show you how it works in the code but unfortunately I cannot show you how it works. Google Chrome right now basically sees this as a private class field and not as a method so that's why I was saying that the methods are not really yet implemented in Google Chrome.
  #approveLoan(val) {
    return true;
  }
}

const account = new AccountPrivate('Anthony', 'RON', 3333);
console.log(account.#movements); // Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class
```

## Chaining Methods

Do you remember how we chained array methods one after another, for example `filter`, `map` and `reduce`? So by chaining these methods, we could first `filter` an array, then `map` the result and finally `reduce` the results of the `map`, all in one line of code. And we can actually implement the same ability of chaining methods in the methods of our class. So ==all we have to do is to **return the object itself at the end of a method that we want to be chainable**==.

```js
account
  .deposit(300)
  .deposit(500)
  .withdraw(35)
  .requestLoan(25000)
  .withdraw(4000);
```

# More real inheritance than Prototypal Inheritance (Child class and Parent class)

Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

==To implement inheritance between ES6 classes, we only need two ingredients. We need the `extends` and the `super` keywords==.

- The `extends` keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class.

- The `super` keyword refers to the parent class. By calling the `super()` method in the child constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

### Syntax

```js
class childClass extends parentClass { ... }
```

When used in a constructor, the `super` keyword appears alone and must be used before the `this` keyword is used. The `super` keyword can also be used to call functions on a parent object.

```js
super(arguments); // calls the parent constructor (only inside the constructor)
super.parentMethod(arguments); // calls a parent method
```

### Examples

```js
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

class Student extends Person {
  // The 'extends' keyword will link to prototype behind the scenes
  constructor(fullName, birthYear, course) {
    // The super() must be used before the `this` keyword is used because this call to the 'super' function is responsible for creating the 'this' keyword in this subclass.
    super(fullName, birthYear); // We don't need to specify the name of the parent class again because that already happened after 'extends' keyword.
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old.`);
  }
}
```

If you do not need any new properties, then you don't even need to bother writing a `constructor` method in the child class.

```js
class Student extends Person {}

const martha = new Student('Martha Jones', 2012);
```

## Summary

So, now at the end of this lecture, you might ask if you should use Constructor Functions or classes. The first remark I want to do is that Constructor Functions are not like old or deprecated syntax, so it's 100% fine to keep using them. So one more time, this is more a question of personal preference. Now, if you're asking, if you should use classes without understanding Prototypal Inheritance, well then, the reply is definitely "No!". Now, some people actually say that classes are really bad in general and that no one should ever be using them simply because they hide the true nature of JavaScript. But I actually don't agree with that and I think it's absolutely okay to use classes in your code, as long as you understand everything that I just showed you previously about the prototype and prototypal inheritance.

Now, what I personally like about classes is that they visually put all the code that belongs to a certain class, so like all the data and all the methods, all into one nice code block. With Constructor Functions, in my opinion, it all looks just like a big mess.

## References

1. [Classes in JavaScript - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
2. [JavaScript Classes - w3schools](https://www.w3schools.com/js/js_classes.asp)
3. [Classes - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
4. [extends keyword - w3schools](https://www.w3schools.com/jsref/jsref_class_extends.asp)
5. [extends keyword - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
6. [super keyword - w3schools](https://www.w3schools.com/jsref/jsref_class_super.asp)
7. [super keyword - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
8. [static keyword - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
9. [What’s the Difference Between Class & Prototypal Inheritance? - medium.com](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9#.h96dymht1)
10. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
