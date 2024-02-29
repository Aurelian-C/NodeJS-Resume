# Element.insertAdjacentText()

The `insertAdjacentText()` method of the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface, given a relative position and a string, inserts a new text node at the given position relative to the element it is called from, so ==`insertAdjacentText()` inserts a a text into a specified position==.

## Syntax

```js
element.insertAdjacentText(position, text);
```

## Parameters

#### `position`

A string representing the position relative to the element the method is called from. Must be one of the following strings:

|    String     |                   Description                   |
| :-----------: | :---------------------------------------------: |
| "beforebegin" |            Before the element itself            |
| "afterbegin"  | Just inside the element, before its first child |
|  "beforeend"  |  Just inside the element, after its last child  |
|  "afterend"   |            After the element itself             |

> **Note**: The _beforebegin_ and _afterend_ positions work only if the node is in a tree and has an element parent.
>
> We can visualize the possible positions for the inserted content as follows:
>
> ```js
> <!-- beforebegin -->
> <p>
>   <!-- afterbegin -->
>   foo
>   <!-- beforeend -->
> </p>
> <!-- afterend -->
> ```

#### `text`

A string from which to create a new text node to insert at the given position relative to the element the method is called from.

## Return value

None (`undefined`).

## References

1. [Element.insertAdjacentText() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText)
2. [insertAdjacentText() - w3schools](https://www.w3schools.com/jsref/met_node_insertadjacenttext.asp)
