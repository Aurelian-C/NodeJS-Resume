# HTMLElement.blur()

The `HTMLElement.blur()` method ==removes keyboard focus from the current element==.

## Syntax

```js
element.blur()
```

## Parameters

None.

## Return value

None (`undefined`).

## Examples

### Remove focus from a text input

```html
<input type="text" id="sampleText" value="Sample Text" /> <br /><br />
```

```js
// This function will remove focus from a text input
function focusInput() {
  const textField = document.getElementById("sampleText");

  textField.focus();

  // The input will lose focus after 3 seconds
  setTimeout(() => {
    textField.blur();
  }, 3000);
}
```

## References

1. [HTMLElement.blur() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur)
2. [HTML DOM Element blur() - w3schools](https://www.w3schools.com/JSREF/met_html_blur.asp)