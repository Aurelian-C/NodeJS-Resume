# `Array.prototype.concat()`

The `concat()` method is used to ==**merge/join** two or more arrays==. This method does ==not change the existing arrays==, but instead ==returns a new array==.

The `concat()` method:

- merge two or more arrays;
- does not change the existing arrays;
- returns a new array containing the merged arrays.

## Syntax

```js
array.concat()
array.concat(item0)
array.concat(item0, item1)
array.concat(item0, item1, ... , itemN)
```

## Parameters

==**itemN**== _(optional)_ - ==**arrays**== _and/or_ ==**values**== to concatenate (merge) into a new array. 

> **NOTE**: _If all `itemN` parameters are omitted, `concat()` returns a shallow copy of the existing array on which it is called_.

## Return value

A ==**new** Array== instance.

## Some considerations about `concat()` method

The `concat()` method ==creates a **new** array== consisting of the elements in the object on which it is called, followed in order by, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument is not an array). ==It does not recurse into **nested array arguments**==.

The `concat()` method does not alter `this` or any of the arrays provided as arguments, but instead returns a ==shallow copy== that ==contains copies of the same elements combined from the original arrays==. Elements of the original arrays are copied into the new array as follows:

- **Object references** (and not the actual object): `concat()` ==copies **object references** into the new array. Both the original and new array refer to the same object==. That is, _if a referenced object is modified, the changes are visible to both the new and original arrays_. This includes elements of array arguments that are also arrays.
- Data types such as **strings**, **numbers** and **booleans** (not `String`, `Number`, and `Boolean` objects): `concat()` ==copies the **values**== of strings and numbers into the new array.

> **Note**: Concatenating array(s)/value(s) will leave the originals untouched. Furthermore, any operation on the new array (except operations on elements which are object references) will have no effect on the original arrays, and vice versa.

## References

1. [`Array.prototype.concat()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
2. [`concat()` - w3schools](https://www.w3schools.com/jsref/jsref_concat_array.asp)
