# Functional Programming Concepts

Functional programming (FP) is ==the process of building software by _composing_ **pure functions**, _avoiding_ **shared state**, **mutable data** and **side-effects**. FP is **declarative** rather than **imperative**, and application state flows through pure functions==, in contrast with Object-Oriented Programming (OOP), where application state is usually shared and colocated with methods in objects.

==FP is a **programming paradigm**, meaning that it is a way of thinking about software construction based on some fundamental, defining principles== (listed above). Other examples of programming paradigms include ==**Object-Oriented Programming**== and ==**Procedural Programming**==.

Functional code tends to be more concise, more predictable, and easier to test than imperative or object-oriented code — but if you’re unfamiliar with it and the common patterns associated with it, functional code can also seem a lot more dense, and the related literature can be impenetrable to newcomers.

The hardest part when you begin to learn FP is wrapping your head around all the unfamiliar vocabulary. There are a lot of ideas in the innocent looking definition above which all need to be understood before you can begin to grasp the meaning of FP:

- Pure functions
- Avoid shared state
- Avoid mutating state
- Avoid side effects
- Function composition

In other words, if you want to know what FP means in practice, you have to start with an understanding of those core concepts.

## Pure functions

A pure function is a function which:

- ==given the same inputs, always returns the same output==
- ==has no side-effects== (the function cannot modify anything outside of itself)

A pure function has no side effects to anything outside of it, and given the same input will always output the same value. ==They **do not change any data passed into them**, but **create new data to return without altering the original**. FP **avoids shared state** — instead relying on immutable data structures and pure calculations to derive **new data from existing data**==.

However, it is not possible to have 100% pure functions. At some point you need to interact with the DOM or fetch an API. Even `console.log` makes a function unpure because it uses the `window` object outside of the function. Fact is ==a program cannot exist without side effects, so the goal of FP is to minimize side effects by isolating them away from the data==.

How do we build the perfect function?

![pure_functions](../../img/pure_functions.jpg)

Build lots of very small, reusable and predictable pure functions that do the following:

- Complete 1 task per function
- Do not mutate state
- Do not share state
- Be predictable
- Be composable, one input and one output
- Be pure if possible
- Return something

## Shared State

**Shared state** is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes. A shared scope can include global scope or closure scopes. Often, in object oriented programming, objects are shared between scopes by adding properties to other objects.

For example, a computer game might have a master game object, with characters and game items stored as properties owned by that object. Functional programming avoids shared state — instead relying on immutable data structures and pure calculations to derive new data from existing data.

The problem with shared state is that in order to understand the effects of a function, you have to know the entire history of every shared variable that the function uses or affects.

Imagine you have a user object which needs saving. Your `saveUser()` function makes a request to an API on the server. While that’s happening, the user changes their profile picture with `updateAvatar()` and triggers another `saveUser()` request. On save, the server sends back a canonical user object that should replace whatever is in memory in order to sync up with changes that happen on the server or in response to other API calls.

Unfortunately, the second response gets received before the first response, so when the first (now outdated) response gets returned, the new profile pic gets wiped out in memory and replaced with the old one. This is an example of a race condition — a very common bug associated with shared state.

Another common problem associated with shared state is that changing the order in which functions are called can cause a cascade of failures because functions which act on shared state are timing dependent:

```js
// With shared state, the order in which function calls are made changes the result of the function calls.
const x = {
  val: 2
};

const x1 = () => x.val += 1;
const x2 = () => x.val *= 2;
x1();
x2();
console.log(x.val); // 6

// This example is exactly equivalent to the above, except...
const y = {
  val: 2
};

const y1 = () => y.val += 1;
const y2 = () => y.val *= 2;
// ...the order of the function calls is reversed...
y2();
y1();
// ... which changes the resulting value:
console.log(y.val); // 5
```

When you avoid shared state, the timing and order of function calls don’t change the result of calling the function. With pure functions, given the same input, you’ll always get the same output. This makes function calls completely independent of other function calls, which can radically simplify changes and refactoring. A change in one function, or the timing of a function call won’t ripple out and break other parts of the program.

