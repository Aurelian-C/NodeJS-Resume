# Introduction to the Document Object Model (DOM)

_When writing code for the Web, there are a large number of **Web APIs** and **interfaces (object types) **available, that you may be able to use while developing your Web app or site_. ==Web APIs are typically used with JavaScript, although this doesn't always have to be the case==. 

When it's comes to a document that containing HTML, there is a Web API called **D**ocument **O**bject **M**odel (DOM API) that helps us to _connects web pages to scripts or programming languages_ by _representing the structure of a document — such as the HTML representing a web page — in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language_.

Before we dive into the DOM API, let's understand ==what the browser does with our HTML document==, which is part of any web page we create, and ==how JavaScript works with our HTML document==.

## JavaScript & Browser

From the beginning we get JavaScript and we get the browser, these two pieces which interact all the time. Now don't forget that ==JavaScript is a **hosted language**, that means the _browser provides the environment for JavaScript to run_==. Browser provides the JavaScript Engine, which understands, parses and execute all the JavaScript code, but also provides a bunch of Web APIs, a bunch of functionalities into which JavaScript can tap, so that JavaScript can interact with the browser, and implicit with our HTML document.

==In order for JavaScript to interact with an HTML document, browser provides to it a Web API interface called **[DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)**==. DOM API is a programming interface for web documents and with it JavaScript can create, modify and delete HTML elements, set styles, classes and attributes to them, or listen and response to events.

![DOM_interface](../../img/DOM_interface.jpg)

## What is the DOM?

The DOM is a W3C (World Wide Web Consortium) standard. ==The DOM defines a **standard for accessing documents**==. The W3C DOM standard is separated into 3 different parts:

- Core DOM - standard model for all document types
- XML DOM - standard model for XML documents
- HTML DOM - standard model for HTML documents

