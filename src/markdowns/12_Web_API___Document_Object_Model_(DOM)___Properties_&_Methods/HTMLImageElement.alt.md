# HTMLImageElement.alt

The `HTMLImageElement.alt` property ==provides fallback (alternate) text to display when the image specified by the [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element is not loaded==. This may be the case because of an error, because the user has disabled the loading of images, or because the image hasn't finished loading yet.

Perhaps the most important reason to use the `alt` property is to support [accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility), as the `alt` text may be used by screen readers and other assistive technologies to help differently-abled users make full use of your content. It will be read aloud or sent to the touch device, for example, to support visually impaired users.

The alternate text is displayed in the space the image would occupy and should be able to take the place of the image *without altering the meaning of the page*.

The `alt` attribute is officially mandatory; it's meant to always be specified. If the image doesn't require a fallback (such as for an image which is decorative or an advisory icon of minimal importance), you may specify an empty string (`""`). For compatibility reasons, browsers generally will accept an image without an `alt` attribute, but you should try to get into the habit of using it.

## Syntax

```js
imageObject.alt = value
```

## Value

A string which contains the alternate text to display when the image is not loaded or for use by assistive devices.

## References

1. [HTMLImageElement.alt - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)