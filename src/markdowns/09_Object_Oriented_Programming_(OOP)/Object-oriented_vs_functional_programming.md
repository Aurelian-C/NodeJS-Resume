# Object-oriented vs functional programming

Object-oriented and functional programming are both paradigms and a programming paradigm is a way to writing code compliant with a specific set of rules. For example, organizing the code into units would be called object-oriented programming (OOP), avoiding side effects and writing pure functions would be called functional programming (FP).

In OOP an object is a box containing information and operations that are supposed to refer to the same concept, we're grouping it as an object. These pieces of information inside of the object are called attributes or state, and the operations that can happen on this state are known as methods.

In FP the code is essentially a combination of functions, and data is immutable, which leads to writing programs with no side effects and pure functions, because in a functional programming paradigm a function cannot change the outside world, and the output value of a function simply depends on the given arguments.  This allows FP to really have control over a program flow.

OOP paradigm is based on four pillars: 

- abstraction
- encapsulation that allows us to encapsulate ideas that are related together in objects. Encapsulation helped us hide irrelevant data from the user
- inheritance
- polymorphism

In FP we learned that it's all about the idea of pure functions and composing functions to act upon that data.

## OOP vs FP: Inheritance vs Composition

Inheritance is a superclass that is extended to smaller pieces that add or overwrite things.

```js
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    
    attack() {
        return `attack with ${this.weapon}`;
    }
};

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
};

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    
    enrage() {
        return `double attack power`;
    }
};
```

Composition is smaller pieces to create something bigger. We've seen that before with compose functions.

```js
const multiplyBy3 = number => number * 3;
const makePositive = number => Math.abs(number);

// Composition function
const compose = function(f, g) {
    return function(data) {
        return f(g(data));
    };
};

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
multiplyBy3AndAbsolute(-50);
```

The debate between composition vs inheritance is a pretty heavy one, and a lot of people prefer composition over inheritance. So I wanted to talk to you about some of the problems that might come with inheritance and how composition might solve some of those problems.

The first thing that we want to keep in mind when we talk about inheritance, the structure of our code is around ==**"What it is?"**==. That is what is the `Character` class, what is the `Elf` class? ==We're structuring our classes around what things are==, they have data and methods that act upon that data. With composition, on the other hand, ==we focus and structure our code around **"What it has?"** or "What it does to data?"==.

## Object-oriented problems

When we define something as what it is, we're saying  "`Character` is going to have these properties and methods, `Elf` is going to have these properties and methods and `Ogre` is going to have these properties and methods". When we define our objects/classes as what it is, we are saying that this is what's going to happen. With OOP we define our objects/classes based on the fact that they won't change, but what if in the future we change our objects/classes? 

==One of the drawbacks to OOP paradigm and inheritance is that it is **based on the fact that it won't change**, we create a class based on what it is== and give it properties and methods that describe what the class is. But say, down the road, we need to update that class and add more functionality. Adding a new method to the base class will create rippling effects through your entire program. 

==**FP is more declarative**, _what to do, not how_, and **OOP is more imperative**, _what and how to do_ something==. OOP, because of inheritance, have a problem called ==**tight coupling** problem==. Coupling between a child class and its parent class is a very tight form of coupling, classes having to depend on one another leads to the ==**fragile base class** problem==. Fragile base class problem is the behavior of seemingly safe changes on a parent class cause unforeseen repercussions on a child subclasses. Because of inheritance, changing one small thing in either of the class or subclasses could break the program. This idea of a tightly coupled inheritance where you can change things in one place and it will have rippling effects into the other can be a benefit but can also cause a lot of problems. With tightly coupled inheritance you have all these dependencies where if you change something on a class you have to make sure that it doesn't break anything with its subclasses. Tight coupling and fragile base class is the opposite of small reusable code.

Another problem because of OOP inheritance is ==**hierarchy**== where you may need to create a subclass that can only do one part of the base class, but instead you get everything passed down to it from that base class.

The fact that all in OOP is so tightly coupled and we inherit everything from our class, and we have to make sure that we structure our application in a way where inheritance makes sense, as soon as something changes and our application gets bigger and bigger, it creates more and more issues.

==Composition is probably a better tool to use when creating programs because it creates a more stable environment that is **easier to change in the future**==.

If we know that some of this inheritance principles are bad, how can we fix it with composition?

```js
// With OOP paradigm
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    
    attack() {
        return `attack with ${this.weapon}`;
    }
};

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
};
```

```js
// With FP paradigm
function getAttack(character) {
    return Object.assign({}, character, {attack: () => {}})
};

function Elf(name, weapon, type) {
    let elf = { name, weapon, type};
    return getAttack(elf);
};
```

With FP paradigm we've turned the inheritance model from what the `Elf` is to what the `Elf` does.

The key is to decide which structure is better for your project. You can use ideas from both of these styles to write your code. React uses OOP in class components to extend inheritance and then uses FP in the pure components.

## Object-oriented vs functional

Functional programming is based on different concepts. We have Higher Order functions, pure functions, referential transparency and in functional programming functions are first class citizens. In functional programming, we learned that it's all about the idea of pure functions and composing functions to act upon data. In a functional paradigm functions manipulate data structures like arrays and objects, and things like composition are used a lot more than loops and iterations and `if` statements, that are more procedural.

In object-oriented programming objects are first class citizens. In object-oriented programming we had abstraction, we had encapsulation, where it allows us to encapsulate ideas that are related together in objects, it helped us hide irrelevant data from the user. We learned about inheritance and then we learned about polymorphism.

Although some languages prefer one over the other in terms of programming paradigms, languages like JavaScript allow you to do both, which in my opinion is extremely wonderful because you can pick the solution to your own problem.

## Summary

Inheritance is a superclass that is extended to smaller pieces that add or overwrite things. Although you can be careful with it and making sure that the base class is very general so that we don't overload our subclasses, it can easily get out of hand as we go deeper and deeper down the inheritance chain and once we need to change something it becomes really difficult.

On the other hand, with composition, it's about smaller pieces that are combined to create something bigger. We combine the boxes (functions) based on what we need to create our desired output, and if we need to add something later on, well, we just add another puzzle by composing things together, or we add another box (function) and composing things, or even remove them if we don't need them anymore.

![composition_vs_inheritance](../../img/composition_vs_inheritance.jpg)

A lot of programmers argue that composition is a better solution long term than inheritance. This doesn't mean that inheritance is always bad. There are ways that you can still write great code with inheritance, but the problems that might come up in the future, especially with so many unknowns and humans unable to predict the future and all the changes that we might need to make to our application, it becomes really difficult. So composition is a good tool for you to use to keep in mind when creating software, because this is going to help us create code that is more stable, as well as easier to change in the future.

Functional vs object-oriented, it all depends on the problem you have. In all programs there are two primary components: the data and the behaviors. Object-oriented programming says "Hey, bring together the data and the behavior in a single location called object or class", this is going to allow us to understand our program easier and be more organized. Functional programming says "That data and behavior are distinctly different things and should be kept separate for clarity".

## References

1. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)

