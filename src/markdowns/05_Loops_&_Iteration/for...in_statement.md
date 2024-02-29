# `for...in` loop

The JavaScript `for...in` statement ==loops through the **properties** of an **object**. `for...in` iterates over all **enumerable properties** of an object that are keyed by strings== (ignoring ones keyed by Symbols), ==**including inherited enumerable properties**==.

A `for...in` loop ==_only_ iterates over **enumerable, non-Symbol properties**==. A `for...in` loop iterates over the properties of an object in an ==arbitrary order==.

> **Note**: Do not use `for...in` to iterate an array if the index order is important. Use a [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop instead.

## Syntax

```js
for (variable in object) {
  // statement;
}
```

## Parameters

#### `variable` 

Receives a ==string property name== on each iteration. May be either a declaration with `const`, `let` or `var`.

#### `object`

An object whose non-Symbol ==enumerable properties== are iterated over.

#### `statement`

A statement to be executed on every iteration. May reference `variable`.

## Description

==The `for...in` loop will iterate over **all enumerable properties of the object itself** _and_ **those the object inherits from its prototype chain**== (properties of nearer prototypes take precedence over those of prototypes further away from the object in its prototype chain).

> If you only want to consider _properties attached to the **object itself** (iterating over own properties only) and not its prototypes_, you can use one of the following techniques:
>
> - [`Object.keys(myObject)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) - return a list of enumerable own string properties
> - [`Object.getOwnPropertyNames(myObject)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) - also contain non-enumerable ones

A `for...in` loop ==_only_ iterates over _enumerable, non-symbol properties_==.

The `variable` part of `for...in` accepts anything that can come before the `=` operator. You can use `const` to declare the variable as long as it's not reassigned within the loop body (it can change between iterations, because those are two separate variables). Otherwise, you can use `let`. You can use [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) or an object property like `for (x.y in iterable)` as well.

## `for..in` over arrays

==Array indexes are just _enumerable properties with integer names_== and are otherwise identical to general object properties:

```js
const numbers = [45, 4, 9];

for (let x in numbers) {
  console.log(x)
}
// 0
// 1
// 2
```

==There is no guarantee that `for...in` will return the indexes in any particular order==. Therefore, it is better to use a `for` loop with a numeric index (or `Array.prototype.forEach()` or the `for...of` loop) when iterating over arrays where the order of access is important.

> **Note**: Do not use `for...in` over an Array if the index **order** is important.

The `for...in` loop statement will return all enumerable properties, including those with non–integer names and those that are inherited. 

Unlike `for...of`, `for...in` uses property enumeration instead of the array's iterator. In [sparse arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), `for...of` will visit the empty slots, but `for...in` will not.

## Why NOT use `for...in`?

Many JavaScript style guides and linters recommend against the use of `for...in`, ==because it **iterates over the entire prototype chain**== which is rarely what one wants, and may be a confusion with the more widely-used `for...of` loop. 

`for...in` is most practically used for debugging purposes, being an easy way to check the properties of an object (by outputting to the console or otherwise). In situations where objects are used as ad hoc key-value pairs, `for...in` allows you check if any of those keys hold a particular value.

## References

1. [`for...in` statement - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
2. [`for...in` statement - w3schools](https://www.w3schools.com/jsref/jsref_forin.asp)
3. [Loops and iteration - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