> **Note**: ==The DOM is built using multiple APIs that work together==. _The core [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) defines the entities describing any document and the objects within it_. This is expanded upon as needed by other APIs that add new features and capabilities to the DOM. For example, _the [HTML DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API) adds support for representing HTML documents to the core DOM_, and the [SVG API](https://developer.mozilla.org/en-US/docs/Web/API/SVG_API) adds support for representing SVG documents.

The DOM is a **programming interface for web documents**. It represents the HTML document so that programs can change the document structure, style, and content. The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects.

![what_is_the_DOM](../../img/what_is_the_DOM.jpg)

DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content. Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

> The DOM is a standard ==**_object_ model**== and **programming interface** for HTML documents. It defines:
>
> - The HTML elements as **objects**
>- The **properties** of all HTML elements
> - The **methods** to access all HTML elements
> - The **events** for all HTML elements
> 
> In other words, **The DOM is a standard for how to get, change, add, or delete HTML elements.** All of the properties, methods, and events available for manipulating and creating web pages are _organized into objects_.

==**The DOM connects web pages to scripts or programming languages** by representing the structure of a HTML document in memory, as an object-oriented representation==. The DOM model is constructed as a ==**tree of objects**==:

![dom_tree-of-objects](../../img/dom_tree-of-objects.jpg)

==All of the properties, methods, and events available on DOM API for manipulating and creating web pages are organized into objects==. With the object model, JavaScript gets all the power it needs to create _dynamic HTML documents_:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

==The DOM API is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts==. The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the DOM for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript.

> **Note**: The DOM is not part of the JavaScript language, but is instead a Web API used to build websites.
>
> ![DOM_vs_JavaScript](../../img/DOM_vs_JavaScript.jpg)

==The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API==. Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language.

## Accessing the DOM: [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object

You don't have to do anything special to begin using the DOM API. You use it directly in JavaScript from within what is called a *script*, a program run by a browser. When you create a script, whether inline in a `<script>` element or included in the web page, you can immediately begin using the API for the [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) or [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) objects to manipulate the document itself, or any of the various elements in the web page (the descendant elements of the document). Your DOM programming may be something as simple as the following example, which displays a message on the console by using the `console.log()` function:

```js
// Not recommended
<body onload="console.log('Welcome to my home page!');">
  …
</body>

// Recommended
document.body.addEventListener("load", function() {
  console.log('Welcome to my home page!');
});
```

> **Note**: Generally is not recommended to mix the structure of the page (written in HTML) and manipulation of the DOM (written in JavaScript), the JavaScript parts will be grouped together in the `<script>`, separated from the HTML.

==The  **[`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document)** represents any web page loaded in the browser and **serves as an _entry point_ into the web page's content**==. So the browser exposes to JavaScript the `document` object, and now JavaScript can interact with the HTML document.

## Fundamental data types

This page tries to describe the various objects and types in simple terms. But there are a number of different data types being passed around the API that you should be aware of.

> **Note:** Because the vast majority of code that uses the DOM revolves around manipulating HTML documents, _it's common to refer to the nodes in the DOM as **elements**, although strictly speaking not every node is an element_.

The following table briefly describes these data types:

| Data type (Interface)                                        | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) | When a member returns an object of type `document` (e.g., the `ownerDocument` property of an element returns the `document` to which it belongs), this object is the root `document` object itself. The [DOM `document` Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document) chapter describes the `document` object. |
| [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) | ==Every object located within a document is a node of some kind==. In an HTML document, an object can be an _element node_ but also a _text node_ or attribute node. |
| [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) | ==The `element` type is based on `node`==. It refers to an element or a node of type `element` returned by a member of the DOM API. Rather than saying, for example, that the [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) method returns an object reference to a `node`, we just say that this method returns the `element` that has just been created in the DOM. `element` objects implement the DOM `Element` interface and also the more basic `Node` interface, both of which are included together in this reference. In an HTML document, elements are further enhanced by the HTML DOM API's [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) interface as well as other interfaces describing capabilities of specific kinds of elements (for instance, [`HTMLTableElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement) for [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) elements). |
| [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) | A `nodeList` is an array of elements, like the kind that is returned by the method [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll). |
| [`Attr`](https://developer.mozilla.org/en-US/docs/Web/API/Attr) | When an `attribute` is returned by a member (e.g., by the `createAttribute()` method), it is an object reference that exposes a special (albeit small) interface for attributes. Attributes are nodes in the DOM just like elements are, though you may rarely use them as such. |
| [`NamedNodeMap`](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap) | A `namedNodeMap` is like an array, but the items are accessed by name or index, though this latter case is merely a convenience for enumeration, as they are in no particular order in the list. A `namedNodeMap` has an `item()` method for this purpose, and you can also add and remove items from a `namedNodeMap`. |

## DOM interfaces

This guide is about the objects and the actual *things* you can use to manipulate the DOM hierarchy. There are many points where understanding how these work can be confusing. ==For example, the object representing the HTML `form` element gets its `name` property from the `HTMLFormElement` interface but its `className` property from the `HTMLElement` interface.== In both cases, the property you want is in that form object.

But the relationship between objects and the interfaces that they implement in the DOM can be confusing, and so this section attempts to say a little something about the actual interfaces in the DOM specification and how they are made available.

### Interfaces and objects

==**Many objects implement several different interfaces**. The table object, for example, implements a specialized [`HTMLTableElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement) interface, which includes such methods as `createCaption` and `insertRow`. But since it's also an HTML element, `table` implements the [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface. And finally, since an HTML element is also, as far as the DOM is concerned, a node in the tree of nodes that make up the object model for an HTML or XML page, the table object also implements the more basic `Node` interface, from which `Element` derives==.

When you get a reference to a `table` object, as in the following example, you routinely use all three of these interfaces interchangeably on the object, perhaps without knowing it.

==The `document` and `window` objects are the objects whose interfaces you generally use most often in DOM programming==. In simple terms, the `window` object represents something like the browser, and the `document` object is the root of the document itself. `Element` inherits from the generic `Node` interface, and together these two interfaces provide many of the methods and properties you use on individual elements. These elements may also have specific interfaces for dealing with the kind of data those elements hold, like `HTMLTableElement` interface.

![DOM_API_1](../../img/DOM_API_1.jpg)

## References

1. [Web APIs - MDN](https://developer.mozilla.org/en-US/docs/Web/API)
1. [DOM (Document Object Model) - MDN](https://developer.mozilla.org/en-US/docs/Glossary/DOM)
1. [Introduction to the DOM - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
1. [The HTML DOM API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)
1. [JavaScript HTML DOM - w3schools](https://www.w3schools.com/js/js_htmldom.asp)
1. [Document - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document)
1. [Node - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node)
1. [JavaScript - The Complete Guide (Beginner + Advanced) - Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=Cj0KCQjw0umSBhDrARIsAH7FCoeU9W1FhcfHq4JH6InuqwKQdlnXPY4wnIG6-ZrfGPJ6hyB9zTE0NW8aAvGkEALw_wcB)
1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
