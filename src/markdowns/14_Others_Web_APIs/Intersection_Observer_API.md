# Intersection Observer API

The Intersection Observer API provides a way to ==**asynchronously** observe **changes** in the **intersection** of a **target element** with an **ancestor element**, or with a top-level document's **viewport**==.

## History of implementing intersection detection

Historically, ==detecting visibility of an element==, or the ==relative visibility of two elements in relation to each other==, has been a difficult task for which solutions have been unreliable and prone to causing the browser and the sites the user is accessing to become sluggish. As the web has matured, the need for this kind of information has grown. ==Intersection information== is needed for many reasons, such as:

- Lazy-loading of images or other content as a page is scrolled.
- Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
- Reporting of visibility of advertisements in order to calculate ad revenues.
- Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.

==Implementing intersection detection== in the past involved event handlers and loops calling methods like `Element.getBoundingClientRect()` to build up the needed information for every element affected. Since all this code runs on the main thread, even one of these can cause ==performance problems==. When a site is loaded with these tests, things can get downright ugly.

Consider a web page that uses infinite scrolling. It uses a vendor-provided library to manage the advertisements placed periodically throughout the page, has animated graphics here and there, and uses a custom library that draws notification boxes and the like. Each of these has its own intersection detection routines, all running on the main thread. The author of the web site may not even realize this is happening, since they may know very little about the inner workings of the two libraries they are using. As the user scrolls the page, these intersection detection routines are firing constantly during the scroll handling code, resulting in an experience that leaves the user frustrated with the browser, the web site, and their computer.

## Intersection Observer API

The Intersection Observer API lets code register a ==**callback function**== that is ==executed whenever an element they wish to monitor enters or exits another element (or the viewport)==, or ==when the amount by which the two intersect changes by a requested amount==. This way, *sites no longer need to do anything on the main thread to watch for this kind of element intersection, and the browser is free to optimize the management of intersections as it sees fit*.

One thing the Intersection Observer API can't tell you: the exact number of pixels that overlap or specifically which ones they are; however, it covers the much more common use case of "If they intersect by somewhere around N%, I need to do something".

## IntersectionObserver concepts and usage

The Intersection Observer API allows you to ==**configure a callback**== that is *called when either of these circumstances occur*:

- ==A **target element** _intersects_ either the device's **viewport** or a **specified element**==. That specified element is called the ==**root element**== or root for the purposes of the Intersection Observer API.
- The first time the observer is initially asked to watch a target element.

Typically, you'll want to watch for intersection changes with regard to the target element's closest scrollable ancestor, or, if the target element isn't a descendant of a scrollable element, the device's viewport.

*Whether you're using the viewport or some other element as the root, the API works the same way, executing a callback function you provide whenever the visibility of the target element changes, so that it crosses desired amounts of intersection with the root*.

## Syntax

```js
new IntersectionObserver(callback);
new IntersectionObserver(callback, options);
```

`callback`: A function which is _called each time that the observed element (target element) is intersecting the root element at the threshold that you defined, no matter if we are scrolling up, down, left or right._. The callback receives as input two parameters:

- `entries`: An ==**array**== of `IntersectionObserverEntry` objects.
- `observer`: The `IntersectionObserver` for which the callback is being invoked.

`options` (optional): An optional ==**object** which **customizes** the observer==. If `options` isn't specified, the observer uses the document's viewport as the root, with no margin, and a 0% threshold (meaning that even a one-pixel change is enough to trigger a callback). You can provide any combination of the following options:

- `root`: An `Element` or `Document` object which is an ==ancestor of the intended target==, whose bounding rectangle will be considered the viewport. Any part of the target not visible in the visible area of the root is not considered visible.

- `rootMargin`: A ==string== which specifies a set of offsets to add to the root's bounding_box when calculating intersections, effectively shrinking or growing the root for calculation purposes. The syntax is approximately the same as that for the CSS `margin` property; The default is "0px 0px 0px 0px".

- `threshold`: Either ==a single number or an array of numbers between 0.0 and 1.0==, specifying a ratio of intersection area to total bounding box area for the observed target. A value of 0.0 means that even a single visible pixel counts as the target being visible. 1.0 means that the entire target element is visible. The default is a threshold of 0.0.

## Return value

_A new `IntersectionObserver` which can be used to watch for the visibility of a target element within the specified `root`_ crossing through any of the specified visibility `thresholds`. Call its `observe()` method to begin watching for the visibility changes on a given target.

