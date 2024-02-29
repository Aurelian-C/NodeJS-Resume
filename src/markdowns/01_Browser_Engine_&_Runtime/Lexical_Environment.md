# Lexical Environment

Lexical environment is simply ==**where** you write code==, because where we write code is important.

A lexical environment is basically the ==scope _or_ environment== the JavaScript Engine is currently reading code in. 

**A new lexical environment is created when curly brackets `{}` are used**, _even nested brackets `{{...}}` create a new lexical environment_. ==The **execution context** tells the JavaScript Engine **which lexical environment it is currently working in**, and the _lexical scope determines the **available variables**_==.

![lexical_environment](../../img/lexical_environment.jpg)

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
two() isValid = null
 one() isValid = true
  global() isValid = false
------------------------
Call Stack
*/
```

What is the first lexical environment that we have? Well, _the very first lexical environment is the **global lexical environment**, where we write our code_.

Lexical simply means where is the code written. Based on where is your code written, when the Compiler or the Interpreter sees your code, it will know different things about that code. With lexical environment (where your code is written), the Compiler, knowing where your code is was written, can decide and make decisions like "Where to put things?" and "What actions to take?" and "What code can have access to that lexical environment?".

In JavaScript, the lexical environment (where you write your data/variables and where the function was defined) determines the available variables.

![lexical_environment1](../../img/lexical_environment1.jpg)

## References

1. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
