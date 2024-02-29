# `Array.prototype.entries()`

The `entries()` method ==returns a new **Array Iterator** object that **contains the key/value pairs for each index** in the array==. The `entries()` method does ==**not mutates** the original array==.

## Syntax

```js
array.entries();
```

## Return value

A new ==**Array Iterator**== object (an ==array with key/value pairs==).

## Some considerations about `entries()` method

When used on [sparse arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the `entries()` method iterates empty slots as if they have the value `undefined`.

## Examples

Iterating with index and element:

```js
const array = ['a', 'b', 'c'];
const arrayEntries = a.entries() //aEntries is an Array Iterator that contains the key/value pairs for each index

for (const [index, element] of arrayEntries) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

Using a `for...of` loop:

```js
const array = ['a', 'b', 'c'];
const arrayEntries = array.entries();

for (let element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

Iterating sparse arrays:

```js
// entries() will visit empty slots as if they are undefined.

const array = ['a', , 'c'];
const arrayEntries = a.entries()

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, undefined]
// [2, 'c']
```

## References

1. [`Array.prototype.entries()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
2. [`entries()` - w3schools](https://www.w3schools.com/jsref/jsref_entries.asp)