## Creating an `IntersectionObserver`

You create the `IntersectionObserver` by ==calling its **constructor**== and ==passing it a **callback function**== that will get called each time that the ==**observed element** (target element)== is intersecting the ==**root element**== at the ==threshold== that you defined, no matter if we are scrolling up, down, left or right. This callback function will get called with two arguments, and that's the ```entries``` and the ```observer``` object itself.

```js
const targetElement = document.querySelector('anyCCSselector')

const callback = function (entries, observer) {
  const [entry] = entries; //Destructuring the entries array into a separate variable
};

const options = {
  root: document.querySelector('anyCSSselector'), // null is default
  rootMargin: '0px',
  threshold: [0, 0.5, 1],
};

const observer = new IntersectionObserver(callback, options);

observer.observe(targetElement);
```

## `IntersectionObserver` callback

The `callback` function will get called with two arguments and that's the ```entries``` array and the ```observer object``` itself ( `new IntersectionObserver()`):

```js
const callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

The list of entries received by the callback includes one entry for each target which reported a change in its intersection status:

- `entry.boundingClientRect` (read only) - returns the bounds rectangle of the target element as a `DOMRectReadOnly`. The bounds are computed as described in the documentation for `Element.getBoundingClientRect()`.

- `entry.intersectionRatio` (read only) - returns the ratio of the `intersectionRect` to the `boundingClientRect`.

- `entry.intersectionRect` (read only) - returns a `DOMRectReadOnly` representing the target's visible area.

- `entry.isIntersecting` (read only) - a Boolean value which is `true` if the target element intersects with the intersection observer's root. If this is `true`, then, the `IntersectionObserverEntry` describes a transition into a state of intersection; if it's `false`, then you know the transition is from intersecting to not-intersecting.

- `entry.rootBounds` (read only) - returns a `DOMRectReadOnly` for the intersection observer's root.

- `entry.target` (read only) - the `Element` whose intersection with the root changed.

- `entry.time` (read only) - a `DOMHighResTimeStamp` indicating the time at which the intersection was recorded, relative to the `IntersectionObserver`'s `time origin`.

The `callback` function will get called each time that the **observed element** _(target element) is intersecting the_ **root element** _at the threshold that we defined, no matter if we are scrolling up or down_.

## `IntersectionObserver` options

The `options` object passed into the `IntersectionObserver()` constructor let you ==control the circumstances under which the observer's callback is invoked==. It has the following fields:

- `root` - the element that is used as the viewport for **checking visibility of the target**. ==Must be the **ancestor of the target**==. Defaults to the browser viewport if not specified or if `null`.

- `rootMargin` - margin around the ```root```. Can have values similar to the CSS `margin` property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.

- `threshold` - either a single **number** or an ==**array of numbers**== which indicate at ==what **percentage of the target's visibility** the observer's callback should be executed==. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. **The default is 0** (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible. A threshold of 1.0 means that when 100% of the target is visible within the element specified by the `root` option, the callback is invoked.

## Targeting an element to be observed

Once you have created the observer, you need to give it a target element to watch:

```js
const targetElement = document.querySelector('anyCSSselector');
observer.observe(targetElement);

// the callback we setup for the observer will be executed now for the first time. It waits until we assign a target to our observer (even if the target is currently not visible)
```

Whenever the target meets a threshold specified for the `IntersectionObserver`, the callback is invoked. Also, note that if you specified the `root` option, ==**the target must be a descendant of the root element**==.

## `IntersectionObserver` methods

The primary interface for the Intersection Observer API. Provides **methods** for **creating and managing an observer** which can watch any number of target elements for the same intersection configuration. Each observer can asynchronously observe changes in the intersection between one or more target elements and a shared ancestor element or with their top-level Document's viewport. The ancestor or viewport is referred to as the root.

###### `IntersectionObserver` methods

- [`IntersectionObserver.disconnect()`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect) - stops the `IntersectionObserver` object from observing any target.

- [`IntersectionObserver.observe()`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe) - tells the `IntersectionObserver` a target element to observe.

- [`IntersectionObserver.takeRecords()`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/takeRecords) - returns an array of [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) objects for all observed targets.

- [`IntersectionObserver.unobserve()`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/unobserve) - tells the `IntersectionObserver` to stop observing a particular target element.

## References

1. [IntersectionObserver API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

2. [IntersectionObserver interface - MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)

3. [IntersectionObserver() constructor - MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

4. [IntersectionObserverEntry - MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)
