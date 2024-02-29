# Primitive vs Reference Types

In JavaScript, we have two categories or types or of values you could say. So with that, I don't mean strings and numbers because that would be wrong, we also have booleans, objects, null, undefined and so on, but I really mean these data types which you already learned about, so boolean, strings, numbers and objects and so on, these can be categorized into two categories. We have ==**primitive values**== and we have ==**reference values**== and that's an important differentiation which you need to understand.

![primitive_vs_references](../../img/primitives_vs_references.jpg)

## Primitive Types

Now primitive values are these 7 types of data:

- Strings
- Numbers
- Boolean
- `null`
- `undefined`
- Symbol
- BigInt

So every number that you create and which you then store in a variable or which you use in a calculation is created by JavaScript or by the browser behind the scenes as a primitive value. Thus far, that didn't really matter to us and in many cases, it won't matter to you but there will be one important difference to the reference values later.

==Primitives it's stored in memory, normally on the Call Stack== because normally these are relatively short living because JavaScript can get rid of them relatively easy, they're cheap to be recreated so it can easily duplicate them, this doesn't cost too much, not much memory is consumed by these values in the end and therefore, they're typically stored in the Call Stack memory. Now, if you keep that picture in mind with the Call Stack where function calls are pushed on top of each other, remember that I called the stack concept for managing execution contexts, well you could say each function there has its own execution context, right? The overall script has some global variables maybe which are part of that anonymous execution context, another function which has an internal variable has its own execution context. ==So **primitive values typically are stored in the Call Stack**. I'm saying typically because **they could be stored in the Memory Heap as well if it's a long running operation** and in the end, it's the browser which decides which data ends up where==. It actually doesn't even matter for what I'm explaining here, I just want to briefly mention it here that these primitive values are generally managed in the Call Stack.

More important to us and ==the key difference between primitive and reference values is that when you copy a variable that holds a primitive value, which means you assign it to a new one, then _the value is actually copied_==.

```js
let name1 = 'Max';
let name2 = name1; // the value 'Max' is actually copied

name1 = 'Manuel';

console.log(name1); // Manuel
console.log(name2); // Max
```

## Reference Types

So we see the behavior of storing a primitive value in a variable. Now you can probably guess what behavior for reference values will be, but let's still have a look what are reference values to begin with? Well, all other objects or generally, all objects in JavaScript.

Now technically if you want to be really correct, ==string, numbers and so on are not objects, but are _dynamically transformed to pseudo objects_ you could say when you do something like `name1.length`==. This gives you the length of the `name1` and with the `.` notation, it kind of implies that we're accessing a property of `name1`, which then in turn implies that `name1` would be an object but it actually isn't, it's a bit more complex than that and we don't need to dive in all the internals here, but in the end what happens is ==**JavaScript dynamically transforms a string or a number, so any primitive value to an object temporarily if you use the dot notation on it**== but other than that, it's a primitive value and it's always behaving as a primitive value, no matter if you're temporarily transforming it or not.

```js
const name1 = 'Aurelian';
name1.length //JavaScript dynamically transforms a string or a number, so any primitive value to an object temporarily if you use the dot notation on it
```

Now all real objects which always stay ==**objects are handled differently**== because they're more expensive to create you could say. A real object which you create on your own or which might be built into the browser and exposed to you, like that `Math` object where you can called the `.random()` method, well _these objects as you can imagine hold a bit more data than just a couple of characters or just a single number, they're more complex to manage and therefore creating them takes longer, occupies more memory and so on. Therefore the browser typically stores these in the Memory Heap_ but again, the exact allocation logic is something the browser is responsible for, not you or JavaScript but that's what the browser does and important, ==**a variable that stores a real object only stores a pointer, so the address of that place in memory and not the value itself**==.

> **Note**: For primitive values, a variable really stored the value itself in it, for reference values that's not the case and instead the value is stored somewhere in memory, somewhere in the Memory Heap, and the variables stores the address of that place in memory, so a pointer at this place a memory you could say. Therefore if you copy a variable which holds a reference value, so if you assign it to a different variable, you only copy the pointer, the reference, and not the value itself.
> ![primitive_vs_references1](../../img/primitives_vs_references1.jpg)

Now what's the implication of storing a value itself and storing a reference value? We see an example below:

