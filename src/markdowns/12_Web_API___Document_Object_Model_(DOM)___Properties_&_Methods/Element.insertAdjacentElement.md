# Element.insertAdjacentElement()

The `insertAdjacentElement()` method of the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface ==_inserts a given element_ node at a _given position_ relative to the element it is invoked upon==.

## Syntax

```js
targetElement.insertAdjacentElement(position, element);
```

## Parameters

#### `position`

A string representing the position relative to the `targetElement`. Must be one of the following strings:

|    String     |                       Description                       |
| :-----------: | :-----------------------------------------------------: |
| "beforebegin" |            Before the `targetElement` itself            |
| "afterbegin"  | Just inside the `targetElement`, before its first child |
|  "beforeend"  |  Just inside the `targetElement`, after its last child  |
|  "afterend"   |            After the `targetElement` itself             |

> **Note**: The _beforebegin_ and _afterend_ positions work only if the node is in a tree and has an element parent.
>
> We can visualize the possible positions for the inserted element as follows:
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

#### `element`

The element to be inserted into the tree.

## Return value

The element that was inserted, or `null`, if the insertion failed.

## Errors

|  Error Type   |                    Explanation                     |
| :-----------: | :------------------------------------------------: |
| `SyntaxError` | The `position` specified is not a recognized value |
|  `TypeError`  |   The `element` specified is not a valid element   |

## Examples

```js
const span = document.getElementById('mySpan');
const h2 = document.getElementById('myH2');
h2.insertAdjacentElement('afterbegin', span);
```

## References

1. [Element.insertAdjacentElement() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)
2. [insertAdjacentElement() - w3schools](https://www.w3schools.com/jsref/met_node_insertadjacentelement.asp)
