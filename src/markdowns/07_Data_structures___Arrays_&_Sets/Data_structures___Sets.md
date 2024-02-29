# Data structures - Sets

In JavaScript, we got ==three major **iterable** data structures== you could say. We got ==Arrays== but we also got ==Sets== and we got ==Maps==.

|                                      Arrays                                      |                                    Sets                                    |                                  Maps                                   |
| :------------------------------------------------------------------------------: | :------------------------------------------------------------------------: | :---------------------------------------------------------------------: |
|                    Store (nested) data of any kind and length                    |                 Store (nested) data of any kind and length                 | Store key-value data of any kind and length, any key values are allowed |
|               Iterable, also many special array methods available                |             Iterable, also some special Set methods available              |            Iterable, also some special Map methods available            |
| Order is guaranteed, duplicates are allowed, zero-based index to access elements | Order is NOT guaranteed, duplicates are NOT allowed, no index-based access |  Order is guaranteed, duplicate keys are NOT allowed, key-based access  |

The Set object lets you ==store **unique values** of any type==, whether primitive values or object references.

Set objects are ==collections of values==. You can iterate through the elements of a Set in insertion order. A value in the Set ==may only occur once==; it is unique in the Set's collection. Because each value in the Set has to be unique, the value equality will be checked.

A JavaScript Set:

- is a collection of unique values;
- Each value can only occur once in a Set;
- can hold any value of any data type.

## Syntax

```js
new Set();
new Set(iterable);
```

## Parameters

==**iterable**== (optional) - if an iterable object is passed, all of its elements will be added to the new Set. If you don't specify this parameter, or its value is `null`, the new Set is empty.

## Return value

A ==new Set== object.

## Set methods & properties

| **Method** | **Description**                                               |
| :--------- | :------------------------------------------------------------ |
| add()      | Adds a new element to the Set                                 |
| delete()   | Removes an element from a Set                                 |
| has()      | Returns `true` if a value exists                              |
| clear()    | Removes all elements from a Set                               |
| forEach()  | Invokes a callback for each element                           |
| values()   | Returns an Iterator with all the values in a Set              |
| keys()     | Same as values()                                              |
| entries()  | Returns an Iterator with the `[value,value]` pairs from a Set |

| **Property** | **Description**                      |
| ------------ | ------------------------------------ |
| size         | Returns the number elements in a Set |

## Specialized version of Sets - WeakSet

In a Set you can store any value of any data type (strings, numbers, objects etc.). In the case of the WeakSet you can store ==only **object** data==.

WeakSet objects are ==collections of **objects**==. Just as with Sets, each object in a WeakSet may occur only once; all objects in a WeakSet's collection are unique.

The main differences to the Set object are:

- WeakSets are ==collections of **objects only**==. They cannot contain arbitrary values of any type, as Sets can.
- The WeakSet is _weak_, meaning references to objects in a WeakSet are held _weakly_. If no other references to an object stored in the WeakSet exist, those objects can be ==garbage collected==.

### Syntax

```js
new WeakSet();
new WeakSet(iterable);
```

### Parameters

==**iterable**== - if an iterable object is passed, all of its elements will be added to the new WeakSet. `null` is treated as `undefined`.

### WeakSet methods

| Method                            | Description                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| `WeakSet.prototype.add(value)`    | Appends `value` to the WeakSet object.                       |
| `WeakSet.prototype.delete(value)` | Removes `value` from the WeakSet. WeakSet.prototype.has(value) will return `false` afterwards. |
| `WeakSet.prototype.has(value)`    | Returns a boolean asserting whether `value` is present in the WeakSet object or not. |

## References

1. [Set - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
2. [Sets - w3schools](https://www.w3schools.com/js/js_object_sets.asp)
3. [WeakSet - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
