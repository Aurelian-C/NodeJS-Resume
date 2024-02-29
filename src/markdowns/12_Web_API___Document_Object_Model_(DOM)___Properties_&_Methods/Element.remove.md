# Element.remove()

The `Element.remove()` method ==removes the element (or node) from the DOM==.

## Syntax

```js
element.remove();
```

## Examples

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<div id="div-03">Here is div-03</div>
```

```js
const element = document.getElementById('div-02');
element.remove(); // Removes the div with the 'div-02' id
```

## Remove objects from DOM & memory leaks

==If you delete/remove an object from the DOM and you have no reference to that object in your code anymore, then JavaScript or the browser will automatically clear everything that is related to that DOM object, including any event listeners, so it will clear the event listeners for you automatically==.

## References

1. [Element.remove() - MDN](https://developer.mozilla.org/en-US/docs/web/api/element/remove)
2. [remove() - w3schools](https://www.w3schools.com/jsref/met_element_remove.asp)
