# Element.prepend()

The `Element.prepend()` method ==inserts a set of [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) objects or string objects **before the first child** of the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)==. String objects are inserted as equivalent [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) nodes.

## Syntax

```js
element.prepend(param1)
element.prepend(param1, param2)
element.prepend(param1, param2, /* … ,*/ paramN)
```

## Parameters

#### `param1`, …, `paramN`

A set of `Node` or string objects to insert.

## Return value

None (`undefined`).

## Examples

### Prepending an element:

```js
let div = document.createElement('div');
let p = document.createElement('p');
let span = document.createElement('span');
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]
```

### Prepending text

```js
let div = document.createElement('div');
div.append('Some text');
div.prepend('Headline: ');

console.log(div.textContent); // "Headline: Some text"
```

### Prepending an element and text

```js
let div = document.createElement('div');
let p = document.createElement('p');
div.prepend('Some text', p);

console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]
```

## References

1. [Element.prepend() - MDN](https://developer.mozilla.org/en-US/docs/web/api/element/prepend)
