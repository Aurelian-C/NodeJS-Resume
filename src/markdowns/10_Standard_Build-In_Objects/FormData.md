# FormData()

The **`FormData`** interface provides a way to easily ==construct a set of **key/value** pairs representing form **fields** and their **values**, which can then be easily sent using the `fetch()` or `XMLHttpRequest.send()` method==.

An object implementing `FormData` can directly be used in a `for...of` structure, instead of `entries()`: 

````js
for (var p of myFormData) 
// is equivalent to 
for (var p of myFormData.entries())
````

## Constructor

`FormData()`: ==Creates a new `FormData` object==.

## Syntax

```js
const formData = new FormData(form);
```

## Parameters

`form` (optional)

==An HTML `<form>` element - when specified, the `FormData` object will be *populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values*. It will also encode file input content==.

## Instance methods

- [`FormData.append()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/append): appends a new value onto an existing key inside a `FormData` object, or adds the key if it does not already exist.

- [`FormData.delete()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/delete): deletes a key/value pair from a `FormData` object.

- [`FormData.entries()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries): returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) that iterates through all key/value pairs contained in the `FormData`.

- [`FormData.get()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get): returns the first value associated with a given key from within a `FormData` object.

- [`FormData.getAll()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll): returns an array of all the values associated with a given key from within a `FormData`.

- [`FormData.has()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/has): returns whether a `FormData` object contains a certain key.

- [`FormData.keys()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/keys): returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) iterates through all keys of the key/value pairs contained in the `FormData`.

- [`FormData.set()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/set): sets a new value for an existing key inside a `FormData` object, or adds the key/value if it does not already exist.

- [`FormData.values()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/values): returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) that iterates through all values contained in the `FormData`.

## Extract the `FormData` data in an object with spread operator & `Object.fromEntries`

```javascript
const formData = new FormData(form);
const formDataEntries = [...formData];
const object = Object.fromEntries(formDataEntries);
```

## References

1. [FormData Interface - MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

2. [`FormData()` Constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)

3. [FormData: `append()` method - MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData/append)

   



