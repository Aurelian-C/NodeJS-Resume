# Data structures - Maps

The Map object holds ==key-value pairs== and remembers the original insertion order of the keys. ==Any value (both objects and primitive values) may be used as either a key or a value==.

A Map object:

- holds key-value pairs where the keys can be any datatype;
- remembers the original insertion order of the keys;
- has a property that represents the size of the Map.

|                                      Arrays                                      |                                    Sets                                    |                                  Maps                                   |
| :------------------------------------------------------------------------------: | :------------------------------------------------------------------------: | :---------------------------------------------------------------------: |
|                    Store (nested) data of any kind and length                    |                 Store (nested) data of any kind and length                 | Store key-value data of any kind and length, any key values are allowed |
|               Iterable, also many special array methods available                |             Iterable, also some special Set methods available              |            Iterable, also some special Map methods available            |
| Order is guaranteed, duplicates are allowed, zero-based index to access elements | Order is NOT guaranteed, duplicates are NOT allowed, no index-based access |  Order is guaranteed, duplicate keys are NOT allowed, key-based access  |

## Syntax

You can create a JavaScript Map by:

- create a Map and use `Map.set()`.
- passing an Array to `new Map()`;

```js
new Map();
new Map(iterable);
```

## Parameters

==**iterable**== (optional) - an Array or other iterable object whose elements are key-value pairs (for example, arrays with two elements, such as `[[ 1, 'one' ],[ 2, 'two' ]]`). Each key-value pair is added to the new Map.

## Return value

A ==new Map== object.

## Map methods & properties

| **Method** | **Description**                                                 |
| :--------- | :-------------------------------------------------------------- |
| set()      | Sets the value for a key in a Map                               |
| get()      | Gets the value for a key in a Map                               |
| clear()    | Removes all the elements from a Map                             |
| delete()   | Removes a Map element specified by a key                        |
| has()      | Returns true if a key exists in a Map                           |
| forEach()  | Invokes a callback for each key/value pair in a Map             |
| entries()  | Returns an iterator object with the [key, value] pairs in a Map |
| keys()     | Returns an iterator object with the keys in a Map               |
| values()   | Returns an iterator object of the values in a Map               |

| **Property** | **Description**                    |
| ------------ | ---------------------------------- |
| size         | Returns the number of Map elements |

## JavaScript Objects vs Maps

|              | Object                                                                                                                                            | Map                                                                                          |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| Iterable     | Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript `for...of` statement (by default). | A Map is an iterable, so it can be directly iterated.                                        |
| Size         | The number of items in an Object must be determined manually.                                                                                     | The number of items in a Map is easily retrieved from its `size` property.                   |
| Key Types    | Keys must be Strings (or Symbols)                                                                                                                 | Keys can be any datatype (including functions, objects, or any primitive)                    |
| Key Order    | Keys are not well ordered                                                                                                                         | Keys are ordered by insertion                                                                |
| Default keys | An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful.                               | A Map does not contain any keys by default. It only contains what is explicitly put into it. |
| Performance  | Not optimized for frequent additions and removals of key-value pairs.                                                                             | Performs better in scenarios involving frequent additions and removals of key-value pairs.   |

## Objects as Map keys

Being able to use objects as keys is an important Map feature.

## Example

```js
const person1 = { name: 'Tom' };
const person2 = { name: 'Brad' };
```

Now `person1` and `person2` are not Maps, these are normal objects. Now a use case where you could use a Map is that you want to ==**attach** some **extra information**== to each `person1` or `person2` ==but you don't want to **merge** that extra information into== the `person1` or `person2` object because you use these objects in multiple places of the application, maybe you even copy them, and you don't want to blow them with that extra information and you also want to make sure that in other parts of the application where you work with the `person1` or `person2` object, you have a ==lean object== to work with ==without too many properties== where you have to guess which one you need and ==instead some extra information which you might need in another part of your application could be managed in such a Map==. So with the help of Maps, we could create a constant or a variable that hold the extra information:

```js
const personData = new Map([[person1, [{ gender: 'male', heigth: 175 }]]]);
```

With the help of Maps you store the additional information for the `person1`, additional information that you don't want to merge into the `person1` as properties. So with the approach above the `personData` Map has as a key the `person1` object, because remember that Maps can have any kind of datatypes for keys.

So the the advantage with Maps is that we can use an object as a key and attach extra information to that key object. Now that extra information is not merged into the object (in our case `person1`) or anything like that, it's stored in the Map instead (in our case `personData`), but we can use the Map in the part of the application where we need that extra information and have that information tight connection to the key object.

Since we use that exact same address for `person1`, we can easily extract data from the `personData` Map object:

```js
personData.get(person1);
```

## Specialized version of Maps - WeakMap

A WeakMap is a ==**collection of key/value** pairs whose **keys must be objects**==, with values of any arbitrary JavaScript type, and which ==does **not create strong references** to its keys==. That is, an object's presence as a key in a WeakMap does ==not prevent the object from being **garbage collected**==. Once an object used as a key has been collected, its corresponding values in any WeakMap become candidates for garbage collection as well — as long as they aren't strongly referred to elsewhere.

WeakMap allows associating data to objects in a way that doesn't prevent the key objects from being collected, even if the values reference the keys. However, a WeakMap doesn't allow observing the liveness of its keys, which is why it doesn't allow enumeration; if a WeakMap exposed any method to obtain a list of its keys, the list would depend on the state of garbage collection, introducing non-determinism. If you want to have a list of keys, you should use a Map rather than a WeakMap.

> **NOTE**: ==Keys of WeakMaps are of the type **Object only**==. Primitive data types as keys are not allowed.

### Syntax

```js
new WeakMap();
new WeakMap(iterable);
```

### Parameters

==**iterable**== - an Array or other iterable object that implements an @@iterator method that returns an iterator object that produces a two-element array-like object whose first element is a value that will be used as a WeakMap key and whose second element is the value to associate with that key. Each key-value pair will be added to the new WeakMap. `null` is treated as `undefined`.

### WeakMap methods

| Method                            | Description                                                                                                |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| WeakMap.prototype.delete(key)     | Removes any value associated to the `key`. WeakMap.prototype.has(key) will return false afterwards.        |
| WeakMap.prototype.get(key)        | Returns the value associated to the `key`, or `undefined` if there is none.                                |
| WeakMap.prototype.has(key)        | Returns a Boolean asserting whether a value has been associated to the `key` in the WeakMap object or not. |
| WeakMap.prototype.set(key, value) | Sets the `value` for the `key` in the WeakMap object. Returns the WeakMap object.                          |

## References

1. [Map - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
2. [Maps - w3schools](https://www.w3schools.com/js/js_object_maps.asp)
3. [JavaScript - The Complete Guide (Beginner + Advanced) - Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=Cj0KCQjw0umSBhDrARIsAH7FCoeU9W1FhcfHq4JH6InuqwKQdlnXPY4wnIG6-ZrfGPJ6hyB9zTE0NW8aAvGkEALw_wcB)
4. [WeakMap - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
