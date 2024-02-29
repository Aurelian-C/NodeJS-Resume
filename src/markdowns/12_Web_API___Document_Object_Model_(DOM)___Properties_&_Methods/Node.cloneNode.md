# Node.cloneNode()

The `cloneNode()` method of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==**returns a duplicate** of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not==.

==Cloning a node _copies all of its attributes and their values, including intrinsic (inline) listeners_. It does _not copy event listeners added using_ [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) or those assigned to element properties (e.g., `node.onclick = someFunction`)==. Additionally, for a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element, the painted image is not copied.

> **Warning**: ==`cloneNode()` may lead to duplicate element IDs== in a document!
>
> If the original node has an `id` attribute, and the clone will be placed in the same document, then you should modify the clone's ID to be unique.
>
> Also, `name` attributes may need to be modified, depending on whether duplicate names are expected.

To clone a node to insert into a *different* document, use [`Document.importNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode) instead.

## Syntax

```js
node.cloneNode()
node.cloneNode(deep)
```

## Parameters

#### `deep` _(optional)_

- `false` _(default)_: Clone only the node and its attributes. The subtree, including any text that the node contains, is not cloned.
- `true`: Clone the node, its attributes, and its descendants (including text that may be in child `Text` nodes, is also copied).

> **Note**: Set `deep` parameter to `true` if you also want to clone descendants (children). 
>
> `deep` parameter has no effect on [void elements](https://developer.mozilla.org/en-US/docs/Glossary/Void_element), such as the [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) and [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) elements. 

## Return value

The new `Node` cloned. 

> **Note**: The cloned node has no parent and is not part of the document, _until_ it is added to another node that is part of the document, using [`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) or a similar method.

## Examples

```js
let p = document.getElementById('para1');
let p_prime = p.cloneNode(true);
```

## Some considerations about copy/move a DOM object

==You learned that inserting an element more than once will **move** that element and **not copy** it==. If you would want to copy an element, then you can do this with another method which is available on every DOM node object an is called `cloneNode()`. This method will clone a node and will really ==**return a brand new one**==.

## References

1. [Node.cloneNode() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)
2. [cloneNode() - w3schools](https://www.w3schools.com/Jsref/met_node_clonenode.asp)
