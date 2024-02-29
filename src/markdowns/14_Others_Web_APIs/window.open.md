# Window.open()

The `open()` method of the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) interface ==opens a new browser window, or a new tab, depending on your browser settings and the parameter values==.

## Syntax

```js
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

## Parameters

#### `url` _(optional)_

A string indicating the URL or path of the page to open. If an empty string `""` is specified or this parameter is omitted (no URL is specified), a new blank window/tab is opened.

#### `target` _(optional)_

A string, without whitespace, specifying the [name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name) of the browsing context the resource is being loaded into. If the name doesn't identify an existing context, a new context is created and given the specified name.  This name can be used as the `target` attribute of [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) or [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-target) elements. The following values are supported:

| Value   | Description                                                  |
| ------- | ------------------------------------------------------------ |
| _blank  | URL is loaded into a new window, or tab. This is the default |
| _parent | URL is loaded into the parent frame                          |
| _self   | URL replaces the current page                                |
| _top    | URL replaces any framesets that may be loaded                |
| *name*  | The name of the window (does not specify the title of the window) |

#### `windowFeatures` _(optional)_

A string containing a comma-separated list of window features in the form `name=value` (no whitespaces) — or for boolean features, just `name`. These features include options such as the window's default size and position, whether or not to open a minimal popup window, and so forth. The following options are supported:

| Value                          | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| `popup`=yes\|1\|true           | If this feature is enabled, it requests that a minimal popup window be used. The UI features included in the popup window will be automatically decided by the browser, generally including an address bar only. If `popup` is not enabled, and there are no window features declared, the new browsing context will be a tab. |
| `width`=100 `innerWidth`=100   | Specifies the width of the content area, including scrollbars. The minimum required value is 100. |
| `height`=100 `innerHeight`=100 | Specifies the height of the content area, including scrollbars. The minimum required value is 100. |
| `left` or `screenX`            | Specifies the distance in pixels from the left side of the work area as defined by the user's operating system where the new window will be generated. |
| `top` or `screenY`             | Specifies the distance in pixels from the top side of the work area as defined by the user's operating system where the new window will be generated. |
| `noopener`                     | If this feature is set, the new window will not have access to the originating window via [`Window.opener`](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener) and returns `null`. When `noopener` is used, non-empty target names, other than `_top`, `_self`, and `_parent`, are treated like `_blank` in terms of deciding whether to open a new browsing context. |
| `noreferrer`                   | If this feature is set, the browser will omit the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) header, as well as set `noopener` to true. See [`rel="noreferrer"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noreferrer) for more information. |

## Return Value

A reference to the new window, or `null` if the call failed. The returned reference can be used to access properties and methods of the new window as long as it complies with [the same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) security requirements.

## Description

The `window.open()` method takes a URL as a parameter, and loads the resource it identifies into a new or existing tab or window. The `target` parameter determines which window or tab to load the resource into, and the `windowFeatures` parameter can be used to control to open a new popup with minimal UI features and control its size and position.

Note that remote URLs won't load immediately. When `window.open()` returns, the window always contains `about:blank`. The actual fetching of the URL is deferred and starts after the current script block finishes executing. The window creation and the loading of the referenced resource are done asynchronously.

## Examples

### Opening a new tab

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Opening a popup

Alternatively, the following example demonstrates how to open a popup, using the `popup` feature.

> **Warning:** Modern browsers have built-in popup blockers, preventing the opening of such popups. Users must have changed their browser settings to enable popups or enable them on a site-per-site basis from the browser's user interface (a notification may appear when the site attempts to open a popup for the first time, giving the option to enable or discard them).

```js
window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
```

It is possible to control the size and position of the new popup:

```js
const windowFeatures = "left=100,top=100,width=320,height=320";
const handle = window.open("https://www.mozilla.org/", "mozillaWindow", windowFeatures);
if (!handle) {
  // The window wasn't allowed to open
  // This is likely caused by built-in popup blockers.

  // …
}
```

### Progressive enhancement

In some cases, JavaScript is disabled or unavailable and `window.open()` will not work. Instead of solely relying on the presence of this feature, we can provide an alternative solution so that the site or application still functions.

#### Provide alternative ways when JavaScript is disabled

If JavaScript support is disabled or non-existent, then the user agent will create a secondary window accordingly or will render the referenced resource according to its handling of the `target` attribute. The goal and the idea are to provide (and *not impose*) to the user a way to open the referenced resource.

#### HTML

```html
<a href="https://www.wikipedia.org/" target="OpenWikipediaWindow">
  Wikipedia, a free encyclopedia (opens in another, possibly already existing,
  tab)
</a>
```

#### JavaScript

```js
let windowObjectReference = null; // global variable
function openRequestedTab(url, windowName) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, windowName);
  } else {
    windowObjectReference.focus();
  };
}

const link = document.querySelector("a[target='OpenWikipediaWindow']");
link.addEventListener("click", (event) => {
  openRequestedTab(link.href);
  event.preventDefault();
  }, false);
```

The above code solves a few usability problems related to links opening popups. The purpose of the `event.preventDefault()` in the code is to cancel the default action of the link: if the event listener for `click` is executed, then there is no need to execute the default action of the link. But if JavaScript support is disabled or non-existent on the user's browser, then the event listener for `click` is ignored, and the browser loads the referenced resource in the target frame or window that has the name `"WikipediaWindowName"`. If no frame nor window has the name `"WikipediaWindowName"`, then the browser will create a new window and name it `"WikipediaWindowName"`.

> **Note:** For more details about the `target` attribute, see [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) or [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-target).

#### Reuse existing windows and avoid `target="_blank"`

Using `"_blank"` as the target attribute value will create several new and unnamed windows on the user's desktop that cannot be recycled or reused. Try to provide a meaningful name to your `target` attribute and reuse such `target` attribute on your page so that a click on another link may load the referenced resource in an already created and rendered window (therefore speeding up the process for the user) and therefore justifying the reason (and user system resources, time spent) for creating a secondary window in the first place. Using a single `target` attribute value and reusing it in links is much more user resources friendly as it only creates one single secondary window, which is recycled.

#### Same-origin policy

If the newly opened browsing context does not share the same [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin), the opening script will not be able to interact (reading or writing) with the browsing context's content.

```js
// Script from example.com
const otherOriginContext = window.open("https://example.org");
// example.com and example.org are not the same origin

console.log(otherOriginContext.origin);
// DOMException: Permission denied to access property "origin" on cross-origin object
// Script from example.com
const sameOriginContext = window.open("https://example.com");
// This time, the new browsing context has the same origin

console.log(sameOriginContext.origin);
// https://example.com
```

For more information, refer to the [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) article.

## References

1. [`window.open()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)
2. [`window.open()` - w3schools](https://www.w3schools.com/jsref/met_win_open.asp)