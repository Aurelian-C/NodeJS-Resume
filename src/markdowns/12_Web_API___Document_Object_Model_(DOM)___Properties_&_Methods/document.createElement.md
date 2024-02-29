# Document.createElement()

In an HTML document, the `document.createElement()` method ==creates the HTML element specified by _tagName_, or an [`HTMLUnknownElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement) if _tagName_ isn't recognized==.

## Syntax

```js
document.createElement(tagName, options);
```

## Parameters

#### `tagName`

A ==string== that _specifies the ==type of element== to be created_. The [`nodeName`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName) of the created element is initialized with the value of `tagName`. Don't use qualified names (like "html:a") with this method. When called on an HTML document, `createElement()` converts `tagName` to lower case before creating the element.

#### `options` _(optional)_

An object with the property of `is` - the tag name of a custom element previously defined via `customElements.define()`.

## Return value

The new [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element).

> **Note**: A new `HTMLElement` is returned if the document is an `HTMLDocument`, which is the most common case. Otherwise a new `Element` is returned.

## References

1. [Document.createElement() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
2. [createElement() - w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp)
