# Introduction to JavaScript Engine (part 1)

Almost everyone that has worked with JavaScript has heard of the V8 engine, the idea of the JavaScript Engine. You may also hear phrases like JavaScript is an ==**interpreted language**==. What is this engine that we speak of? If I write some code like `const isHappy = true;`, how does the computer read this code?

If I gave to a computer a JavaScript file and I tell it "Read this JavaScript file and do something for me", the computer cannot read the JavaScript file because the computer only understands 1 and 0 at the end of the day. So ==the computer doesn't really know what JavaScript is. So how are we able to communicate using a JavaScript file, so that the computer do something for me? This is the first step in our learning, and that is the JavaScript Engine.==

==By having a JavaScript Engine, it allows you to give to this engine the JavaScript file, and **this engine is going to understand the JavaScript file, and tell the computer what to do**==. JavaScript Engine is a translator between your JavaScript file and your computer, because ==JavaScript Engine understands JavaScript language==. Our computer finally understands our JavaScript file because of this JavaScript Engine.

![javascript_engine](../../img/javascript_engine.jpg)

But do you think there's one JavaScript Engine or many JavaScript Engines? Well, ==there are a ton of engines and they're called **ECMAScript Engines**==. So any time we use an engine, we're able to give it a JavaScript file and this JavaScript file gets understood by the engine, and it allows this engine to communicate and tell the computer to do what we ask it to do with JavaScript.

Now, these engines are written by programmers, for example, ==V8 engine is written in C++==, but why do people write these engines? 2008 marked a really pivotal moment in history when it comes to JavaScript, because V8 was released by Google. Before then, most browsers used engines that were very basic, which meant that JavaScript was a little bit slow. You see, Google had this problem, they had something called Google Maps, and Google Maps, as you know, requires a lot of power, and all the previous engines before V8 would make Google Maps very, very slow on the browser. So with Google Maps and their own Chrome browser, they said, we're going to write our own JavaScript Engine, the V8 engine, so that JavaScript runs way faster on the browser than it's done previously, and in 2008 they released V8.

What's actually happening inside JavaScript Engine when we given to it a JavaScript file? Below is a picture that show you what's happen inside JavaScript Engine. 

![javascript_engine](../../img/inside_js_engine.jpg)

==As long as you understand the principles of a JavaScript Engine and why it's built the way it is, we're going to be able to understand how to **write optimized code**==.

## Interpreters and Compilers

In programming, there are generally ==two ways of **translating to computer language**== or something that our computers can understand. What we're going to talk about actually applies to most programming languages, not just JavaScript. Python, Java, C++, any language you can think of is going to use some of these concepts.

![javascript_engine](../../img/interpreter_compiler.jpg)

Let's start with the first one, the Interpreter. With an ==**Interpreter**==, what we do is we ==translate and read the files line by line==, on the fly. Initially, that's how JavaScript worked. It was interpreting, using an Interpreter.

But what about a Compiler? What's the deal with a Compiler? A ==**Compiler**==, unlike an Interpreter, ==doesn't translate on the fly==. What it does is it ==works ahead of time to create a translation of what code we've just written, and it compiles down to usually a language that can be understood by our computer==.

There are two ways to run JavaScript: using an Interpreter or a Compiler. If I ask you, why would we want to do one over the other? What are the pros and cons on each? Why would you pick one over the other? Let's have a look at the pros and cons of each.

### The Interpreter

First off, ==Interpreters are quick to get up and running==, because ==_with an Interpreter we don't have to convert our JavaScript file into another language like Compiler does_. With Interpreters there's no compilation step before you can start running your code==. You just give your JavaScript file to an Interpreter and the Interpreter starts translating the code line by line. Because of this behavior, an Interpreter is a natural fit for something like JavaScript. A JavaScript file gets sent from the server to the browser and we want that JavaScript file to execute right away, because our users are going to be waiting on the web page trying to interact with our application. And JavaScript originally was created for the browser, so being able to interpret JavaScript and run it as fast as possible, well that was ideal. And this is exactly why JavaScript used Interpreters at the beginning.

But there's a cons with using an Interpreter, and this is the same problem that Google had back in the day when they had Google Maps running a lot of JavaScript. ==The problem with Interpreters is that when you have a lot a JavaScript code or running the same code more than once, for example, if you're in a loop where you are running a piece of code over and over and over, even though that code gives you the same result, it can get really, really slow==. The Compiler actually helps us here.