```js
const x = {
  val: 2
};

const x1 = x => Object.assign({}, x, { val: x.val + 1});
const x2 = x => Object.assign({}, x, { val: x.val * 2});
console.log(x1(x2(x)).val); // 5

const y = {
  val: 2
};

// Since there are no dependencies on outside variables, we don't need different functions to operate on different variables.
// Because the functions don't mutate, you can call these functions as many times as you want, in any order, without changing the result of other function calls.
x2(y);
x1(y);
console.log(x1(x2(y)).val); // 5
```

In the example above, we use `Object.assign()` and pass in an empty object as the first parameter to copy the properties of `x` instead of mutating it in place. In this case, it would have been equivalent to simply create a new object from scratch, without `Object.assign()`, but this is a common pattern in JavaScript to create copies of existing state instead of using mutations, which we demonstrated in the first example.

If you look closely at the `console.log()` statements in this example, you should notice something  called function composition. Function composition looks like this: `f(g(x))`. In this case, we replace `f()` and `g()` with `x1()` and `x2()`.

Of course, if you change the order of the composition, the output will change. Order of operations still matters. `f(g(x))` is not always equal to `g(f(x))`, but what doesn’t matter anymore is what happens to variables outside the function — and that’s a big deal. With impure functions, it’s impossible to fully understand what a function does unless you know the entire history of every variable that the function uses or affects.

Remove function call timing dependency, and you eliminate an entire class of potential bugs.

## Immutability

==An **immutable** object is an object that **can’t be modified after it’s created**==. Conversely, a **mutable** object is any object which can be modified after it’s created. Immutability is a central concept of FP because without it, the data flow in your program is lossy. State history is abandoned, and strange bugs can creep into your software.

==Immutability is simply **not modifying the original data or state**; instead we should create copies of the state inside our functions and return a new version of the state==.

```js
const obj = { name: 'Brittney' };

// Bad code
function clone(obj) { return {...obj}; }; // this is pure
obj.name = 'Joe'; // mutated the state

// Better code
function updateName(obj) {
    const newObj = clone(obj);
    newObj.name = 'Joe';
    return newObj;
}
const updatedNameObj = updateName(obj);
console.log(`obj = ${obj}`, `updatedNameObj = ${updatedNameObj})
```

You may be thinking that this could get really expensive, memory wise, to just copy code over and over. However, there is something called **structural sharing** that allows the data to only copy new information and points to the original state for any commonalities.

> In many functional programming languages, there are special immutable data structures called **trie data structures** (pronounced “tree”) that no property can change. Tries use **structural sharing** to share reference memory locations for all the parts of the object which are unchanged after an object has been copied by an operator, which uses less memory, and enables significant performance improvements for some kinds of operations. For example, you can use identity comparisons at the root of an object tree for comparisons. If the identity is the same, you don’t have to walk the whole tree checking for differences. There are several libraries in JavaScript which take advantage of tries, including [Immutable.js](https://github.com/facebook/immutable-js) and [Mori](https://github.com/swannodette/mori).

In FP, the idea of immutability is very important. We can change things inside of our function, but we don't want to affect the outside world in our programs. We are simply saying "Hey, this data is not mine. Any data that I receive is not mine. So I'm just going to borrow it and I'm only going to copy and make a new copy of this data so other people can still use this".

> In JavaScript, it’s important not to confuse `const` with immutability. `const` creates a variable name binding which can’t be reassigned after creation. `const` does not create immutable objects. You can’t change the object that the binding refers to, but you can still change the properties of the object, which means that bindings created with `const` are mutable, not immutable. Immutable objects can’t be changed at all.

## Side Effects

A side effect is any application state change that is observable outside the called function, other than its return value. Side effects include:

- Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
- Logging to the console
- Writing to the screen
- Writing to a file
- Writing to the network
- Triggering any external process
- Calling any other functions with side-effects

Side effects are mostly avoided in FP, which makes the effects of a program much easier to understand, and much easier to test. What you do need to know right now is that ==side-effect actions need to be isolated from the rest of your software==. If you keep your side effects separate from the rest of your program logic, your software will be much easier to extend, refactor, debug, test, and maintain. This is the reason that most front-end frameworks encourage users to manage state and component rendering in separate, loosely coupled modules.

## Referential transparency

One important concept of FP is referential transparency, ==the ability to replace a function call with the resulting value without changing the result of the program==.

```js
function a(num1, num2) {
  return num1 + num2;
}

function b(num) {
  return num * 2;
}

