# Node.nodeValue

The `nodeValue` property of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==**returns** _or_ **sets** the value of the current node==.

> **Note**: If you want to return the text of an element, remember that text is always inside a Text node, and you will have to return the Text node's node value (`element.childNodes[0].nodeValue`).

For other node types, the `nodeValue` property will return different values for different node types.

## Syntax

```js
// Return the node value
node.nodeValue;

// Set the node value
node.nodeValue = value;
```

## Value

A ==string== containing the value of the current node, if any.

> **Note:** When `nodeValue` is defined to be `null`, setting it has no effect.

## Return Value

- The node value.
- `null` for element and document nodes.
- The attribute value for attribute nodes.
- The text content for text nodes.
- The text content for comment nodes.

The following table shows the return values for different types of nodes.

|                             Node                             |         Value of nodeValue          |
| :----------------------------------------------------------: | :---------------------------------: |
| [`CDATASection`](https://developer.mozilla.org/en-US/docs/Web/API/CDATASection) |    Content of the CDATA section     |
| [`Comment`](https://developer.mozilla.org/en-US/docs/Web/API/Comment) |       Content of the comment        |
| [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) |               `null`                |
| [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) |               `null`                |
| [`DocumentType`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentType) |               `null`                |
| [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) |               `null`                |
| [`NamedNodeMap`](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap) |               `null`                |
| [`ProcessingInstruction`](https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction) | Entire content excluding the target |
| [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) |      Content of the text node       |

## References

1. [Node.nodeValue - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue)

2. [HTML DOM nodeValue Property - w3schools](https://www.w3schools.com/jsref/prop_node_nodevalue.asp)
