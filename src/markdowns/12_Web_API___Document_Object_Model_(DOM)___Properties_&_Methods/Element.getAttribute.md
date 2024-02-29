# Element.getAttribute()

The `getAttribute()` method of the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface ==returns the value of a specified attribute on the element. If the given attribute does not exist, the value returned will either be `null` or `""` (the empty string)==.

## Syntax

```js
element.getAttribute(attributeName);
```

## Parameters

#### `attributeName`

The name of the attribute whose value you want to get.

## Return value

A string containing the value of `attributeName`.

## Examples

```html
<div id="div1">Hi Champ!</div>
```

```js
const element = document.getElementById('div1');

element.getAttribute('id'); // "div1"
element.getAttribute('align') // null
```

## References

1. [Element.getAttribute() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)
2. [getAttribute() method - w3schools](https://www.w3schools.com/jsref/met_element_getattribute.asp)
