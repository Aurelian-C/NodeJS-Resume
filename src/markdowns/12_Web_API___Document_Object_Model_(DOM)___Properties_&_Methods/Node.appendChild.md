# Node.appendChild()

The `appendChild()` method of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==adds a node **to the end of the list of children** of a specified parent node==. If the given child is a reference to an existing node in the document, `appendChild()` moves it from its current position to the new position.

> **Note**: There is no requirement to remove the node from its parent node before appending it to some other node. This means that ==a node can't be in two points of the document simultaneously==.

Unlike `appendChild()` method, the [`Element.append()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/append) method _supports multiple arguments and appending strings_. You can prefer using it if your node is an `Element`.

Differences from `Element.append()`:

|             `Element.append()`             |        `Node.appendChild()`        |
| :----------------------------------------: | :--------------------------------: |
| Allows you to also append _string objects_ |    Only accepts _Node objects_     |
|             _No return_ value              | _Returns_ the appended Node object |
|   Can append _several nodes and strings_   |     Can only append _one node_     |

## Syntax

```js
node.appendChild(aChild);
```

## Parameters

#### `aChild`

The node to append to the given parent node (commonly an element).

## Return Value

The appended node.

## Some considerations about `appendChild()`

If the given child is a reference to an existing node in the document, `appendChild()` moves it from its current position to the new position — there is no requirement to remove the node from its parent node before appending it to some other node. This means that a node can't be in two points of the document simultaneously. The [`Node.cloneNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode) method can be used to make a copy of the node before appending it under the new parent. Copies made with `cloneNode` are not automatically kept in sync.

`appendChild()` returns the newly appended node, instead of the parent node. This means you can append the new node as soon as it's created without losing reference to it:

```js
const paragraph = document.body.appendChild(document.createElement('p'));
// You can append more elements to the paragraph later
```

## Examples

### Append a paragraph to the body

```js
// Create a new paragraph element, and append it to the end of the document body
let p = document.createElement('p');
document.body.appendChild(p);
```

### Creating a nested DOM structure

In this example, we attempt to create a nested DOM structure using as few temporary variables as possible.

```js
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement('section'))
  .appendChild(document.createElement('ul'))
  .appendChild(document.createElement('li'));
li.textContent = 'hello world';

document.body.appendChild(fragment);
```

It generates the following DOM tree:

```html
<section>
  <ul>
    <li>hello world</li>
  </ul>
</section>
```

## References

1. [Node.appendChild() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
2. [appendChild() - MDN](https://www.w3schools.com/Jsref/met_node_appendchild.asp)
