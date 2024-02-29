# Prototypal Inheritance: Constructor Function & Prototypes

==In JavaScript, most things are objects==, from core JavaScript features like arrays to the browser [APIs](https://developer.mozilla.org/en-US/docs/Glossary/API) built on top of JavaScript. You can even create your own objects to encapsulate related functions and variables into efficient packages and act as handy data containers.

An object is a ==collection of related data and/or functionality==. These usually consist of several variables and functions (which are called properties and methods when they are inside objects). As with many things in JavaScript, creating an object often begins with defining and initializing a variable. The simplest way to create an object is with object literals syntax:

```js
const obj = {};
```

==Using object literals is fine when you only need to create one object, but if you have to create more than one, they're seriously inadequate==. We have to write out the same code for every object we create, and if we want to change some properties of the object, then we have to remember to update every object.

We would like a way to define the "shape" of an object — the set of methods and the properties it can have — and then create as many objects as we like, just updating the values for the properties that are different. ==Sometimes we need a "**blueprint**" for _creating many objects of the same "type"_==.

## Factory Functions vs Constructor Function

### Factory Functions

```js
function Person(name, birthYear) {
  const obj = {};
  obj.name = name;
  obj.birthYear = birthYear;
  obj.introduceSelf = function () {
    return `Hi! I'm ${this.name} and I have ${this.birthYear} years old!`;
  };
  return obj;
}
```

This function creates and returns a new object each time we call it. The object will have three members:

- a property `name`
- a property `birthYear`
- a method `introduceSelf()`.

Note that `Person()` takes two parameters `name` and `birthYear` to set the value of the `name` and `birthyear` property, but the value of the `introduceSelf()` method will be the same for all objects created using this function. This is a very common pattern for creating objects.

Now we can create as many objects as we like, reusing the definition:

```js
const salva = Person("Salva", 35);
const frankie = Person("Frankie", 28);
```

This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it. A better way is to use a constructor.

### Constructor Function

==Constructor Function in JavaScript provide us with something like a class definition, enabling us to define the "shape" of an object, including any methods it contains, in a single place. Prototypes can be used in Constructor Function, too. For example, if a method is defined on a constructor's `prototype` property, then all objects created using that constructor get that method via their prototype, and we don't need to define it in the constructor. Constructor Function and prototypes can be used to implement traditional class-based OOP patterns in JavaScript==.

==A **constructor** is just a function called using the [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) keyword==. When you call a constructor, it will:

- create a new object
- bind `this` to the new object, so you can refer to `this` in your constructor code
- run the code in the constructor
- return the new object.

Constructors, by convention, ==start with a capital letter== and ==are named for the type of object they create==. So we could rewrite our example like this:

```js
// ***** WRONG WAY WITHOUT PROTOTYPE PROPERTY *****
function Person(name, birthYear) {
	this.name = name;
    this.birthYear = birthYear;
    let a = 5; //with the Constructor Functions THE ONLY WAY WE CAN ADD PROPERTIES TO AN OBJECT IS WITH THE 'THIS' KEYWORD.
	this.introduceSelf = function () {
		return `Hi! I'm ${this.name} and I have ${this.birthYear} years old!`;
	};
}
// NEVER CREATE A METHOD INSIDE OF A CONSTRUCTOR FUNCTION. That's because imagine we were gonna create a 100 or 1000 or even 10000 of Person objects using this Constructor Function. Then what would happen, is that each of these objects would carry around this function here. So if we had a 1000 objects, we would essentially create a 1000 copies of this function. And so that would be terrible for the performance of our code. But instead to solve this problem, we are gonna use prototypes and prototype inheritance.

// ***** CORRECT WAY WITH PROTOTYPE PROPERTY *****
function Person(name, birthYear) {
	this.name = name;
    this.birthYear = birthYear;
}

Person.prototype.introduceSelf = function () {
	return `Hi! I'm ${this.name} and I have ${this.birthYear} years old!`;
};
Person.prototype.species = 'Homo sapiens';
```

> **Note**: We should ==NEVER CREATE A METHOD INSIDE OF A CONSTRUCTOR FUNCTION==.
>
> You can use a function expression or a function declaration to create a Constructor Function, but ==you can't create a Constructor Function with the **arrow function**== because arrow function doesn't have its own `this` keyword and we need that.
>
> In a Constructor Function `this` does not have a value. It is a substitute for the new object. The value of `this` will become the new object when a new object is created.

To call `Person()` as a constructor, we use `new`:

```js
const salva = new Person("Salva", 35);
const frankie = new Person("Frankie", 28);

salva.introduceSelf();		// Hi! I'm Salva and I have 35 years old!
frankie.introduceSelf();	// Hi! I'm Frankie and I have 28 years old!
salva.species;				// 'Homo sapiens'
frankie.species;			// 'Homo sapiens'
```

We just observed that the `salva` and `frankie` objects are kind of somehow connected to the `Person`, that's why they can have access the methods and properties that are located inside the `prototype` property of `Person`. But how and why does this actually work? Well, it works because ==**any object always has access to the methods and properties from its prototype**==, and the prototype of `salva` and `frankie` is `Person.prototype`.

```js
salva.__proto__ === Person.prototype; // true; So shouldn't Person.prototype be the prototype of Person? Well, actually, no. So this is the confusing part, Person.prototype is actually not the prototype of Person, but instead it is what's gonna be used as the prototype of all the objects that are created with the Person Constructor Function.

