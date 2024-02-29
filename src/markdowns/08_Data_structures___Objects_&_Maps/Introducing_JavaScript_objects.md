# Introducing JavaScript objects

==In JavaScript, most things are **objects**==, from core JavaScript features like arrays to the browser APIs built on top of JavaScript. You can even ==create your own objects to **encapsulate related functions and variables** into efficient packages and act as handy **data containers**==. The object-based nature of JavaScript is important to understand if you want to go further with your knowledge of the language.

An object is a ==**collection** of related **data** and/or **functionality**==. These usually consist of several variables and functions (which are called ==**properties**== and ==**methods**== when they are inside objects).

Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects. ==In JavaScript, an object is a standalone entity, with properties and type==. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, ==JavaScript objects can have **properties**, which **define their characteristics**==.

## Objects and properties

A JavaScript object has properties associated with it. ==A property of an object can be explained as **a variable that is attached to the object**==. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. ==The properties of an object define the **characteristics of the object**==. You access the properties of an object with a `.` (dot) or `[]` (square bracket) notation:

```js
objectName.propertyName;
objectName['propertyName'];
```

Like all JavaScript variables, both the object name (which could be a normal variable) and ==property name are **case sensitive**==.

An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string. However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation. This notation is also very useful when property names are to be dynamically determined (when the property name is not determined until runtime).

> **NOTE**: ==All keys in the square bracket notation are **converted to string**== unless they're Symbols, since JavaScript object property names (keys) can only be strings or Symbols.

## Creating an object - _Object literals_

As with many things in JavaScript, creating an object often begins with ==**defining** and **initializing** a variable==.

```js
// Syntax
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};

// Creating an empty object
const person = {};

// Create an object with properties and methods
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

> **NOTE**: An object like above is referred to as an ==**object literal**== — we've literally written out the object contents as we've come to create it. This is in contrast to ==**objects instantiated from classes**==. It is very common to create an object using an object literal when you want to transfer a series of structured, related data items in some manner, for example sending a request to the server to be put into a database. Sending a single object is much more efficient than sending several items individually, and it is easier to work with than an array, when you want to identify individual items by name.

> **NOTE**: You are probably wondering what `this` is. The `this` keyword above refers to the current object the code is being written inside — so in this case `this` is equivalent to `person`. So why not just write `person` instead?
> Well, when you only have to create a single object literal, `this` is not so useful. But if you create more than one, `this` enables you to use the same method definition for every object you create. ==`this` isn't hugely useful when you are writing out **object literals** by hand, but it will be essential when we start using **Constructors** to create more than one object from a single object definition==.

An object is made up of multiple members, each of which has a ==name== (e.g. `name` and `age` above), and a ==value== (e.g. `['Bob', 'Smith']` and `32`). Each ==**name/value pair**== must be separated by a comma (`:`), and the name and value in each case are separated by a colon (`,`).

==The value of an object member can be pretty much anything== — in our `person` object we've got a number, an array, and two functions. The first two items are data items, and are referred to as the object's ==**properties**==. The last two items are functions that allow the object to do something with that data, and are referred to as the object's ==**methods**==.

An object property can itself be an object:

```js
name: ['Bob', 'Smith']

name : {
  first: 'Bob',
  last: 'Smith'
}
```

### Shorthand syntax

When the _object's members are functions_ there's a simpler syntax. Instead of `bio: function()` we can write `bio()`.

```js
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

## Creating an object - _Constructors_

Using ==**object literals** is fine when you only need to create **one object**==, but if you have to create more than one, they're seriously inadequate. We have to write out the same code for every object we create, and if we want to change some properties of the object, then we have to remember to update every object.

We would like a way to ==define the "shape" of an object== — ==**the set of methods and the properties it can have**== — and then create as many objects as we like, just updating the values for the properties that are different.

The first version of this is just a function:

```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const salva = createPerson('Salva');
salva.name;
salva.introduceSelf();

const frankie = createPerson('Frankie');
frankie.name;
frankie.introduceSelf();
```

The `createPerson` function creates and returns a new object each time we call it. The object will have two members:

- a property `name`
- a method `introduceSelf()`.

> Note that `createPerson()` takes a parameter `name` to set the value of the `name` property, but the value of the `introduceSelf()` method will be the same for all objects created using this function. This is a very common pattern for creating objects. You can see here how being able to use `this` in the definition of `introduceSelf()` enables us to use the same code for every object we create.

This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it. ==A better way is to use a **Constructor**. A Constructor is just a function called using the **'new'** keyword==. When you call a Constructor, it will:

