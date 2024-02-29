# HTMLInputElement.select()

The `HTMLInputElement.select()` method ==**selects all the text** in a [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) element or in an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element _that includes a text field_==.

## Syntax

```js
textObject.select();
```

## Parameters

None.

## Return value

None (`undefined`).

## Examples

```html
<input type="text" id="text-box" size="20" value="Hello world!" />
```

```js
// This function select all the text in the <input> element
function selectText() {
  const input = document.getElementById('text-box');
  input.focus();
  input.select();
}
```

## References

1. [HTMLInputElement.select() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
2. [select() - w3schools](https://www.w3schools.com/jsref/met_text_select.asp)
