# HTMLMediaElement.src

The `HTMLMediaElement.src` property ==reflects the value of the HTML media element's `src` attribute, which indicates the URL of a media resource to use in the element==. The `HTMLMediaElement.src` property **sets** or **return** the value of the `src` attribute of an `mediaObject`.

## Syntax

```js
// Return the src property
mediaObject.src;

// Set the src property
mediaObject.src = value;
```

## Value

A ==string== object containing the URL of a media resource to use in the element; this property reflects the value of the HTML element's `src` attribute.

## Examples

```js
const obj = document.createElement('video');
console.log(obj.src); // ""
```

## References

1. [HTMLMediaElement.src - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/src)
