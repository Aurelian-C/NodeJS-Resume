# Element.insertAdjacentHTML()

The `insertAdjacentHTML()` method of the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface ==parses the specified text as HTML or XML== and ==inserts the resulting nodes== into the DOM tree at ==a specified position==.

The `insertAdjacentHTML()` method ==does not reparse the element it is being used on==, and thus it ==does not corrupt the existing elements inside that element==. This avoids the extra step of serialization, making it much faster than direct [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) manipulation.

## Syntax

```js
element.insertAdjacentHTML(position, text);
```

## Parameters

#### `position`

A string representing the position relative to the element. Must be one of the following strings:

|    String     |                   Description                   |
| :-----------: | :---------------------------------------------: |
| "beforebegin" |               Before the element                |
| "afterbegin"  | Just inside the element, before its first child |
|  "beforeend"  |  Just inside the element, after its last child  |
|  "afterend"   |                After the element                |

> **Note**: _beforebegin_ and _afterend_ are only valid if the element is in the DOM tree and has a parent element.

> We can visualize the possible positions for the inserted content as follows:
>
> ```html
> <!-- beforebegin -->
> <p>
>   <!-- afterbegin -->
>   foo
>   <!-- beforeend -->
> </p>
> <!-- afterend -->
> ```
>

#### `text`

The string to be parsed as HTML or XML and inserted into the tree.

## Return value

None (`undefined`).

## Security considerations

When inserting HTML into a page by using `insertAdjacentHTML()`, be careful not to use user input that hasn't been escaped. 

==You should not use `insertAdjacentHTML()` when inserting plain text==. Instead, use the [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property or the [`Element.insertAdjacentText()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText) method. This doesn't interpret the passed content as HTML, but instead inserts it as raw text.

## References

1. [Element.insertAdjacentHTML() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
2. [insertAdjacentHTML() - w3schools](https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp)
