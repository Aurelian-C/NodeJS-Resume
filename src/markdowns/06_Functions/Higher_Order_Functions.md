# Higher Order Functions

A programming language is said to have ==**first-class functions** when functions in that language are treated like any other variable==. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable or as properties to an object.

## Functions are objects

In JavaScript, functions are objects. This means **we can pass them around, like objects, like things that contain data**. So besides just doing things for us and performing actions in our code, we can also store them as data, move them around and have some really interesting applications.

There are some things that demonstrates functions are objects:

1. Function not only perform actions for us, but they're also pieces of data that can be passed around like first class citizens, as if there were JavaScript types. So anything you can do with other types, you can do with a function. As a matter of fact, this idea of a first class citizen property in JavaScript introduces JavaScript to a whole world called functional programming.

2. Functions can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.

## Functions are first-class citizen

We talked about how functions can be passed around like data and this idea of a function being passed around, besides just being something that performs actions. Because of this, you'll often hear people say that ==**functions are a first-class citizen in JavaScript**==. What does that mean? Well, it means 3 things.

#### 1. Functions can be ==assigned to variables _and_ properties of objects==

The first thing is that functions can be assigned to variables and properties of objects. In some languages, I can't do that. I can just run functions to perform actions, but that's it. In JavaScript, I can assign functions to a variable or even an object property, which then becomes a method.

```js
const a = function() {}

const b = {
    key: function() {}
}
```

#### 2. We can also pass functions ==as arguments/parameters== into a function (callback function)

```js
function a(fn) {
    fn()
}

a(function() {})
```

#### 3. We can ==return functions as a values from other functions==.

```js
function a() {
    return function b() {
        console.log('Hi there!')
    }
}
a()		//ƒ b() {console.log('Hi there!')}
a()()	//'Hi there!'

// Instead calling a()(), we can assign a() to a variable and call that variable
const d = a()
d()	//'Hi there!'
```

## References

1. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
1. [Higher Order Functions - eloquentjavascript.net](https://eloquentjavascript.net/05_higher_order.html)
1. [First-class Function - MDN](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
1. [Callback function - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
1. [JavaScript Functions → Returning Functions from Functions - medium.com](https://medium.com/@iampika/part-6-javascript-functions-returning-functions-from-functions-429a3d9a55d1)