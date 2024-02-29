# Node.insertBefore()

The `insertBefore()` method of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==inserts a node **before a *reference node* as a child** of a specified *parent node*==.

> The `insertBefore()` method inserts a child node before an existing child.

If the given node already exists in the document, `insertBefore()` moves it from its current position to the new position (that is, it will automatically be removed from its existing parent before appending it to the specified new parent; this means that _a node cannot be in two locations of the document simultaneously_).

> **Note**: The [`Node.cloneNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode) can be used to make a copy of the node before appending it under the new parent. Note that the copies made with `cloneNode()` will not be automatically kept in sync.

## Syntax

```js
node.insertBefore(newNode, referenceNode);
```

## Parameters

#### `newNode`

The node to be inserted.

#### `referenceNode`

The node before which `newNode` is inserted. If this is `null`, then `newNode` is inserted at the end of node's child nodes. 

> **Note**: `referenceNode` is _not an optional parameter_. You must explicitly pass a `Node` or `null`.

## Return value

Returns the added child node.

## Examples

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  // Create a new, plain <span> element
  let sp1 = document.createElement("span");

  // Get the reference element
  let sp2 = document.getElementById("childElement");
    
  // Get the parent element
  let parentDiv = sp2.parentNode;

  // Insert the new element into before sp2
  parentDiv.insertBefore(sp1, sp2);
</script>
```

> **Note**: There is no `insertAfter()` method; it can be emulated by combining the `insertBefore` method with [`Node.nextSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling).
>
> In the previous example, `sp1` could be inserted after `sp2` using:
>
> ```js
> parentDiv.insertBefore(sp1, sp2.nextSibling)
> ```
>
> If `sp2` does not have a next sibling, then it must be the last child — `sp2.nextSibling` returns `null`, and `sp1` is inserted at the end of the child node list (immediately after `sp2`).

## References

1. [Node.insertBefore() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
2. [insertBefore() - w3schools](https://www.w3schools.com/jsref/met_node_insertbefore.asp)
