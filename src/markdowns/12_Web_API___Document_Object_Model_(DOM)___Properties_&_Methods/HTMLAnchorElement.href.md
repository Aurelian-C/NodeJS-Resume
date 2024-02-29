# HTMLAnchorElement.href

The `HTMLAnchorElement.href` property is a [stringifier](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier) that ==returns a string containing the whole URL, and allows the `href` to be updated==.

## Syntax

```js
// Get the URL
element.href

// Set the URL
element.href = string
```

## Value

A string that specifies the URL of the linked resource/document. Possible values:

- an _absolute URL_ - points to another web site (like `href="http://www.example.com/default.htm"`)
- a _relative URL_ - points to a file within a web site (like `href="default.htm"`)

## Return value

A string that represent the URL of the linked document. Returns the entire URL, including the protocol (like `http://`)

## References

1. [HTMLAnchorElement.href - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/href)
2. [Link href Property - w3schools](https://www.w3schools.com/jsref/prop_link_href.asp)