# How DOM API is organized behind the scenes

When writing code for the Web, there are a large number of ==**Web APIs**== and ==**interfaces (object types)**== available, that you may be able to use while developing your Web app or site. Web APIs are typically used with JavaScript, although this doesn't always have to be the case.

==The HTML DOM API is **made up of the interfaces that define the functionality of each of the [elements](https://developer.mozilla.org/en-US/docs/Glossary/Element) in [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML)**, as well as any supporting types and interfaces they rely upon==.

![DOM_API](../../img/DOM_API.jpg)

![dom_tree-of-objects](../../img/dom_tree-of-objects.jpg)

==A document containing HTML is described using the **[`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) interface**, which is extended by the HTML specification to include various HTML-specific features. In particular, the **[`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface** is enhanced to become **[`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)** and various subclasses, each representing one of (or a family of closely related) elements==.

In this article, we'll focus on the parts of the HTML DOM that involve engaging with HTML elements.

### Structure of an HTML document

==The Document Object Model ([DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM)) is an architecture that describes the structure of a [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document); **each document is represented by an instance of the interface [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document)**. A document, in turn, consists of a hierarchical **tree of nodes**, in which a node is a fundamental record representing a single _object_ within the document (such as an element or text node)==.

> [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) is an [API](https://developer.mozilla.org/en-US/docs/Glossary/API) that represents and interacts with any [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML) or [XML](https://developer.mozilla.org/en-US/docs/Glossary/XML) document. The DOM is a document model loaded in the [browser](https://developer.mozilla.org/en-US/docs/Glossary/Browser) and representing the document as a node tree, where each node represents part of the document (e.g. an element, text string, or comment).
>
> DOM allows code running in a browser to access and interact with every node in the document. Nodes can be created, moved and changed. Event listeners can be added to nodes and triggered on occurrence of a given event.

Nodes may be strictly organizational, providing a means for grouping other nodes together or for providing a point at which a hierarchy can be constructed; other nodes may represent visible components of a document. ==Each node is based on the **[`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface**, which provides properties for getting information about the node, as well as methods for creating, deleting, and organizing nodes within the DOM==.

Nodes don't have any concept of including the content that is actually displayed in the document. They're empty vessels. ==The fundamental notion of a node that can represent visual content is introduced by the **[`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface**. An `Element` object instance represents a single element in a document created using either HTML or an [XML](https://developer.mozilla.org/en-US/docs/Glossary/XML) vocabulary, such as [SVG](https://developer.mozilla.org/en-US/docs/Glossary/SVG)==.

## HTML element interfaces

==The `Element` interface has been further adapted to represent HTML elements specifically by introducing the **[`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) interface**, which all more specific HTML element classes inherit from. This _expands_ the `Element` class to add HTML-specific general features to the element nodes==. Properties added by `HTMLElement` include for example [`hidden`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden) and [`innerText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText).

==An HTML document is a DOM tree in which each of the nodes is an HTML element, represented by the `HTMLElement` interface. _The `HTMLElement` class, in turn, implements `Node`, so **every element is also a node (but not the other way around)**_. This way, the structural features implemented by the `Node` interface are also available to HTML elements, allowing them to be nested within each other, created and deleted, moved around, and so forth==. The `HTMLElement` interface is generic, however, providing only the functionality common to all HTML elements, such as the element's ID, its coordinates, the HTML making up the element, information about scroll position, and so forth.

==In order to expand upon the functionality of the core `HTMLElement` interface to provide the features needed by a specific element, the `HTMLElement` class is subclassed to add the needed properties and methods==. For example, the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element is represented by an object of type [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement). `HTMLCanvasElement` augments the `HTMLElement` type by adding properties such as [`height`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/height) and methods like [`getContext()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) to provide canvas-specific features.

The overall inheritance for HTML element classes looks like this:

![HTMLElement](../../img/HTMLElement.jpg)

As such, ==**an element inherits the properties and methods of all of its ancestors**==. For example, consider a [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) element, which is represented in the DOM by an object of type [`HTMLAnchorElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement). The element, then, includes the anchor-specific properties and methods described in that class's documentation, but also those defined by [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) and [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element), as well as from [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) and, finally, [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

==**Each level defines a key aspect of the utility of the element**==. From `Node`, the element inherits concepts surrounding the ability for the element to be contained by another element, and to contain other elements itself. ==_Of special importance is what is gained by inheriting from_ `EventTarget`: **_the ability to receive and handle events_**== such as mouse clicks, play and pause events, and so forth.

==There are elements that share commonalities and thus have an additional intermediary type==. For example, the [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) and [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) elements both present audiovisual media. The corresponding types, [`HTMLAudioElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) and [`HTMLVideoElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement), are both based upon the common type [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement), which in turn is based upon [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) and so forth. `HTMLMediaElement` defines the methods and properties held in common between audio and video elements.

These element-specific interfaces make up the majority of the HTML DOM API.

## HTML DOM API interfaces

The majority of the interfaces that comprise the HTML DOM API map almost one-to-one to individual HTML elements, or to a small group of elements with similar functionality. In addition, the HTML DOM API includes a few interfaces and types to support the HTML element interfaces.

### HTML element interfaces

These interfaces represent specific HTML elements (or sets of related elements which have the same properties and methods associated with them):

- [`HTMLAnchorElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement)
- [`HTMLButtonElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)
- [`HTMLDivElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)
- [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
- [`HTMLFormElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)
- [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)
- ...

### Form support interfaces

These interfaces provide structure and functionality required by the elements used to create and manage forms, including the [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) and [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) elements:

- [`FormDataEvent`](https://developer.mozilla.org/en-US/docs/Web/API/FormDataEvent)
- [`HTMLFormControlsCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection)
- [`HTMLOptionsCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionsCollection)
- ...

### Canvas and image interfaces

These interfaces represent objects used by the Canvas API as well as the [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element and [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) elements:

- [`CanvasGradient`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient)
- [`CanvasPattern`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern)
- [`ImageData`](https://developer.mozilla.org/en-US/docs/Web/API/ImageData)
- ...

### Media interfaces

The media interfaces provide HTML access to the contents of the media elements: [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) and [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video):

- [`AudioTrack`](https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack)
- [`AudioTrackList`](https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList)
- [`VideoTrack`](https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack)
- [`VideoTrackList`](https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList)
- ...

### Page history interfaces

The History API interfaces let you access information about the browser's history, as well as to shift the browser's current tab forward and backward through that history:

- [`HashChangeEvent`](https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent)
- [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History)
- [`Location`](https://developer.mozilla.org/en-US/docs/Web/API/Location)
- ...

## References

1. [The HTML DOM API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)
1. [DOM (Document Object Model) - MDN](https://developer.mozilla.org/en-US/docs/Glossary/DOM)
1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)