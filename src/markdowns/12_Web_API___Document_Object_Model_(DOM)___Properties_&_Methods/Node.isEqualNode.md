# Node.isEqualNode()

The `isEqualNode()` method of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==tests whether two nodes are equal==. Two nodes are equal when they have the **same type**, defining **characteristics** (for elements, this would be their ID, number of children, and so forth), its attributes match, and so on. The specific set of data points that must match varies depending on the **types of the nodes**.

The `isEqualNode()` returns `true` if two nodes are equal. Two nodes are equal if all of the following conditions are true:

- They have the same _nodeType_
- They have the same _nodeName_
- They have the same _nodeValue_
- They have the same _nameSpaceURI_
- They have the same _childNodes with all the descendants_
- They have the same _attributes_ and _attribute values_
- They have the same _localName_ and _prefix_

## Syntax

```js
node.isEqualNode(otherNode);
```

## Parameters

#### `otherNode`

The `Node` to compare equality with. This parameter is not optional, but can be set to `null`.

## Return value

A boolean value that is `true` if the two nodes are equals, or `false` if not. If `otherNode` is `null`, `isEqualNode()` always return `false`.

## Examples

In this example, we create three `<div>` blocks. The first and third have the same contents and attributes, while the second is different. Then we run some JavaScript to compare the nodes using `isEqualNode()` and output the results:

```html
<div>This is the first element.</div>
<div>This is the second element.</div>
<div>This is the first element.</div>

<p id="output"></p>
```

```js
let output = document.getElementById("output");
let divList  = document.getElementsByTagName("div");

divList[0].isEqualNode(divList[0]); // true
divList[0].isEqualNode(divList[1]); // false
divList[0].isEqualNode(divList[2]); // true
```

## References

1. [Node.isEqualNode() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode)

2. [HTML DOM Element isEqualNode() - w3schools](https://www.w3schools.com/jsref/met_node_isequalnode.asp)
