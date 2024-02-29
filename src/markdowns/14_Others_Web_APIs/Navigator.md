# Navigator

The `Navigator` interface ==represents the **state** and the **identity** of the **user agent**. It allows scripts to query it and to register themselves to carry on some activities==. A `Navigator` object can be retrieved using the read-only [`window.navigator`](https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator) property.

> **Note**: The `Navigator` interface doesn't inherit any properties or methods.

## Syntax

The `window.navigator` ==read-only== property ==**returns a reference to the `Navigator` object**, which has methods and properties about the application running the script==.

```js
window.navigator;
```



## Some of Navigator standard properties

### [`Navigator.language`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)

The `Navigator.language` ==read-only== property ==returns a string representing the preferred language of the user==, usually the language of the browser UI. The `null` value is returned when this is unknown.

Examples of valid language codes include "en", "en-US", "fr", "fr-FR", "es-ES", etc. Note that in Safari on iOS prior to 10.2, the country code returned is lowercase: "en-us", "fr-fr" etc.

```js
navigator.language   //"en-US"
navigator.languages  //["en-US", "zh-CN", "ja-JP"]
```

### [`Navigator.languages`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages)

The `Navigator.languages` ==read-only== property ==returns an array of strings representing the languages known to the user, by order of preference==. In the returned array they are ordered by preference with the most preferred language first. 

The value of `navigator.language` is the first element of the returned array.

When its value changes, as the user's preferred languages are changed a [`languagechange`](https://developer.mozilla.org/en-US/docs/Web/API/Window/languagechange_event) event is fired on the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object.

```js
navigator.language   //"en-US"
navigator.languages  //["en-US", "zh-CN", "ja-JP"]
```

### [`Navigator.geolocation`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation)

The `Navigator.geolocation` ==read-only== property ==returns a [`Geolocation`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation) object allowing accessing the location of the device==. This allows a Web site or app to offer customized results based on the user's location.

> **Note:** For security reasons, when a web page tries to access location information, the user is notified and asked to grant permission. Be aware that each browser has its own policies and methods for requesting this permission.

> **Secure context:** This feature is available only in [secure contexts](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts) (HTTPS), in some or all supporting browsers.

```js
navigator.geolocation
```

#### [`Geolocation.getCurrentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) _(secure context)_

Determines the device's current location and gives back a [`GeolocationPosition`](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition) object with the data.

> **Note**: The **`GeolocationPosition`** interface represents the position of the concerned device at a given time. The position, represented by a [`GeolocationCoordinates`](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates) object, comprehends the 2D position of the device, on a spheroid representing the Earth, but also its altitude and its speed.

#### [`Geolocation.watchPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition) _(secure context)_

Returns a `long` value representing the newly established callback function to be invoked whenever the device location changes.

#### [`Geolocation.clearWatch()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/clearWatch) _(secure context)_

Removes the particular handler previously installed using `watchPosition()`.

#### For more properties see [Standard properties of Navigator interface](https://developer.mozilla.org/en-US/docs/Web/API/Navigator#standard_properties).

## References

1. [Navigator - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
2. [`window.navigator` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator)