# Node.removeChild()

The `removeChild()` method of the [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface ==removes a child node from the DOM and returns the removed node==. However, the returned node can be modified and inserted back into the DOM.

> **Note**: ==As long as a reference is kept on the removed child, it still exists in memory, but is no longer part of the DOM. It can still be reused later in the code. If the return value of `removeChild()` is not stored, and no other reference is kept, it will be automatically deleted from memory after a short time==.

Unlike [`Node.cloneNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode), the return value preserves the [`EventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) objects associated with it.

## Syntax

```js
node.removeChild(child);
```

## Parameters

#### `child`

A `Node` that is the child node to be removed from the DOM.

## Return Value

The removed node. `null` if the child does not exist.

## Examples

```html
<div id="top">
  <div id="nested"></div>
</div>
```

```js
let d = document.getElementById("top");
let d_nested = document.getElementById("nested");
let throwawayNode = d.removeChild(d_nested);

// To remove a specified element without having to specify its parent node
let node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
};

// To remove all children from an element
let element = document.getElementById("idOfParent");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

## Remove objects from DOM & memory leaks

==If you delete/remove an object from the DOM and you have no reference to that object in your code anymore, then JavaScript or the browser will automatically clear everything that is related to that DOM object, including any event listeners, so it will clear the event listeners for you automatically==.

## References

1. [Node.removeChild() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
2. [removeChild() - w3schools](https://www.w3schools.com/jsref/met_node_removechild.asp)
