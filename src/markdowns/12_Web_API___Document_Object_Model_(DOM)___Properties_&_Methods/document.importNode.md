# Document.importNode()

The [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object's `importNode()` method ==creates a copy of a [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) or [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) from another document==, to be inserted into the current document later. 

==The imported node is not yet included in the document tree. To include it, you need to call an insertion method such as [`appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) or [`insertBefore()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) with a node that *is* currently in the document tree==.

Unlike [`document.adoptNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptNode), the original node is not removed from its original document. The imported node is a clone of the original.

The `importNode()` method:

- imports a node from another document
- with the second parameter set to `true`, child nodes will also be imported
- the imported node is not removed from the original document
- the imported node is a copy of the original

## Syntax

```js
document.importNode(externalNode)
document.importNode(externalNode, deep)
```

## Parameters

#### `externalNode`

The external `Node` or `DocumentFragment` to import into the current document.

#### `deep` _(optional)_

A boolean flag, whose default value is `false`, which controls whether to include the entire DOM subtree of the `externalNode` in the import.

- If `deep` is set to `true`, then `externalNode` and all of its descendants are copied.
- If `deep` is set to `false`, then only `externalNode` is imported — the new node has no children.

## Return Value

The copied `importedNode` in the scope of the importing document.

> **Note:** `importedNode`'s [`Node.parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode) is `null`, since it has not yet been inserted into the document tree!

## Notes

Before they can be inserted into the current document, nodes from external documents should either be:

- cloned using `document.importNode()`; _or_
- adopted using [`document.adoptNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptNode).

## Examples

```js
const iframe  = document.querySelector("iframe");
const oldNode = iframe.contentWindow.document.getElementById("myNode");
const newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## References

1. [Document.importNode() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode)
1. [Document importNode() - w3schools](https://www.w3schools.com/jsref/met_document_importnode.asp)
