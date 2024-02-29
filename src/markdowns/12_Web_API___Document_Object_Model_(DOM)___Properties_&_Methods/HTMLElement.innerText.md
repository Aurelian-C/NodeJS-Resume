# HTMLElement.innerText

The `innerText` property of the [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) interface ==represents the rendered text content of a node and its descendants==. With the `innerText` property you can ==**set** _or_ **return** the text content of an element==.

> **Note**: When you set the `innerText` property, _all_ child nodes are removed and replaced by a single text node with the given string value. `innerText` will replace the element's children with the given value, converting any line breaks into [`<br>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br) elements.

`innerText` is easily confused with [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent), but there are important differences between the two. Basically, ==`innerText` is aware of the rendered appearance of text==, while `Node.textContent` is not. `innerText` is aware of things like `<br>` elements, and ignores hidden elements.

## Syntax

```js
// Return the text content of an element
element.innerText;

// Set the text content of an element
element.innerText = text;
```

## Value

A string representing the rendered text content of an element. If the element itself is not [being rendered](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (for example, is detached from the document or is hidden from view), the returned value is the same as the [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property.

## Return Value

A string that is the text content of the element and all descendants, except for `<script>` and `<style>` elements.

## The Differences Between `innerHTML`, `innerText` and `textContent`

|                          innerText                           |                          innerHTML                           |                         textContent                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| Returns just the text content of the element and all its children, without CSS hidden text spacing and tags, except `<script>` and `<style>` elements | Returns the text content of the element, including all spacing and inner HTML tags | Returns the text content of the element and all descendances, with spacing and CSS hidden text, but without tags |

### Example

```html
<p id="myP">   This element has extra spacing     and contains <span>a span element</span>.</p>
```

```js
let text = document.getElementById("myP").innerText;
// This element has extra spacing and contains a span element.

let text = document.getElementById("myP").innerHTML;
// This element has extra spacing    and contains <span>a span element</span>.

let text = document.getElementById("demo").textContent;
// This element has extra spacing    and contains a span element.
```

## References

1. [HTMLElement.innerText - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
2. [innerText - w3schools](https://www.w3schools.com/jsref/prop_node_innertext.asp)
