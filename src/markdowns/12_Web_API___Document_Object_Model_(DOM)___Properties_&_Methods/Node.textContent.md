# Node.textContent

The **`textContent`** property of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==represents the text content of the node and its descendants==. With `textContent` you can ==**set** _or_ **return** the text content of the specified node, _and all its descendants_==.

> **Note**: When you set the `textContent` property, all child nodes are removed and replaced by only one new text node.

## Syntax

```js
// Return the text content of a node
node.textContent;

// Set the text content of a node
node.textContent = text;
```

## Value

A string that represent the text inside the node.

## Return Value

- A string that is the text content of the element and all its descendants, _or_
- `null` if the node is a [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document), a [doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype), or a notation.

## Differences from [`innerText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)

|                         textContent                          |                          innerText                           |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| Gets the content of *all* elements, including [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) and [`<style>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) elements |             Only gets "human-readable" elements              |
|              Returns every element in the node               | Is aware of styling and won't return the text of "hidden" elements |
|               Remove child nodes when altered                | Remove child nodes when altered, but altering `innerText` in Internet Explorer (version 11 and below) also *permanently destroys* all descendant text nodes. It is impossible to insert the nodes again into any other element or into the same element after doing so. |

## Differences from [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

[`Element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) returns HTML, as its name indicates. Sometimes people use `innerHTML` to retrieve or write text inside an element, but `textContent` has better performance because its value is not parsed as HTML. 

Moreover, using `textContent` can prevent XSS attacks.

## Examples

|                          innerText                           |                          innerHTML                           |                         textContent                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| Returns just the text content of the element and all its children, without CSS hidden text spacing and tags, except `<script>` and `<style>` elements | Returns the text content of the element, including all spacing and inner HTML tags | Returns the text content of the element and all descendances, with spacing and CSS hidden text, but without tags |

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

1. [Node.textContent - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
2. [textContent - w3schools](https://www.w3schools.com/jsreF/prop_node_textcontent.asp)
