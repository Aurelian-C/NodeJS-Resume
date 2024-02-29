# Element.className

The `className` property of the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface ==**gets** _or_ **sets** the value of the [`class` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) of the specified element==.

> **Note**: The `class` is an _HTML Attribute_, while the `className` is a _DOM Property_.

## Syntax

```js
// Return the className property
element.className;

// Set the className property
element.className = class;
```

## Value

A string variable representing the class or space-separated classes of the current element.

## Return value

A string representing the class, or a space-separated list of classes, of an element.

## Some considerations about `className` property

The name `className` is used for this property instead of `class` because of conflicts with the "class" keyword in many languages which are used to manipulate the DOM.

`className` can also be an instance of [`SVGAnimatedString`](https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedString) if the `element` is an [`SVGElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement). ==It is better to get/set the `className` of an element using [`Element.getAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute) and [`Element.setAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) if you are dealing with SVG elements==. However, take into account that [`Element.getAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute) returns [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) instead of `""` if the `element` has an empty [`class` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class).

## Examples

```js
// Set the class attribute for an element
element.className = 'myStyle';

// Overwrite an existing class attribute with a new one
element.className = 'newClassName';

// To add new classes, without overwriting existing values, add a space and the new classes
element.className += ' class1 class2';

// Get the class attribute of "myDIV"
let value = document.getElementById('myDIV').className;
```

## References

1. [Element.className - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
2. [className property - w3schools](https://www.w3schools.com/jsref/prop_html_classname.asp)
