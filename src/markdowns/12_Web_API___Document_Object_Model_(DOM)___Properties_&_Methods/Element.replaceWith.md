# Element.replaceWith()

The `Element.replaceWith()` method ==replaces this `Element` in the children list of its parent with a set of [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) or string objects==. String objects are inserted as equivalent [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) nodes.

## Syntax

```js
element.replaceWith(param1)
element.replaceWith(param1, param2)
element.replaceWith(param1, param2, /* … ,*/ paramN)
```

## Parameters

#### `param1`, …, `paramN`

A set of `Node` or string objects to replace.

## Return value

None (`undefined`).

## Examples

```js
const div = document.createElement('div');
const p = document.createElement('p');
div.appendChild(p);
const span = document.createElement('span');

p.replaceWith(span);

console.log(div.outerHTML); // "<div><span></span></div>"
```

## References

1. [Element.replaceWith() - MDN](https://developer.mozilla.org/en-US/docs/web/api/element/replacewith)
