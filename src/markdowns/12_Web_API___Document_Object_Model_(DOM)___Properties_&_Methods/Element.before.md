# Element.before()

The `Element.before()` method ==inserts a set of [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) or string objects in the children list of this `Element`'s parent, just **before** this `Element`==. String objects are inserted as equivalent [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) nodes.

## Syntax

```js
element.before(param1)
element.before(param1, param2)
element.before(param1, param2, /* … ,*/ paramN)
```

## Parameters

#### `param1`, …, `paramN`

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

p.before(span);

console.log(container.outerHTML);
// "<div><span></span><p></p></div>"
```

### Inserting text

```js
let container = document.createElement('div');
let p = document.createElement('p');
container.appendChild(p);

p.before('Text');

console.log(container.outerHTML);
// "<div>Text<p></p></div>"
```

### Inserting an element and text

```js
let container = document.createElement('div');
let p = document.createElement('p');
container.appendChild(p);
let span = document.createElement('span');

p.before(span, 'Text');

console.log(container.outerHTML);
// "<div><span></span>Text<p></p></div>"
```

## References

1. [Element.before() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/before)
