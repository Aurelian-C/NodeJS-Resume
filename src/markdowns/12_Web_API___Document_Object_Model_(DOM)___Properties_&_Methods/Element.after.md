# Element.after()

The `Element.after()` method ==inserts a set of [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) or string objects in the children list of the `Element`'s parent, just **after** the `Element`==. String objects are inserted as equivalent [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) nodes.

## Syntax

```js
element.after(node1)
element.after(node1, node2)
element.after(node1, node2, /* … ,*/ nodeN)
```

## Parameters

#### `node1`, …, `nodeN`

A set of `Node` or string objects to insert.

## Return value

None (`undefined`).

## Examples

### Inserting an element

```js
let container = document.createElement('div');
let p = document.createElement('p');
container.appendChild(p);
let span = document.createElement('span');

p.after(span);

console.log(container.outerHTML);
// "<div><p></p><span></span></div>"
```

### Inserting text

```js
let container = document.createElement('div');
let p = document.createElement('p');
container.appendChild(p);

p.after('Text');

console.log(container.outerHTML);
// "<div><p></p>Text</div>"
```

### Inserting an element and text

```js
let container = document.createElement('div');
let p = document.createElement('p');
container.appendChild(p);
let span = document.createElement('span');

p.after(span, 'Text');

console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>"
```

## References

1. [Element.after() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/after)
