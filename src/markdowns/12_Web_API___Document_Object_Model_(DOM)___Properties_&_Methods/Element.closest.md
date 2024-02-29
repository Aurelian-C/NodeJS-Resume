# Element.closest()

The `closest()` method of the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface ==**traverses the element and its parents** (heading toward the document root) until it finds a node that matches the specified selector ([CSS selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors))==.

The `closest()` method searches ==**up** the DOM tree==.

The method ==starts at the **element itself**, then the **anchestors**== (parent, grandparent, ...) until a match is found. Will return itself or the matching ancestor. If no match is found, it returns `null`.

## Syntax

```js
element.closest(selector/s)
```

## Parameters

#### `selector/s` 

One or more strings of valid [CSS selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) to match the `Element` and its ancestors against.

## Return Value

- The closest ancestor `Element` _or_ itself, which matches the `selector/s`

- If there are no such element, `null`

## Examples

HTML:

```html
<article>
  <div id="div-01">
    Here is div-01
    <div id="div-02">
      Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>
```

JavaScript:

```js
const el = document.getElementById('div-03');

// the closest ancestor with the id of "div-02"
console.log(el.closest('#div-02')); // <div id="div-02">

// the closest ancestor which is a div in a div
console.log(el.closest('div div')); // <div id="div-03">

// the closest ancestor which is a div and has a parent article
console.log(el.closest("article > div")); // <div id="div-01">

// the closest ancestor which is not a div
console.log(el.closest(":not(div)")); // <article>
```

## References

1. [Element.closest() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
2. [closest() method - w3schools](https://www.w3schools.com/jsref/met_element_closest.asp)