```js
let hobbies = ['Sport'];
let newHobbies = hobbies;
console.log(hobbies); // ['Sport']
console.log(newHobbies); // ['Sport']
// Thus far you could think that the value of hobbies variable was copied in the newHobbies but with reference types thing are quite differently

hobbies.push('Cooking');
console.log(hobbies); // ['Sport', 'Cooking']
console.log(newHobbies); // ['Sport', 'Cooking']
// If we modify the hobbies array we see that the newHobbies is also modify even though we never touched newhobbies. This behavior exist because when we assigned hobbies to newhobbies we only copied the pointer, we only copied the address of hobbies array. So the element itself, the value, the array itself ( ['Sport'] ) was never duplicated or copied. Instead we only copied the address and that means if we change one array, we automatically change the other array because there is nothing like one and the other array, there only is exactly one array in memory and then both variables hold the same pointer at that place in memory.
```

It's the same for objects by the way:

```js
let person = { age: 30 };
let anotherPerson = person;

anotherPerson.age = 32;

console.log(person); // {age: 32}
```

Now what can we do about that? Well in general, you don't need to do anything about that, that is a default behavior for a good reason, to ==avoid unnecessary duplication of data, to avoid cluttering your memory, to be more efficient, provide better performance and so on== but of course you sometimes have cases where you need to copy data, where you need to store it somewhere else and where you want to make sure that if you edit the "copied" in, because you're not really copying it, so when you're editing the copied data, that the original data isn't modified.

### How can you copy the actual value?

Now that we know that we only copy the pointer - how can we actually copy the value behind the pointer? The actual object or array?

You basically need to **construct a new object or array** ( {} or [] ) and immediately fill it with the properties or elements of the old object or array. By creating a new object or array you will have a new pointer, a new address in the memory.

```js
const person1 = { age: 30 };
const person2 = { ...person1 }; // By creating a new object you will have a new pointer, a new address in the memory that differs from the person1 address

const array1 = ['Sport', 'Cooking'];
const array2 = [...array1]; // By creating a new array you will have a new pointer, a new address in the memory that differs from the array1 address
```

### Strange Behavior of Reference Types

So now that we covered reference and primitive types, we can also dive in to something else which we already see but where we had no great explanation of why that was happening.

```js
const person1 = { age: 30 };
const person2 = { age: 30 };

person1 === person2; // false
```

This behavior above makes a lot of sense, because keep in mind that what we actually stored in `person1` and `person2` is a pointer at a place in memory and these are ==**_two totally different objects, even though they hold the same data_**==, but they are ==**_two different distinct objects stored in different places, so at different addresses in memory_**==.

Since `person1` _stores a different address than the_ `person2`, we have two different addresses and therefore if we compare `person1` to `person2`, _what we effectively compare is whether the address of_ `person1` _is equal to the address of_ `person2` _and that is not the case_. This is why we get the false result and this is why they're not equal, because of that reference type thing, and it's the same for comparing arrays.

Another important implication which also can be confusing when you work with reference types is this one:

```js
const hobbies = ['Sport'];

hobbies.push('Cooking'); // ['Sport', 'Cooking']
```

Would you expect that this code above works? Keep in mind that `hobbies` is a constant so we can't change the value after it has been created. Well you might expect an error therefore but we get no errors and if I have a look at `hobbies`, we see `cooking` was added. So how does that work?

Well again keep in mind, `['Sport']` array gets created somewhere in memory and _what's getting stored in_ `hobbies` _variable is the address of_ `['Sport']` because arrays are objects, so the address is getting stored in `hobbies` constant, not the array itself. Now when we call `hobbies.push('Cooking')`, we certainly do manipulate the data in memory but what don't we manipulate? The address, it's still the same address. **The data in memory changed but it's still at the same address**, _maybe more memory was allocated to it, that's something the browser does but we don't care, we don't care if more memory was allocated, the address is the same_.

So in `hobbies` constant, the value never changed because the value in `hobbies` is the address of `['Sport']` array and the address didn't change, just the data behind the address but that's not what's getting stored in `hobbies` constant, therefore we can change `hobbies` constant like `hobbies.push('Cooking')` without getting an error.

It's different if we try to assign a new array like `hobbies = ['Sport', 'Running']`. If I try to do that, I will get an error, why? Because we used the equal sign and that means we try to assign a new array. Now of course as you learned, the array will never really be stored in there but what matters is that we do indeed create a brand new array, which means a brand new place in memory, a brand new address and therefore Javascript tries to store a brand new address in `hobbies`. So now the value of `hobbies` would get changed and that indeed is not allowed because it's a constant.

So using constants with a single equal sign to assign a new value is never allowed but changing the objects which might be stored in them, that is allowed as long as you use something like `push` method.

