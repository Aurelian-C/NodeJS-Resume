# Element.tagName

The `tagName` ==read-only property== of the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface ==returns the tag name of the element on which it's called==. 

> For example, if the element is an [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), its `tagName` property is `"IMG"` (for HTML documents; it may be cased differently for XML/XHTML documents).

The `tagName` property:

- returns the tag name of an element
- returns the tag name in UPPERCASE

For `Element` objects, the value of `tagName` is the same as the value of the [`Node.nodeName`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName) property, with specification that `Node.nodeName` besides return the tag name of an element, can also return the tag name of attribute nodes, text nodes, and comment nodes.

## Syntax

```js
element.tagName(value)
```

## Value

A string indicating the element's tag name. This string's capitalization depends on the document type:

- For DOM trees which represent HTML documents, the returned tag name is always in the canonical upper-case form. For example, `tagName` called on a [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) element returns `"DIV"`.
- The tag names of elements in an XML DOM tree are returned in the same case in which they're written in the original XML file. If an XML document includes a tag `"<SomeTag>"`, then the `tagName` property's value is `"SomeTag"`.

## Return value

The tag name of an element.

## References

1. [Element.tagName - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)
2. [HTML DOM Element tagName - w3schools](https://www.w3schools.com/jsref/prop_element_tagname.asp)