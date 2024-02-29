# Variable Environment

We learned that in the Call Stack can be many execution contexts (global & function), but you might be asking yourself, what about variables that are created inside of these individual execution contexts? They all technically live in our JavaScript Engine memory, but ==they need to know **how they relate to one another**==. Some functions have access to their certain variables and some don't.

![variable_environment](../../img/variable_environment.jpg)

Remember what I said in the [Lexical Environment article](https://javascript-resume.netlify.app/src/markdowns/01_browser_engine_&_runtime/lexical_environment)? You can think of each execution context like its own little planet, its own little universe. These worlds don't really communicate with each other, or know of each other.

![lexical_environment](../../img/lexical_environment.jpg)

Remember from Lexical Environment article that where you write code is important? And the ==Lexical Environment (where you write your data/variables and where the function was defined) determines the **available variables**==.

```js
function one() {
  let isValid = true; // local environment
  two(); // new execution context
}

function two() {
  let isValid = null; // local environment
}

let isValid = false; // global environment

one();
/*
two() isValid = null          function two() execution context
 one() isValid = true           function one() execution context
  global() isValid = false        global execution context
------------------------
Call Stack
*/
```

Keep in mind that ==**each execution context (global/function) has its own variable environment**==.

## Scope Chain

Each function execution context has a link to its outside world or a link to its parent. Each execution context that is created has a link outside of its lexical environment, called the scope chain. ==The scope chain gives us **access to variables in the parent environment**==.

![lexical_environment_and_scope_chain](../../img/lexical_environment_and_scope_chain.jpg)

This outer environment depends on where the function sits lexically, lexically means where the function is written.

==Functions only get **access to the variables in their parent container, not a child**==. _The scope chain only links down the Call Stack, so you almost have to think of it in reverse. It goes up to the parent, but down the Call Stack_.

```js
function sayMyName() {
  var a = 'a';
  console.log(b, c); // returns error
  return function findName() {
    var b = 'b';
    console.log(a); // a
    console.log(c); // returns error
    return function printName() {
      var c = 'c';
      console.log(a, b); // a, b
    };
  };
}

sayMyName()()(); //each function is returned and has to be called
```

Because of Lexical Environment we know what environments/contexts are linked to each other, and we know what data can be accessed by which function.

We learned that the ==**global scope is the outermost scope**==, so _variables declared outside a function are in what we call global scope and they can be access in any other scope that is inside of the functions, we can always access global scope_. Now, ==**local scope** is any scope that is **local to a function**==, now ==**variables declared in the local scope are accessible within this scope, as well as any scopes surrounding it**==.

_Scope just **defines the accessibility of variables in the code**, it tells us what we can access, what we can not_.

## Function Scope vs Block Scope

Remember, scope means what variables we have access to, and JavaScript has **function scope**, right? Every time we create a function, we create a new execution context which has its own variable environment. But you see, most other programming languages have something called **block scope**. So what's the difference?

```js
// Function scope
function a(5 > 4) {
    var secret = '12345' //variables created with var are only function scoped, not block scoped
};
secret;  //Reference error
// Well, in this case with function scope, we can't access the 'secret'.

// Block scope
if (5 > 4) {
    var secret = '12345' //variables created with var are only function scoped, not block scoped
};
secret;  //12345
```

==Most programming languages are block scoped, meaning every time you see a new `{}` (curly braces) is a new lexical environment. However, **JavaScript is function scoped**, meaning it only creates a new local environment if it sees the keyword `function` on the global scope. **To give us access to block scope, in ES6** `let` **and** `const` **were added to the language**==.

```js
// Variables declared with var are NOT BLOCK SCOPED
if (5 > 4) {
    var secret = '12345' //variables created with var are only function scoped, not block scoped
};
secret;  //12345

// Variables declared with let/const are ARE BLOCK SCOPED
if (5 > 4) {
    let secret = '12345' //variables created with let/const are block scoped
};
secret;  //Uncaught ReferenceError: secret is not defined
```

So to review, ==**block scoping means declaring a variable not just inside a function, but around any curly brackets** `{}`, like `if` statements or loops. Only variables declared with ```let``` or ```const``` are block scoped, variables declared with ```var``` are only function scoped (no block scoped)==.

## Leakage of Global Variables

Below we had an example of what is called leakage of global variables.

Where do you think the ```height``` variable is located? Is ```height``` being created in the variable environment of ```weird``` function? Well, no.

```js
function weird() {
  height = 50;
}

weird() // 'weird' function looks at his own variable environment and sees that the 'height' variable is not defined there. Because 'height' is not defined with let, const or var keywords (let, const or var keywords tell JavaScript to put variables in our variable environment), 'weird' function go to the global scope environment for 'height' and global scope environment says: "Is there such a thing as a height? Nope, I don't have 'height'". But it's not throwing an error, is it? And that's because the global environment actually sees that 'height' doesn't exist and will create it for you.
// Adding 'use strict' to the file prevents leakage of global variables and throwing an error.
```

_Is `height` being created in the variable environment of `weird`? Well, no, and that's because JavaScript is a little bit weird here. This is actually called **leakage of global variables**, because what JavaScript does underneath the hood is that it looks at `height`, it says "This isn't in my nothing's been declared. I haven't seen a `var` or a `const` or a `let` keyword, so I don't have it". Those keywords (`var`, `let`, `const`) tell JavaScript to put those in our variable environment, but it's not there. So it's going to go up the scope chain to the global environment and says "Hey, is there such a thing as a `height`?". And the global environment is going to say "No, I don't have it", but it's not throwing in the air, is it? And that's because the global environment actually sees that this doesn't exist and will create it for you_.

This is something that in the past with JavaScript you could do and it caused a lot of problems, so now we have something like `use strict`. That if I add `use strict` to the top of a page, `use strict` was introduced as a way to prevent JavaScript for doing these weird, unpredictable edge cases, because JavaScript was written by a programmer and there's no such thing as a perfect programming language or a perfect program, and `use strict` allows us to avoid these pitfalls that shouldn't happen.

As soon as I used `use strict`, it's going to throw an error that says "```height``` is not defined!", because it's going to go up the scope chain and it's going to say "No, you've never really declared this variable. I have no idea what you're talking about".

```js
var heyhey = function doodle() {
  return 'heyhey';
};

heyhey(); // 'heyhey'
doodle(); // Error! because it is enclosed in its own scope.
```

## Polutting the global namespace & variable collisions

Global variables are bad! They can cause a lot of issues. 

One of the issue with global variables is what we call ==**polluting the global namespace**==, ==having too much data/variables on our global execution environment==. Remember, we have limited space, limited memory. We talked about how memory leaks happen when we just have too much stuff in our Memory Heap that eventually it just overflows, making things slower and slower and slower until our browsers crash. ==One of the main ways that we have memory leaks is with global variables==.

Another issue with global variables are ==**variable collisions**==.

```html
<!DOCTYPE html>
<html >
  <head>
    <title></title>
  </head>
  <body>
    <script>
        var z = 1 //variable collisions
        function a() { return 5; } //variable collisions
      </script>
    <script>var zz = 1</script>
    <script>var zzz = 1</script>
    <script>
        var z = 1000 //variable collisions
        function a() { return 'hahaha'; } //variable collisions
      </script>
  </body>
</html>

console.log(z) // 1000
a() //'hahaha'
```

Variable collisions is when we have the same variable/s in multiple scripts, everything gets bunched up together, everything is on the global execution context, and if there's any ==duplicates variables (variables with the same name) overwrite each other==.

How do we solve these issues? With modern JavaScript, we have things like ==JavaScript **Modules**== and ==**module bundlers**==. But before we had those things, JavaScript developers used what we know now about the language itself to avoid this global variable issue and it's called ==**Immediately Invoked Function Expressions (IIFE)**==.

The idea behind IIFE is we can place all library code inside of a local scope (function scope), to avoid any variable collisions.

```js
// IIFE
(function() {
    // Library code here...
})()
```

```js
<!DOCTYPE html>
<html >
  <head>
    <title></title>
  </head>
  <body>
    <script src="jquery-3.6.0.min.js"></script>  //we'll have access to the jQuery library
    <script>
        var z = 1 //variable collisions
        const script1 = (function() { //avoid variable collisions with IIFE
            function a() { return 5 }
            return { a: a }
        })()
      </script>
    <script>var zz = 1</script>
    <script>var zzz = 1</script>
    <script>
        var z = 1000 //variable collisions
        function a() {
            return 'hahaha';
        }
      </script>
  </body>
</html>

jQuery.each()
script1.a() //5
a() // 'hahaha'
```

With IIFE we still create the ``` script1``` global variable, but the good thing is that we can just have one variable, and this variable can be an object that contains many properties that we might want to use, and ==it only pollutes the global namespace _once_==. 

For example, libraries like jQuery used to do IIFEs a lot. Inside of the jQuery library there are a ton of functions, a ton of variables, but inside it they can just create an IIFE and just expose for us only the jQuery object that we can use. Although it has many variables inside of it, with the help of IIFE the jQuery library only pollutes the global namespace once, with jQuery object. And we can access all the variables (only variables that jQuery exposes to us) inside of jQuery library through jQuery object.

As we start to get _more and more JavaScript script files_, we want to make sure that we can wrap things in a function to scope things into their own environments, and minimize the amount of data that we place on the global execution context.

## References

1. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)