Now of course, you can't change primitives stored in constants because these are not stored in memory and there is no address stored in the constant but instead the real value is stored in it but for objects and arrays, this works.

###### Another example

```js
const person = { age: 32 };
person.age = 40;
```

You could argue that I am using the single equality operator, so the assignment operator but I am using it on `age` property, not on `person` object. I'm not saying `person = 40` , that would fail if I set `person` to a new value/object, this would fail but I'm setting `age` property inside of the `person` object to a new value, not `person` object itself. So I'm only setting a part of the data stored in memory to a new value just as we did it with the `hobbies` array, and therefore the data in memory certainly changes, the address does not and therefore the address stored in the constant `person` also does not change.

I'm really emphasizing this because it is such a crucial concept and that can lead to a lot of confusion. Constant, arrays and objects which suddenly change are a common source of confusion and the same is true for data which you change in place A and it suddenly also changes in place B because people forgot or never were aware that there is something like reference values which really matters a lot because it explains all that behavior. So this is a must know when you work with Javascript and I hope that these lectures really made it clear what primitive values and reference values are, how they work, how they behave, why they are important, why they are useful and how you work with them.

## Primitives vs Objects

It might not have been obvious yet but it's also important to recognize that, in the end, ==objects are of course made up of primitive values==.

Here's an example:

```js
const complexPerson = {
  name: 'Max',
  hobbies: ['Sports', 'Cooking'],
  address: {
      street: 'Some Street 5',
      stateId: 5,
      country: 'Germany',
      phone: {
          number: 12 345 678 9,
          isMobile: true
      }
  },
};
```

Event though `complexPerson` has multiple nested reference values (nested arrays and objects), you end up with primitive values if you drill into the object.

- `name` holds a string (`'Max'`) => **Primitive value**
- `hobbies` holds an array (i.e. a reference value) which is full of strings (`'Sports'`, `'Cooking'`) => **Primitive values**
- `address` holds an object which in turn holds a mixture of primitive values like `'Some Street 5'` and nested objects (`phone`), but if you dive into `phone`, you find only numbers and booleans in there => **Primitive values**

So you could say: ==**Primitive** values are the **core building blocks** that hold your data, **objects (and arrays)** are helpful for **organizing** and **working** with that data==.

## Pass by value vs Pass by reference

==**Primitive**== - Primitive values are defined by being ==immutable==, they cannot be altered. _The variable assigned to a primitive type may be reassigned to a new value, but the original value can not be changed in the same way objects can be modified_. ==Primitives are **passed by value**, meaning their values are copied and then placed somewhere else in the memory. They are also **compared by value**==.

==**Non Primitive**== - The only type that leaves us with is objects. ==Objects are able to be **mutated** and their properties are **passed by reference**==, meaning their properties are not stored separately in memory. _A new variable pointing to an object will not create a copy, but reference the original objects location in memory_. Therefore, changing the 2nd object will also change the first.

There are two ways to get around this, `Object.assign()` or use the spread operator `...` to spread or expand the object into a new variable. By doing this, it will allow the new variable to be modified without changing the original. However, these only create a "shallow copy".

```js
const originalObj = { // originalObj points to location 1 in memory
  key: 'value',
  nested: {
    nestedKey: 'nestedValue',
  },
};

const assignObj = originalObj; // assignObj will point to 1 in memory

const shallowCopyObj = { ...originalObj }; // shallowCopyObj points to a new location 2, but references location 1 for the nested object

const deepCopyObj = JSON.parse(JSON.stringify(originalObj)); // deepCopyObj clones all parts of the object to a new memory address
```

> **Shallow copy**: Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.
>
> **Deep copy**: A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

==**Each object has its own reference location in memory, even is a nested object**==.

```js
const originalObj = { //originalObj has its own reference in memory
  key: 'value',
  nested: { //nested has its own reference in memory, totally different than originalObj
    nestedKey: 'nestedValue',
  },
};
```

## Compare two objects for equality

If you try to check if 2 objects with the same properties are equal with `obj1 === obj2`, it will return `false`. It does this because each object has its own address in memory as we learned about. The easiest way to check the contents of the objects for equality is this:

```js
JSON.stringify(obj1) === JSON.stringify(obj2);
```

This code above will return `true` if all properties are the same.

## References

1. [JavaScript - The Complete Guide (Beginner + Advanced) - Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/)

2. [Reference vs Primitive Values - academind.com](https://academind.com/tutorials/reference-vs-primitive-values)

3. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
