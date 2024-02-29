# Introduction to Arrays

## What is an array?

Arrays are a way of ==storing a **list of data** items under a single variable name. Arrays are **collections of data** which are **ordered** by an **index** value==.

Arrays are generally described as "list-like objects"; they are basically ==**single objects that contain multiple values stored in a list**==. Array objects can be ==stored in variables== and dealt with in much the same way as any other type of value, the difference being that we can ==access each value inside the list individually==, and do super useful and efficient things with the list, like loop through it and do the same thing to every value.

==If we didn't have arrays, we'd have to store every data item in a separate variable==. This would be much longer to write out, less efficient, and more error-prone.

JavaScript does not have an explicit array data type. However, you can use the predefined `Array` object and its methods to work with arrays in your applications. The `Array` object has ==**methods for _manipulating_ arrays**== in various ways, such as joining, reversing, and sorting them. It has a `length` property for determining the array length and _other properties for use with **regular expressions**_.

## Creating arrays

![creating_arrays](../../img/creating_arrays.jpg)

The following statements create equivalent arrays:

```js
// Array literal notation
let arr = [element0, element1, ..., elementN]

// Array constructor
let arr = new Array(element0, element1, ..., elementN)
let arr = Array(element0, element1, ..., elementN)

// Array.from() method
const arr = Array.from('array') // ['a', 'r', 'r', 'a', 'y']
```

==`element0, element1, ..., elementN` is a **list of values** for the array's elements==. When these values are specified, the array is initialized with them as the array's elements.

Arrays can be created with the shorthand syntax of ==square brackets `[]`== and items that are ==separated by commas `,`==. The bracket syntax is called an ==**array literal**== or **array initializer**. It's shorter than other forms of array creation, and so is ==generally preferred==.

```js
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
```

In the above example, each item is a string, but in an array ==we can store **various data types**== — strings, numbers, objects, functions and even other arrays. We can also mix data types in a single array — we do not have to limit ourselves to storing only numbers in one array, and in another only strings. In arrays we can store even expressions or functions calls that returns a value.

```js
function double(num1, num2) {
  return num1 * num2;
}

const random = [
  'tree',
  795,
  [0, 1, 2],
  { firstName: 'Tom', lastName: 'Cruise' },
  function () {
    console.log('Hi there!');
  },
  1 + 2 * (3 - 5),
  double(2 * 2),
];
```

In addition to a newly defined variable as shown above, ==arrays can also be **assigned as a property** of a new or an existing object==:

```js
let obj = {}
// ...
obj.prop = [element0, element1, ..., elementN]

// OR
let obj = {prop: [element0, element1, ...., elementN]}
```

If you wish to initialize an array with a single element, and the element happens to be a `Number`, you must use the bracket syntax. When a single `Number` value is passed to the `Array()` constructor or function, it is interpreted as an `arrayLength`, not as a single element.

```js
let arr = [42]; // Creates an array with only one element:
// the number 42.

let arr = Array(42); // Creates an array with no elements and arr.length set to 42.

// This is equivalent to:
let arr = [];
arr.length = 42;
```

## Understanding `length`

You can find out the length of an array (how many items are in it) in exactly the same way as you find out the length (in characters) of a string — by using the `length` property. ==The `length` property is special, it always returns the **index of the last element plus one**==.

```js
onst shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping.length;  // 5
```

> **Note**: Remember, array indexes are `0` based: they start at 0, not 1. This means that the `length` property will be one more than the highest index stored in the array.

==You can also assign to the `length` property. Writing a value that is shorter than the number of stored items truncates the array. Writing `0` empties it entirely==:

```js
let cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs []; the cats array is empty

cats.length = 3;
console.log(cats); // logs [ <3 empty items> ]
```

## Accessing and modifying array items

==Items in an array are numbered, starting from zero.== This number is called the item's ==**index**==. So the first item has index 0, the second has index 1, and so on. ==You can access individual items in the array using bracket notation `[]` and supplying the item's index==, in the same way that you accessed the letters in a string.

```js
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping[0]; // "bread"
```

> **Note**: We've said it before, but just as a reminder — **computers start counting from 0**!

You can also modify an item in an array by giving a single array item a new value:

```js
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping[0] = 'tahini';
console.log(shopping); // [ "tahini", "milk", "cheese", "hummus", "noodles" ]
```

==Note that an array inside an array is called a **multidimensional array**. You can access an item inside an array that is itself inside another array by **chaining two sets of square brackets together**==.

```js
const random = ['tree', 795, [0, 1, 2]];
random[2][2]; // [0, 1, 2]
```

## Finding items in an array

This is fine if you know the index of an item, but what if you don't? You can find the index of a particular item using the `indexOf()` method. This takes an item as an argument and returns the index, or `-1` if the item was not found in the array:

```js
const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl')); //  2
console.log(birds.indexOf('Rabbit')); // -1
```

## Adding items

To add one or more items to the end of an array we can use `push()`. Note that you need to include one or more items that you want to add to the end of your array.

```js
const cities = ['Manchester', 'Liverpool'];

cities.push('Cardiff');
cities.push('Bradford', 'Brighton');

console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
```

> **Note**: The new length of the array is returned when the method call completes. If you wanted to store the new array length in a variable, you could do something like this:
>
> ```js
> const cities = ['Manchester', 'Liverpool'];
> const newLength = cities.push('Bristol');
> console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
> console.log(newLength); // 3
> ```

To add an item to the start of the array, use `unshift()`:

```js
const cities = ['Manchester', 'Liverpool'];
cities.unshift('Edinburgh');
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]
```

## Removing items

To remove the last item from the array, use `pop()`.

```js
const cities = ['Manchester', 'Liverpool'];
cities.pop();
console.log(cities); // [ "Manchester" ]
```

> **Note**: The pop() method returns the item that was removed. To save that item in a new variable, you could do this:
>
> ```js
> const cities = ['Manchester', 'Liverpool'];
> const removedCity = cities.pop();
> console.log(removedCity); // "Liverpool"
> ```

To remove the first item from an array, use `shift()`:

```js
const cities = ['Manchester', 'Liverpool'];
cities.shift();
console.log(cities); // [ "Liverpool" ]
```

If you know the index of an item, you can remove it from the array using `splice()`:

```js
const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]
```

In this call to `splice()`, the first argument says where to start removing items, and the second argument says how many items should be removed. So you can remove more than one item:

```js
const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Accessing every item / Iterating over arrays

Very often you will want to access every item in the array. The simplest way is using the `for` or `for...of` statement:

```js
const birds = ['Parrot', 'Falcon', 'Owl'];

// for loop
for (let i = 0; i < birds.length; i++) {
  console.log(colors[i]);
}

// for...of loop
for (const bird of birds) {
  console.log(bird);
}
```

## References

1. [Arrays - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)

2. [Indexed collections - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)

3. [Array - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

4. [Array() constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
