# Prototypal Inheritance on Built-In Objects

Prototypal Inheritance is a **mechanism for reusing code**. So all of built-in array methods have to exist only once somewhere in the JavaScript engine and then all the arrays in our code get access to the functions through the prototype chain and prototypal inheritance.

```js
const arr = [1, 2, 3, 4, 5, 7, 2, 3]; // [] = new Array()

arr.__proto__ === Array.prototype; //true; So one more time, the prototype property of the constructor is gonna be the prototype of all the objects created by that constructor.

arr.__proto__.__proto__; //Object.prototype
```

**Extending the prototype of a built-in object is generally not a good idea**.

- The first reason is that the next version of JavaScript might add a method with the same name that we are adding, but it might work in a different way and so your code will then use that new method which, remember, works differently and then that will probably break your code.
- The second reason why you shouldn't do this is because when you work on a team of developers, then this is really gonna be a bad idea because if multiple developers implement the same method with a different name, then that's just going to create so many bugs that it's just not worth doing this.

```js
Array.prototype.unique = function () {
  // we added a new method to the prototype property of the array constructor. And so therefore now all arrays will inherit this method.
  return [...new Set(this)];
};
```

```js
console.dir(x => x + 1); // THE FUNCTION ITSELF IS ALSO AN OBJECT and this is the reason why we can actually call methods like bind() on functions. It's because they are objects and objects have prototypes.
```

References

1. [Object prototypes - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