### The Compiler

The Compiler takes a little bit more time to start up because it has to go through the ==compilation step at the beginning== (go through our code, understand it, and split it out into a another language), but the Compiler will be smart enough that when it sees, for example, a loop that has the same inputs, returning the same outputs, well, it can actually just simplify that loop code. ==These simplifies that Compiler does on some code are called **optimizations**==.

```js
function someCalculation(x,y) { 
    return x + y
}

for (let i = 0; i <= 1000000; i++) {
    someCalculation (5,4)
}

// With a Interpreter, the code above is read and executed line by line, and someCalculation() is executed for 1.000.000 times.

// With a Compiler, the code is read and converted into a "computer language" code, and after that the "computer language" code is executed. With a Compiler, instead of calling someCalculation() 1.000.000 times like Interpreter does, Compiler can just replace someCalculation function with something like 9, because he know that we want to return 9. A Compiler doesn't need to repeat the translation for each pass through in that loop. These sort of edits that Compiler do are called optimizations.
```

> Note: Have you heard of Babel or TypeScript? They are heavily used in the JavaScript ecosystem and you should now have a good idea of what they are:
>
> - [Babel](https://babeljs.io/) is a _JavaScript compiler_ that takes your modern JS code and returns browser compatible JS (older JS code).
> - [Typescript](https://www.typescriptlang.org/) is a superset of JavaScript that _compiles down to JavaScript_.
>
> _Both of these do exactly what compilers do: take one language and convert into a different one_!

So let's go back to that question, Interpreter or Compiler? Which one is better? They both have their pros and cons, ==Compiler obviously takes a little bit longer to get up and running, but the code is going to eventually run faster, or Interpreter that is really fast to get up and running but unfortunately doesn't do any optimizations==. Is there a way that we can get the best of both worlds?

If we use Google with the V8 engine, what if we combine the best of both worlds? What if, instead of using the Compiler and Interpreter, we combine these two and create something called a ==**JIT Compiler** (Just In Time Compiler)== ?

![javascript_engine](../../img/jit_compiler.jpg)

## JIT Compiler (Just In Time)

This is exactly what browsers started doing. ==Browsers started mixing Interpreters and Compilers==, specifically these JIT Compilers, to make the JavaScript Engine faster. So Interpreter allows us to run the code right away, and the ==Compiler and Profiler _optimize some code_ as the _Interpreter is still running_==.  We pass a JavaScript file to the JavaScript Engine and the Interpreter start to read and execute the file line by line. When Interpreter reach at some code, it gives that code to Compiler/Profiler to be optimized (translate that code into a computer language). That's where the JIT Compiler name comes from, Just In Time Compiler, because compiles code when Interpreter still running.

![inside_js_engine1](../../img/inside_js_engine1.jpg)

Why do we just learn all of this? You can write JavaScript without knowing any of this stuff and you'll be fine. Now that we know how the JavaScript Engine works underneath the hood, we can ==write more optimized code==, code that the Compiler can take and run faster than our regular JavaScript. We also can use this knowledge to make sure that ==we don't confuse the Compiler==, *because the Compiler isn't perfect. It can make mistakes and it can try to optimize code that actually does the opposite. And if it makes a mistake and it does something unexpected, it does something called ==**deoptimization**==, which takes even longer time to revert it back to the Interpreter*.

By learning this, we will learn how to write optimized code, so that we help out the Profiler and the Compiler to make sure that we're able to run the fastest code possible. We want to ==write code in a way that helps the **Compiler make optimizations**==, we don't want to work against it and make things slow.

## Is JavaScript an interpreted language?

Is JavaScript an interpreted language? Initially, when JavaScript first came out, you had JavaScript Engines, such as Spider Monkey created by Brendan Eich, that interpreted JavaScript to bytecode, and that JavaScript Engine was able to run inside of our browsers to tell our computers what to do. But things have evolved now. ==We don't have just Interpreters, we also use Compilers to optimize code==.

When somebody says JavaScript is an interpreted language, there is some truth to it, but it actually depends on the implementation. You can make an implementation of the JavaScript Engine that perhaps only compiles, so it all matters depending on implementation.

## References

1. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
