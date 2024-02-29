# Element.classList

The `Element.classList` is a ==read-only== property that ==returns a _live_ [`DOMTokenList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) collection of the `class` attributes of the element. This can then be used to manipulate the class list==.

> **Note**: Using `classList` is a convenient alternative to accessing an element's list of classes as a space-delimited string via [`element.className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className).

## Syntax

```js
element.classList;
```

## Return Value

A `DOMTokenList` representing the contents of the element's `class` attribute. If the `class` attribute is not set or empty, it returns an empty `DOMTokenList`.

## Some considerations about `Element.classList` and its `DOMTokenList`

The `DOMTokenList` interface represents a set of space-separated tokens. Such a set is returned by [`Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) or [`HTMLLinkElement.relList`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/relList), and many others.

The `classList` property is read-only, but you can use the methods listed below, to add, remove, toggle CSS classes from the list:

| Name                                                         | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [add()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add) | Adds one or more tokens to the list, omitting any that are already present. |
| [remove()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove) | Removes one or more tokens from the list.                    |
| [toggle()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) | Removes an existing token from the list and returns `false`. If the token doesn't exist it's added and the function returns `true`. |
| [contains()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains) | Returns a boolean value — `true` if the underlying list contains the given token, otherwise `false`. |
| [replace()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace) | Replaces an existing token with a new token in the list. If the first token doesn't exist, `replace()` returns `false` immediately, without adding the new token to the token list. |

### Examples

```js
// Add multiple classes to the an element
element.classList.add('myStyle', 'anotherClass', 'thirdClass');

// Remove multiple classes from an element
element.classList.remove('myStyle', 'anotherClass', 'thirdClass');

// Conditional add/remove a class
if (element.classList.contains('mystyle')) {
  element.classList.remove('classOne');
  element.classList.add('classTwo');
}

// Replace
element.classList.replace('myStyle', 'anotherClass');
```

## References

1. [Element.classList - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
2. [Element classList - w3schools](https://www.w3schools.com/jsreF/prop_element_classlist.asp)