b(a(3, 4)); // 14
// a should always return 7 so it could be changed to 7 and the output is the same
b(7); // 14
```

## Idempotence

The idea of idempotence is a function that always returns or does what we expect it to do. Idempotence has the idea that ==given the **same input** to a pure function, you will always return the **same output**==. The function could be used over and over again and nothing changes. This is how you make your code predictable.

What do we care about and idempotence? Well, because this idea of being able to call something a thousand times and always giving you the same result is extremely valuable when it comes to things like parallel and distributed computation, because it makes our code predictable.

## Imperative vs Declarative

==**Imperative** programming tells the computer **what to do** and **how to complete it**. **Declarative** programming **only tells the computer what to do**, but not how to do things==. Humans are declarative by nature, but computers typically need more imperative type programming. However, using higher level languages like JavaScript is actually being less declarative. This is important in FP because we want to be more declarative to better understand our code and let the computer handle the dirty work of figuring out the best way to do something. ==FP is a **declarative paradigm**, meaning that the program logic is expressed without explicitly describing the flow control==.

**Imperative** programs spend lines of code describing the specific steps used to achieve the desired results — the **flow control: How** to do things.

**Declarative** programs abstract the flow control process, and instead spend lines of code describing the **data flow: What** to do. The _how_ gets abstracted away.

FP helps us be more declarative by using functions which is composing functions. We tell our programs what to do, instead of how to do it.

```js
// More imperative
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// More declarative
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(item => console.log(item));
```

**Imperative** code frequently utilizes statements. A **statement** is a piece of code which performs some action. Examples of commonly used statements include `for`, `if`, `switch`, `throw`, etc…

**Declarative** code relies more on expressions. An **expression** is a piece of code which evaluates to some value. Expressions are usually some combination of function calls, values, and operators which are evaluated to produce the resulting value. These are all examples of expressions:

```
2 * 2
doubleMap([2, 3, 4])
Math.max(4, 3, 2)
```

## Reusability Through Higher Order Functions

==FP tends to reuse a common set of functional utilities to process data. OOP tends to colocate methods and data in objects. Those colocated methods can only operate on the type of data they were designed to operate on, and often only the data contained in that specific object instance==.

In FP, any type of data is fair game. The same `map()` utility can map over objects, strings, numbers, or any other data type because it takes a function as an argument which appropriately handles the given data type. FP pulls off its generic utility trickery using Higher Order Functions.

JavaScript has **first class functions**, which allows us to treat functions as data — assign them to variables, pass them to other functions, return them from functions, etc… A **Higher Order Function** is any function which takes a function as an argument, returns a function, or both. Higher Order Functions are often used to:

- abstract or isolate actions, effects, or async flow control using callback functions, promises, etc…
- create utilities which can act on a wide variety of data types
- partially apply a function to its arguments or create a curried function for the purpose of reuse or function composition
- take a list of functions and return some composition of those input functions

## Currying

==Currying is the technique of translating the evaluation of a **function that takes multiple arguments into evaluating a sequence of functions, each with a single argument**==. You can think of currying like this: you take a function that can take multiple parameters and use currying to modify it to a function that takes one parameter at a time.

```js
// Without currying
const multiply = function (a, b) {
  return a * b;
};
multiply(2, 4);

// With currying
const multiply = function (a) {
  return function (b) {
    return a * b;
  };
};
const multiplyByTwo = multiply(2);
const multiplyByFive = multiply(5);
multiplyByTwo(4); // 8
multiplyByFive(4); // 20
```

Why currying is useful? With currying I can now create multiple utilities functions out of `multiply` function.

## Partial application

==Partial application is a way for us to **partially apply a function**. Partial application is the process of producing a function with a **smaller number of parameters**==.

Partial application is expanding on the idea of currying and taking it a step farther by separating a parameter out. If you have more than 2 arguments in a functions, then you can bind one of them to a value to be used later:

```js
const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5); // this is null
partialMultiplyBy5(4, 10); // 200
```

The main difference between currying and partial application:

- partial application, on the second call, expects all the arguments
- currying expects one argument at a time

## Function composition: compose & pipe

==Function composition is the process of **combining two or more functions** in order to produce a new function or perform some computation==. Understanding function composition is an important step towards understanding how software is constructed using the FP.

#### Compose

Composing or composition is the idea that any sort of data transformation that we do should be obvious.

```
data --> fn ---> data --> fn --> ...
```

```js
const multiplyBy3 = number => number * 3;
const makePositive = number => Math.abs(number);