Person.prototype.isPrototypeOf(Person);		// false
Person.prototype.isPrototypeOf(salva);		// true
Person.prototype.isPrototypeOf(frankie);	// true
Person.isPrototypeOf(salva); // false. Why is that? This is a little tricky but Person is a Constructor Function. Instead, will need to check Person.prototype which is the object that contains all the properties and methods we have available on Person.
Person.prototype;	// {constructor: f}
salva.prototype;	// undefined. Why is that? Remember that only functions have access to the prototype and "salva" is not a function, "salva" is an object.
```

In classical OOP, an object created from a class is called an instance, right? Now we didn't technically create a class above because as I say, ==**JavaScript doesn't really have classes in the sense of traditional OOP**==. However, we did create an object from a Constructor Function. 

==Constructor Functions have been used since the beginning of JavaScript to kind of **simulate classes**==. So therefore we can still say that `salva` is an instance of `Person` and the same goes for `frankie`. In fact, there is even an operator that we can use to test for that:

```js
salva instanceof Person;	// true
frankie instanceof Person;	// true
```

Just note that ==Constructor Function are not really a feature of the JavaScript language. Instead, they are simply a **pattern** that has been developed by other developers and now everyone simply uses this==.

## You've been using objects all along

As you've been going through these examples, you have probably been thinking that the dot notation you've been using is very familiar. That's because you've been using it throughout the course! ==Every time we've been working through an example that uses a built-in browser API or JavaScript object, we've been using objects, because such features are built using exactly the same kind of object structures that we've been looking at here==, albeit more complex ones than in our own basic custom examples.

So when you used string methods like:

```js
myString.split(",");
```

You were using a method available on a [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) object. Every time you create a string in your code, that string is automatically created as an instance of `String`, and therefore has several common methods and properties available on it.

When you accessed the document object model using lines like this:

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

You were using methods available on a [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object. For each webpage loaded, an instance of `Document` is created, called `document`, which represents the entire page's structure, content, and other features such as its URL. Again, this means that it has several common methods and properties available on it.

The same is true of pretty much any other built-in object or API you've been using — [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), and so on.

==Note that built in objects and APIs don't always create object instances automatically==. As an example, the [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) — which allows modern browsers to fire system notifications — requires you to instantiate a new object instance using the constructor for each notification you want to fire. Try entering the following into your JavaScript console:

```js
const myNotification = new Notification("Hello!");
```

## More real inheritance than Prototypal Inheritance (Child and Parent)

#### Prototypes and inheritance

Prototypes are a powerful and very flexible feature of JavaScript, making it possible to ==reuse code== and ==combine objects==. Now Prototypal Inheritance basically allow objects to inherit methods from its prototype, so to delegate their behavior to their prototype.

Up until now we explored how to set a prototype and how prototypal inheritance works in JavaScript. Now it's time to turn our attention to more real inheritance. So what I'm talking about is **real inheritance between classes and not just Prototypal Inheritance between instances and a `prototype` property** like we've been doing so far. And I'm using class terminology because this simply makes it easier to understand what we're gonna do. But of course, you already know that real classes do not exist in JavaScript.

```js
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};
```

Usually we want a child class to have the same functionality as the parent class, but with some additional functionality, and so usually we pass in the same arguments, but then also some additional ones.

```js
// Wrong way
const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
```

Right now this part of the code above is basically a simple copy of the `Person` Constructor Function, so of the class that we want to be the parent class, right? As you know, **having duplicate code is never a good idea**:

- First because it violates the **DRY principle** ("Don't repeat yourself");
- Second and even worse in this case is that imagine that the implementation of `Person` changes in the future, then that change will not be reflected in the `Student`.

```js
// Correct way
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); // With this code, the Student.prototype object is now an object that inherits from Person.prototype
```

> **Note**: It's important to defining prototypes manually exactly after you build the child Constructor Function because we need to create a connection between child Constructor (`Student.prototype`) and parent Constructor (`Object.create(Person.prototype)`) before we add any more methods to the `prototype` object of child Constructor (`Student`) and that's because `Object.create()` will return an empty object and so at this point `Student.prototype` is empty and so then onto that empty object we can add new methods.

After you establish the connection between child `prototype` property and parent `prototype` property, you can add new methods to the child Constructor.

```js
Student.prototype.introduce = function () {
  return `My name is ${this.firstName} and I study ${this.course}`;
};
```

## Summary

==Objects are very useful as structures for **storing related _data_ and _functionality_**== — if you tried to keep track of all the properties and methods in an object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. Objects let us keep the information safely locked away in their own package, out of harm's way.

We use Constructor Functions to ==**build an object using a function**==. Now, a Constructor Function is actually a completely **normal function**. The only difference between a regular function and a function that we say Constructor Function, is that we call a Constructor Function with the `new` keyword.

Prototypes are a powerful and very flexible feature of JavaScript, making it possible to ==reuse code== and ==combine objects==. In particular they support a version of **inheritance**. Inheritance is a feature of OOP languages that lets programmers express the idea that some objects in a system are more specialized versions of other objects.

For example, if we're modeling a school, we might have *professors* and *students*: they are both *people*, so have some features in common (for example, they both have names), but each might add extra features (for example, _professors_ have a subject that they teach), or might implement the same feature in different ways. In an OOP system we might say that _professors_ and _students_ both **inherit from** _people_.

You can see how in JavaScript, if _professor_ and _student_ objects can have _person_ prototypes, then they can inherit the common properties, while adding and redefining those properties which need to differ.

## References

1. [JavaScript object basics - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
2. [Object Constructors - w3schools](https://www.w3schools.com/js/js_object_constructors.asp)
3. [`new` operator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
4. [Object-oriented programming - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
5. [Function() constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
6. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)