- create a new object
- bind `this` to the new object, so you can refer to `this` in your Constructor code
- run the code in the Constructor
- return the new object.

==Constructors, by convention, start with a **capital letter**== and are named for the type of object they create. So we could rewrite our example like this:

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

// To call Person() as a constructor, we use 'new' keyword:
const salva = new Person('Salva');
salva.name;
salva.introduceSelf();

const frankie = new Person('Frankie');
frankie.name;
frankie.introduceSelf();
```

## Accesing an object (`.` vs `[]` notation)

### Dot notation

The object name (`person`) acts as the ==**namespace** — it must be entered first to access anything inside the object==. Next you write a dot, then the item you want to access — this can be the name of a simple property, an item of an array property, or a call to one of the object's methods. If you have object properties that contains another object, to access these items you just need to chain the extra step onto the end with another dot.

```js
person.age;
person.bio();
person.name.first;
```

### Bracket notation

There is another way to access object properties — using `[]` notation.

```js
// Instead of using dot notation
person.age;
person.name.first;

// You can use bracket notation
person['age'];
person['name']['first'];
```

This looks very similar to how you access the items in an array, and it is basically the same thing — _instead of using an index number to select an item, you are using the name associated with each member's value_. It is no wonder that objects are sometimes called **associative arrays** — they map strings to values in the same way that arrays map numbers to values.

One useful aspect of bracket notation is that it can be used to set ==not only member values dynamically, but member names too==.

```js
// Syntax
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
person[myDataName] = myDataValue;

// Example
const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;
```

> **NOTE**: Adding a property to an object using the method above isn't possible with dot notation, which can only accept a literal member name, not a variable value pointing to a name.

## Modifying an object

You can ==**set (update)**== the value of object members by declaring the member you want to set (using `.` or `[]` notation).

```js
person.age = 45;
person['name']['last'] = 'Cratchit';
```

Setting members doesn't just stop at updating the values of existing properties and methods. You can also ==**create** completely new members==.

```js
person['eyes'] = 'hazel';
person.farewell = function () {
  console.log('Bye everybody!');
};
```

### ES6 enhanced object literals (_properties shorthand syntax_ & _computed properties_)

When we are adding object properties we can use ==properties **shorthand syntax**== and ==**computed** properties==.

```js
const item1 = 'Closet';
const item2 = 'Bed';
const furniture = 'desk';

const item = {
  car: 'Jeep',
  hobby: 'Photography',
  food: 'Hamburger',
  // Old way
  item1: item1, //old way of adding objects

  // ES6 enhanced object literals
  item2, // new way of adding properties (properties shorthand syntax)
  [furniture]: 'Ikea', // computed properties
};
```

## Inheritance

All objects in JavaScript inherit from at least one other object. The object being inherited from is known as the prototype, and the inherited properties can be found in the `prototype` object of the constructor.

## You've been using objects all along

As you've been going through these examples, you have probably been thinking that the `.` (dot) notation you've been using is very familiar. Every time we've been working through an example that uses a built-in browser API or JavaScript object, we've been using objects, because such features are built using exactly the same kind of object structures that we've been looking at here, and more complex ones than in our own basic custom examples.

So when you used string methods like `myString.split(',')` you were using a method available on a `String` object. Every time you create a string in your code, that string is automatically created as an instance of `String`, and therefore has several common methods and properties available on it.

When you accessed the document object model using lines like `const myDiv = document.createElement('div')` you were using methods available on a `Document` object. For each webpage loaded, an instance of `Document` is created, called `document`, which represents the entire page's structure, content, and other features such as its URL. Again, this means that it has several common methods and properties available on it.

The same is true of pretty much any other built-in object or API you've been using — `Array`, `Math`, and so on.

> Note that ==built-in objects and APIs **don't always create object instances automatically**==. As an example, the `Notifications API` — which allows modern browsers to fire system notifications — requires you to instantiate a new object instance using the constructor for each notification you want to fire: `const myNotification = new Notification('Hello!')`

## Summary

You should now have a good idea of how to work with objects in JavaScript — including creating your own simple objects. You should also appreciate that ==objects are very useful as structures for storing related **data** and **functionality**== — if you tried to keep track of all the properties and methods in our `person` object as separate variables and functions, it would be inefficient and frustrating, and we'd run the risk of clashing with other variables and functions that have the same names. ==Objects let us **keep the information safely locked** away in their own package==, out of harm's way.

## References

1. [Introducing JavaScript objects - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
2. [JavaScript Objects - w3schools](https://www.w3schools.com/js/js_object_definition.asp)
3. [JavaScript object basics - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
4. [Working with objects - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
