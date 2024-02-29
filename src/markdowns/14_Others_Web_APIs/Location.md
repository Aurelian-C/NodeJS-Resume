# Location

The `Location` interface ==represents the location (URL) of the object it is linked to==. Changes done on it are reflected on the object it relates to. Both the [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) and [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) interface have such a linked `Location`, accessible via [`Document.location`](https://developer.mozilla.org/en-US/docs/Web/API/Document/location) and [`Window.location`](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) respectively.

## `window.location` & `document.location`

The `window.location` & `document.location` ==read-only== property ==**returns a `Location` object**, which contains information about the **URL** of the document and provides methods for changing that URL and loading another URL==.

==Though `window.location` & `document.location` is a *read-only* `Location` object, you can also assign a string to it==. This means that you can work with `window.location` or `document.location` as if it were a string in most cases:

```js
location = 'http://www.example.com';
// is a synonym of
location.href = 'http://www.example.com';

document.location = 'http://www.example.com';
// is a synonym of
document.location.href = 'http://www.example.com';
```

==If you assign another string to it, browser will load the website you assigned==. To retrieve just the URL as a string, the read-only [`document.URL`](https://developer.mozilla.org/en-US/docs/Web/API/Document/URL) property can also be used. If the current document is not in a browsing context, the returned value is `null`.

## Instance properties

#### [`Location.href`](https://developer.mozilla.org/en-US/docs/Web/API/Location/href)

A [stringifier](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier) that returns a string containing the entire URL. If changed, the associated document navigates to the new page. It can be set from a different origin than the associated document.

#### [`Location.pathname`](https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname)

A string containing an initial `'/'` followed by the path of the URL, not including the query string or fragment.

#### [`Location.hash`](https://developer.mozilla.org/en-US/docs/Web/API/Location/hash)

A string containing a `'#'` followed by the fragment identifier of the URL.

## Instance methods

#### [`Location.assign()`](https://developer.mozilla.org/en-US/docs/Web/API/Location/assign)

Loads the resource at the URL provided in parameter.

#### [`Location.reload()`](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)

Reloads the current URL, like the Refresh button.

#### [`Location.replace()`](https://developer.mozilla.org/en-US/docs/Web/API/Location/replace)

Replaces the current resource with the one at the provided URL (redirects to the provided URL). The difference from the `assign()` method and setting the `href` property is that after using `replace()` the current page will not be saved in session [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History), meaning the user won't be able to use the *back* button to navigate to it.

#### [`Location.toString()`](https://developer.mozilla.org/en-US/docs/Web/API/Location/toString)

Returns a string containing the whole URL. It is a synonym for `Location.href`, though it can't be used to modify the value.

## Examples

### Navigate to a new page

Whenever a new value is assigned to the location object, a document will be loaded using the URL as if `location.assign()` had been called with the modified URL:

```js
location.assign("http://www.mozilla.org");
// or
location = "http://www.mozilla.org";
```

### Reloading the current page

```js
location.reload();
```

## Using the pathname into the hash (#)

Consider the following example, which will reload the page by using the replace() method to insert the value of `location.pathname` into the hash:

```js
function reloadPageWithHash() {
  location.replace(`http://example.com/#${location.pathname}`);
};
```

## References

1. [Location - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location)
2. [`window.location` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
3. [`document.location` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/location)