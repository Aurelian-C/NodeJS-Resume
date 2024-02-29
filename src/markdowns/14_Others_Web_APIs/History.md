# History

The DOM [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object ==provides access to the browser's **session** history through the [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History) object==. It exposes useful methods and properties that let you navigate back and forth through the user's history, and manipulate the contents of the history stack.

> The `History` object allows manipulation of the browser *session history* (that is, the pages visited in the tab or frame that the current page is loaded in).

==The `Window.history` **read-only** property **returns a reference to the `History` object**, which provides an interface for manipulating the browser *session history* (pages visited in the tab or frame that the current page is loaded in)==.

## Instance methods

The `History` interface doesn't inherit any methods.

#### [`back()`](https://developer.mozilla.org/en-US/docs/Web/API/History/back)

This asynchronous method goes to the previous page in session history, the same action as when the user clicks the browser's Back button. Equivalent to `history.go(-1)`. Calling this method to go back beyond the first page in the session history has no effect and doesn't raise an exception.

#### [`forward()`](https://developer.mozilla.org/en-US/docs/Web/API/History/forward)

This asynchronous method goes to the next page in session history, the same action as when the user clicks the browser's Forward button; this is equivalent to `history.go(1)`. Calling this method to go forward beyond the most recent page in the session history has no effect and doesn't raise an exception.

#### [`go()`](https://developer.mozilla.org/en-US/docs/Web/API/History/go)

Asynchronously loads a page from the session history, identified by its relative location to the current page, for example `-1` for the previous page or `1` for the next page. If you specify an out-of-bounds value (for instance, specifying `-1` when there are no previously-visited pages in the session history), this method silently has no effect. Calling `go()` without parameters or a value of `0` reloads the current page. Internet Explorer lets you specify a string, instead of an integer, to go to a specific URL in the history list.

#### [`pushState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)

Pushes the given data onto the session history stack with the specified title (and, if provided, URL). The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized. Note that all browsers but Safari currently ignore the *title* parameter. For more information, see [Working with the History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API).

#### [`replaceState()`](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState)

Updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized. Note that all browsers but Safari currently ignore the *title* parameter. For more information, see [Working with the History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API).

## Notes

For top-level pages you can see the list of pages in the session history, accessible via the `History` object, in the browser's dropdowns next to the back and forward buttons.

For security reasons the `History` object doesn't allow the non-privileged code to access the [URLs](https://developer.mozilla.org/en-US/docs/Glossary/URL) of other pages in the session history, but it does allow it to navigate the session history.

There is no way to clear the session history or to disable the back/forward navigation from unprivileged code. The closest available solution is the [`location.replace()`](https://developer.mozilla.org/en-US/docs/Web/API/Location/replace) method, which replaces the current item of the session history with the provided URL.

## References

1. [History API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
2. [History - MDN](https://developer.mozilla.org/en-US/docs/Web/API/History)
3. [`window.history` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/history)
4. [Working with the History API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API)