// Composition function
const compose = function (f, g) {
  return function (data) {
    return f(g(data)); // compose is going from left to right
  };
};

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
multiplyBy3AndAbsolute(-50);
```

Using compose we've created our little assembly line where we can ==compose different functions together==, and that's what compose is. The power in compose is now we can compose functions, build them together to add extra functionality, to create that data flow where we take a piece of data, we take it through all the functions, and then finally we have some sort of data that gets outputted, because all those functions are pure and all those functions are composable.

#### Pipe

Pipe is essentially the same thing like compose, except instead of going from right to left, it goes left to right.

```js
const multiplyBy3 = number => number * 3;
const makePositive = number => Math.abs(number);

// Pipe function
const pipe = function (f, g) {
  return function (data) {
    return g(f(data)); // pipe is going from right to left
  };
};

const multiplyBy3AndAbsolute = pipe(multiplyBy3, makePositive);
multiplyBy3AndAbsolute(-50);
```

> **Note**: The Pipeline Operator is in the experimental stage 1 of being introduced to JavaScript. Stage 1 means that it has only started the process and could be years before it is a part of the language. The pipeline operator `|>` would be syntactic sugar for composing and piping functions the long way. This would improve readability when chaining multiple functions.
>
> ```js
> const double = n => n * 2;
> const increment = n => n + 1;
>
> // Without pipeline operator
> double(increment(double(double(5)))); // 42
>
> // With pipeline operator
> 5 |> double |> double |> increment |> double; // 42
> ```

## Arity

Arity simply means the number of arguments a function takes. The more parameters a function has the harder it becomes to break apart and reuse. Try to stick to only 1 or 2 parameters when writing functions.

## Summary

So, is FP the answer to everything? No, but it is great in situations where you have to perform different operations on the same set of data. FP just lays the foundation for creating reusable functions that can be moved around as needed. For example, it is great in areas of industry and machine learning and it is even in some front end libraries like React and Redux. Redux really popularized FP for JavaScript developers.

Now that we've gone through the FP concepts, I hope you understand the idea of going from procedural to FP. At the end of the day, a function without a return statement is just a procedure. FP gave us this idea of pure function, and functions are useful because we limit repetitions. Every time we use a function, it's something that is reusable, we can reuse that function somewhere else. Now, the one benefit of FP that you may have noticed is that it's really, really good at doing one to one data transformations. That is, we have a piece of data and we have functions acting upon it.

The reason that we were able to do FP was because JavaScript makes it easy to assign functions to variables, pass them into other functions, return functions from functions, compose functions, pipe functions. JavaScript also allows us to use immutable concepts like primitive types or using `map()` or `concat()` on arrays, `Object.assign()`, cloning objects using spread operator, and we learned a lot of difficult FP terms, but at the end of the day, all the terms mean is that we're building pure functions and we're trying to have as many pure functions as possible to try and avoid mutating state as much as we can in order to have this clean, predictable code.

The idea with FP is this idea of separation of data and functions, or data and the effects that happen on that data. If you try to perform effects and logic at the same time, the problem is that you may create hidden side effects which cause a lot of bugs, if multiple things in your program handle some piece of data at the same time. Well, that gets really complicated, and it can cause many problems. So the idea in FP of keeping functions small and pure and composable, doing one thing at a time and doing it well. This idea of immutability, the idea that function take inputs and return outputs so that it can be used with other functions, it allows us to have a predictable program where it minimizes bugs because everything is so simple. And as long as we are able to combine these small little functions together, we're able to create really complex programs, these small little pieces that eventually build something like a pyramid, something great.

Functional vs object-oriented, it all depends on the problem you have. There are times when object-oriented programming might be better. You're building a fairy tale game and you have clear objects characters in the game that have some sort of state and that can interact with that state, and others can interact with them as well. Or you have something like an Amazon shopping cart where there's a clear data that needs to get processed.

FP favors:

- Pure functions instead of shared state & side effects
- Immutability over mutable data
- Function composition over imperative flow control
- Lots of generic, reusable utilities that use higher order functions to act on many data types instead of methods that only operate on their colocated data
- Declarative rather than imperative code (what to do, rather than how to do it)
- Expressions over statements
- Containers & higher order functions over ad-hoc polymorphism

## References

1. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
2. [What is Functional Programming? - medium.com](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
