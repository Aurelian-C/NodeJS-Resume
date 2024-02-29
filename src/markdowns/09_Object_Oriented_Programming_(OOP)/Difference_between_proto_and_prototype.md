# What is the difference between `__proto__` and prototype?

## An explanation of prototype

Apple recently released its new iPhone, the iPhone 11. That phone has certain qualities — for example, Face ID and 4K video. Every iPhone 11 that is produced must have those exact same features.

Now, let’s assume that there’s a constructor function that produces a new iPhone 11 every time it’s called. In order to properly build an iPhone 11, a *prototype* — a model of an iPhone 11 to refer to — is needed. This prototype or model ensures that *every* iPhone has Face ID, that every iPhone can take 4K video. Thus, the iPhone constructor must know and have access to the prototype that it must build. This is the constructor’s *prototype* property.

```js
function iPhone() {}; // constructor

iPhone.prototype.faceID = function() { ... }; // a method for recognizing faces
iPhone.prototype.video = function() { ... }; // a method for taking 4k video
                                     
let newPhone = new iPhone(); // an iPhone 11
```

## The relationship between `__proto__` and prototype

I’ve now made a new iPhone 11, and saved it in a variable called `newPhone`. The contents of `newPhone `will look something like this:

![proto_vs_prototype](..\..\img\proto_vs_prototype.png)

So it seems like this new iPhone 11 comes with `FaceID` and `video`! In fact, you can execute `newPhone.faceID()` or `newPhone.video()` and see that these methods work fine. However, why are these features stored in an object called `__proto__`, and not stored directly as properties of `newPhone`?

==`__proto__` is an object in every class *instance* that points to the prototype it was created from==. Here, `newPhone.__proto__` is a reference to `iPhone.prototype`, and thus holds the exact same contents as well. By having a `__proto__` property identical to `iPhone.prototype`, `newPhone` is essentially saying, “Look, since I’m an iPhone 11, I have the exact same features as any other iPhone 11! I’ve got Face ID, 4K video, you name it.”

==In reality, the only *true* difference between prototype and `__proto__` is that the former is a property of a class **constructor**, while the latter is a property of a class **instance**==. In other words, while `iPhone.prototype` provides a blueprint for building an iPhone, `newPhone.__proto__` affirms that the iPhone has indeed been built according to that specific blueprint.

Lastly, you might be wondering about the meaning of `__proto__`: Object in the last line. That’s there because `newPhone.__proto__` is actually a JavaScript object, and JavaScript objects are also built according to a specific “blueprint”. In this example, `newPhone.__proto__.__proto__` refers to `Object.prototype`, which is the prototype or blueprint that all JavaScript objects are based on.

## References

1. [What is the difference between prototype and `__proto__` in JavaScript? - Andrew Chung](https://javascript.plainenglish.io/proto-vs-prototype-in-js-140b9b9c8cd5)