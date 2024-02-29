# HTMLElement.style

The `style` ==read-only property returns the _inline style_ of an element in the form of a [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) object== that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element's inline [`style` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style).

> **Note**: JavaScript syntax is slightly different from CSS syntax: `backgroundColor` vs `background-color`
>
> ```js
> // You cannot set a style like this
> element.style = "background-color:red";
> 
> // You must use a CSS property like this
> element.style.backgroundColor = "red";  
> ```

The `style` property:

- returns the values of an element's style attribute
- returns a `CSSStyleDeclaration` object
- The `CSSStyleDeclaration` object contains all inline styles properties for the element. It does not contain any style properties set in the <head> section or in any external style sheets

Use the `style` property instead of the the [`Element.setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) method, to prevent overwriting other properties in the style attribute.

## Syntax

```js
// Return a style property
element.style.property;

// Set a style property
element.style.property = value;
```

## Value

The value of the specified property.

## Return Value

The element's `CSSStyleDeclaration` object.

## Some considerations about `style` property

### Setting styles

==While `style` property is considered read-only, it is possible to set an _inline style_ by assigning a string directly to the `style` property==. In this case the string is forwarded to [`CSSStyleDeclaration.cssText`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText). Using `style` in this manner will completely overwrite all inline styles on the element.

Therefore, to add specific styles to an element without altering other `style` values, it is generally preferable to set individual properties on the `CSSStyleDeclaration` object. For example, `element.style.backgroundColor = "red"`.

A style declaration is reset by setting it to `null` or an empty string, e.g., `element.style.color = null`.

### Getting style information

==The `style` property is not useful for completely learning about the styles applied on the element, since it represents only the CSS declarations set in the element's _inline style attribute_, not those that come from style rules elsewhere, such as style rules in the `<head>` section, or external style sheets. To get the values of all CSS properties for an element you should use [`window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) instead==.

## References

1. [HTMLElement.style - MDN](https://developer.mozilla.org/en-US/docs/web/api/htmlelement/style)
2. [style property - w3schools](https://www.w3schools.com/jsref/prop_html_style.asp)
3. [JavaScript - The Complete Guide (Beginner + Advanced) - Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=Cj0KCQjw0umSBhDrARIsAH7FCoeU9W1FhcfHq4JH6InuqwKQdlnXPY4wnIG6-ZrfGPJ6hyB9zTE0NW8aAvGkEALw_wcB)
