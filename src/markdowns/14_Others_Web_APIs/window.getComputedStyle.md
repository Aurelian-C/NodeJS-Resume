# Window.getComputedStyle()

The `Window.getComputedStyle()` method ==returns an object containing the values of all CSS properties of an element==, after applying active stylesheets and resolving any basic computation those values may contain. Individual CSS property values are accessed through APIs provided by the object, or by indexing with CSS property names.

The `getComputedStyle()` method returns a `CSSStyleDeclaration object`.

> **Note**: The `getComputedStyle()` method gets the computed CSS properties and values of an HTML element. The computed style is the style used on the element after all styling sources have been applied. Style sources: external and internal style sheets, inherited styles, and browser default styles.

## Syntax

```js
getComputedStyle(element)
getComputedStyle(element, pseudoElement)
```

## Parameters

#### `element`

The [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) for which to get the computed style. The first argument must be an [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element). Non-elements, like a [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) node, will throw an error.

#### `pseudoElement` _(optional)_

A string specifying the pseudo-element to match. Omitted (or `null`) for real elements.

## Return value

A *live* [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) object, which updates automatically when the element's styles are changed.

## Description

The returned object is the same [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) type as the object returned from the element's [`style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) property. However, the two objects have different purposes:

- The object from `getComputedStyle` is read-only, and should be used to inspect the element's style — including those set by a `<style>` element or an external stylesheet.
- The `element.style` object should be used to **set** styles on that element, or inspect styles directly added to it from JavaScript manipulation or the global `style` attribute.

### Notes

The returned [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) object contains active values for CSS property **longhand** names. For example, `border-bottom-width` instead of the `border-width` and `border` [shorthand property names](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties). It is safest to query values with only longhand names like `font-size`. Shorthand names like `font` will not work with most browsers.

CSS property values may be accessed using the `getPropertyValue(propName)` API or by indexing directly into the object such as `obj['z-index']` or `obj.zIndex`.

Returned values are sometimes deliberately inaccurate. To avoid the "CSS History Leak" security issue, browsers may lie about the computed styles for a visited link, returning values as if the user never visited the linked URL.

In Firefox, properties with the value `auto` return the used value, not the value `auto`. So if you apply `top:auto` and `bottom:0` on an element with `height:30px` and a containing block of `height:100px`, Firefox's computed style for `top` returns `70px`, as 100 − 30 = 70.

## Examples

In this example we style a [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) element, then retrieve those styles using `getComputedStyle()`, and print them into the text content of the `<p>`.

HTML:

```html
<p>Hello</p>
```

CSS:

```css
p {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  font: 2rem/2 sans-serif;
  text-align: center;
  background: purple;
  color: white;
}
```

JavaScript:

```js
const para = document.querySelector('p');
const compStyles = window.getComputedStyle(para);
para.textContent = `My computed font-size is ${compStyles.getPropertyValue('font-size')},\n` +
  `and my computed line-height is ${compStyles.getPropertyValue('line-height')}.`;
```

Output result:

```js
// My computed font-size is 32px, and my computed line-height is 64px.
```

### Use with pseudo-elements

`getComputedStyle` can pull style info from pseudo-elements (such as `::after`, `::before`, `::marker`, `::line-marker`):

```html
<style>
  h3::after {
    content: " rocks!";
  }
</style>

<h3>Generated content</h3>

<script>
  const h3 = document.querySelector("h3");
  const result = getComputedStyle(h3, ":after").content;

  console.log("the generated content is: ", result); // returns ' rocks!'
</script>
```

## References

1. [Window.getComputedStyle() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
2. [Window.getComputedStyle() - w3schools](https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp)