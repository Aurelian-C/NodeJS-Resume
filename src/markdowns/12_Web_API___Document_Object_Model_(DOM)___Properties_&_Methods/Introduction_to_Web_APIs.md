# Introduction to Web APIs

_When writing code for the Web, there are a large number of **Web APIs** and **interfaces (object types) **available, that you may be able to use while developing your Web app or site_. ==Web APIs are typically used with JavaScript, although this doesn't always have to be the case==. Before we talk about what Web APIs are, we need to know what an API is.

## What is an API?

An API (**A**pplication **P**rogramming **I**nterface) is a set of features and rules that exist inside a software program (the application), enabling interaction with it through software - as opposed to a human user interface. ==The API can be seen as a simple contract (**the interface**) between the application offering it and other items, such as third party software or hardware, so an API is a **software intermediary that allows two applications to talk to each other**==.

## Web APIs

==In Web development, an API is generally **a set of code features (e.g. [methods](https://developer.mozilla.org/en-US/docs/Glossary/Method), [properties](https://developer.mozilla.org/en-US/docs/Glossary/property), events, and [URLs](https://developer.mozilla.org/en-US/docs/Glossary/URL)) that a developer can use in their apps** for interacting with components of a user's web browser, or other software/hardware on the user's computer, or third party websites and services==, for example:

- The [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) API can be used to grab audio and video from a user's webcam, which can then be used in any way the developer likes, for example, recording video and audio, broadcasting it to another user in a conference call, or capturing image stills from the video.
- The [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation) can be used to retrieve location information from whatever service the user has available on their device (e.g. GPS), which can then be used in conjunction with the [Google Maps APIs](https://developers.google.com/maps/) to for example plot the user's location on a custom map and show them what tourist attractions are in their area.
- The [Twitter APIs](https://developer.twitter.com/en/docs) can be used to retrieve data from a user's twitter accounts, for example, to display their latest tweets on a web page.
- The [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) can be used to animate parts of a web page — for example, to make images move around or rotate.

## Web APIs build into the browser & Third Party APIs

==As you can see, in Web development we can have **Web APIs build into the browser**, and **external Web APIs that are also called Third Party APIs**==. 

All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data. Third Party APIs are not built into your browser and to use these APIs, you will have to download the code from the Web. More examples of Third Party APIs:

- [YouTube API](https://developers.google.com/youtube/v3) - Allows you to display videos on a web site.
- [Facebook API](https://developers.facebook.com/) - Allows you to display Facebook info on a web site.

## Examples of Web APIs that are build into the browser

- [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [HTML DOM](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)
- [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API)
- [UI Events](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events)
- ...

## References

1. [API - MDN](https://developer.mozilla.org/en-US/docs/Glossary/API)
2. [Web APIs - MDN](https://developer.mozilla.org/en-US/docs/Web/API)