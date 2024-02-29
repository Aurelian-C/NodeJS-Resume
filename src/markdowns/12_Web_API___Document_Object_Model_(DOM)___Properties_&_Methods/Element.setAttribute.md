# Element.setAttribute()

`Element.setAttribute` ==**sets** the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value==.

> **Note**: It is possible to add a style attribute with a value to an element, but it is not recommended because it can overwrite other properties in the style attribute.
>
> ```js
> // NO:
> element.setAttribute('style', 'background-color:red;');
>
> // YES:
> element.style.backgroundColor = 'red';
> ```

To get the current value of an attribute, use [`getAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute); to remove an attribute, call [`removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute).

DOM methods dealing with element's attributes:

- [`setAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
- [`getAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)
- [`hasAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute)
- [`removeAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute)

## Syntax

```js
element.setAttribute(name, value);
```

## Parameters

#### `name`

A string specifying the name of the attribute whose value is to be set. The attribute name is automatically converted to all lower-case when `setAttribute()` is called on an HTML element in an HTML document.

#### `value`

A string containing the value to assign to the attribute. Any non-string value specified is converted automatically into a string.

## Return value

None (`undefined`).

## Examples

```html
<button>Hello World</button>
```

```js
const button = document.querySelector("button");
button.setAttribute("name", "helloButton");
```

Boolean attributes are considered to be `true` if they're present on the element at all. You should set `value` to the empty string (`""`) or the attribute's name, with no leading or trailing whitespace:

```js
button.setAttribute("disabled", "");
```

To set the value of a Boolean attribute, such as `disabled`, you can specify any value. An empty string or the name of the attribute are recommended values. All that matters is that if the attribute is present at all, *regardless of its actual value*, its value is considered to be `true`. The absence of the attribute means its value is `false`. By setting the value of the `disabled` attribute to the empty string (`""`), we are setting `disabled` to `true`, which results in the button being disabled.

## References

1. [Element.setAttribute() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
2. [setAttribute() method - w3schools](https://www.w3schools.com/jsref/met_element_setattribute.asp)
