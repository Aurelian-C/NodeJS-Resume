# Storage

The `Storage` interface of the **[Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)** ==provides access to a particular domain's _session_ or _local_ storage==. It allows, for example, the addition, modification, or deletion of stored data items.

> **Note**: The **Web Storage API** provides mechanisms by which browsers can store _key/value pairs_, in a much more intuitive fashion than using [cookies](https://developer.mozilla.org/en-US/docs/Glossary/Cookie).

The two mechanisms within Web Storage are as follows:

- ==`sessionStorage`== maintains a separate storage area for each given origin that's available _for the duration of the page session (as long as the browser is open, including page reloads and restores)_
  - stores data only for a session, meaning that the data is stored until the browser (or tab) is closed
  - data is never transferred to the server
  - storage limit is larger than a cookie (at most 5MB)
- ==`localStorage`== does the same thing, but _persists even when the browser is closed and reopened_
  - stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data
  - storage limit is the maximum amongst the two

> **Note**: `localStorage` is similar to `sessionStorage`, except that while `localStorage` data _has no expiration time_, `sessionStorage` data gets _cleared when the page session ends_ — that is, when the page is closed. 
>
> `localStorage` data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.

To manipulate, for instance, the session storage for a domain, a call to [`Window.sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) is made; whereas for local storage the call is made to [`Window.localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Syntax

The `localStorage` & `sessionStorage` read-only properties of the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) interface allows you to access a `Storage` object:

```js
window.localStorage;
window.sessionStorage;
```

## Return value

==A `Storage` object== which can be used to access the current origin's local storage space.

## Description

The keys and the values stored with  `localStorage` & `sessionStorage` are *always* in the UTF-16 string format, which uses two bytes per character. As with objects, integer keys are automatically converted to strings.

`localStorage` data **is specific to the protocol of the document**. In particular, for a site loaded over HTTP (e.g., `http://example.com`), `localStorage` returns a different object than `localStorage` for the corresponding site loaded over HTTPS (e.g., `https://example.com`).

## `Storage` instance methods

### [`Storage.setItem()`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)

When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.

```js
localStorage.setItem(keyName, keyValue);
// or
sessionStorage.setItem(keyName, keyValue);
```

`keyName` is a string containing the name of the key you want to create/update. `keyValue` is a string containing the value you want to give the key you are creating/updating. The `setItem()` method return `undefined`.

> **Note**: If you want to store an object/array as a value in the browser storage, you need to convert it to a string with the help of [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method.
>
> The `JSON.stringify()` method _converts a JavaScript value to a **JSON string**_, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
>
> ```js
> localStorage.setItem(keyName, JSON.stringify({name: 'Aurelian', age: 32}))
> // or
> sessionStorage.setItem(keyName, JSON.stringify({name: 'Aurelian', age: 32}))
> ```

The `setItem()` method may throw an exception if the storage is full. Developers should make sure to **always catch possible exceptions from `setItem()`**.

### [`Storage.getItem()`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)

When passed a key name, will return that key's value, or `null` if the key does not exist.

```js
localStorage.getItem(keyName, keyValue);
// or
sessionStorage.getItem(keyName, keyValue);
```

`keyName` is a string containing the name of the key you want to retrieve the value of. The `getItem()` method ==return a string== containing the value of the key. If the key does not exist, `null` is returned.

> **Note**: If the string that is returned by the `getItem()` method is an object/array stored with the help of `JSON.stringify()`, you can convert into an object/array with the help of [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) method.
>
> The `JSON.parse()` method parses a JSON string, constructing the JavaScript value or object described by the string. An optional *reviver* function can be provided to perform a transformation on the resulting object before it is returned.
>
> ```js
> localStorage.getItem(keyName, JSON.parse(keyValue));
> // or
> sessionStorage.getItem(keyName, JSON.parse(keyValue));
> ```

### [`Storage.removeItem()`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem)

When passed a key name, will remove that key from the storage. If there is no item associated with the given key, this method will do nothing.

```js
localStorage.removeItem(keyName);
// or
sessionStorage.removeItem(keyName);
```

`keyName` is string containing the name of the key you want to remove. The `removeItem()` method return `undefined`.

### [`Storage.clear()`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear)

When invoked, will empty all keys out of the storage. The `clear()` method return `undefined`.

## Examples

### Using `localStorage`:

```js
// Save data to localStorage
localStorage.setItem("key", "value");

// Get saved data from localStorage
let data = localStorage.getItem("key");

// Remove saved data from localStorage
localStorage.removeItem("key");

// Remove all saved data from localStorage
localStorage.clear();
```

### Using `sessionStorage`:

```js
// Save data to sessionStorage
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();
```

## References

1. [Storage - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
2. [Web Storage API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
3. [`JSON.stringify()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
4. [`JSON.parse()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)