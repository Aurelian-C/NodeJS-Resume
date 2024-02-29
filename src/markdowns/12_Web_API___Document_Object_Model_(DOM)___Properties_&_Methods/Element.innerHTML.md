# Element.innerHTML

The [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) property `innerHTML` ==**gets** _or_ **sets** the HTML or XML **markup** contained within the element==.

> **Note**: To insert the HTML into the document rather than replace the contents of an element, use the method [`insertAdjacentHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML).

The `innerHTML` property can be used to examine the current HTML source of the page, including any changes that have been made since the page was initially loaded.

## Syntax

```js
// Get the innerHTML markup
element.innerHTML;

// Set the innerHTML markup
element.innerHTML = htmlString;
```

> **Note**: Setting the value of `innerHTML` removes all of the element's descendants and replaces them with nodes constructed by parsing the HTML given in a string *htmlString*.

## Return Value

A ==string== containing the HTML content of the element.

## Some considerations about `innerHTML`

The `innerHTML` method ==is not great for performance==. Whenever you using `innerHTML` you are ==forcing the browser to re-parse and re-render a lot of HTML which maybe didn't change at all or have small changes==. Now of course for a short list on a simple page or a small website it doesn't really matter, but if you're working with bigger web sites, bigger applications, that might be super bad and really hurt the user experience. All the content which you swapped with `innerHTML` is ==re-rendered==, even if it's based on old content.

```js
const div = document.querySelector('div');
div.innerHTML = div.innerHTML + '<p>Something went wrong!</p>
```

So `innerHTML` is ==useful whenever you want to change everything, all the HTML content of an element, it's not so good if you only want to add something to the existing content==.

### Security considerations

It is not uncommon to see `innerHTML` used to insert text into a web page. There is potential for this to become an attack vector on a site, creating a potential security risk.

```js
const name = 'John';
element.innerHTML = name; // harmless in this case

// ...

const name = "<script>alert('I am John in an annoying alert!')</script>";
element.innerHTML = name; // harmless in this case
```

Although this may look like a [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attack, the result is harmless. HTML specifies that a [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) tag inserted with `innerHTML` [should not execute](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0).

However, there are ways to execute JavaScript without using `<script>` elements, so there is still a security risk whenever you use `innerHTML` to set strings over which you have no control. For example:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

For that reason, it is recommended that instead of `innerHTML` you use:

- [`Element.SetHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML) to sanitize the text before it is inserted into the DOM
- [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) when inserting plain text, as this inserts it as raw text rather than parsing it as HTML

## The differences between `innerHTML`, [`innerText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText) and [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

|                          innerHTML                           |                          innerText                           |                         textContent                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| Return the text content of the element, _including all spacing and inner HTML tags_ | Return the text content of the element and all its children, _without CSS hidden text spacing and tags_, except `<script>` and `<style>` elements | Return the text content of the element and all descendaces, _with spacing and CSS hidden text, but without tags_ |

## Examples

### Reading the HTML contents of an element

Reading `innerHTML` causes the user agent to serialize the HTML or XML fragment comprised of the element's descendants. The resulting string is returned.

```js
let contents = myElement.innerHTML;
```

> **Note**: The returned HTML or XML fragment is generated based on the current contents of the element, so the markup and formatting of the returned fragment is likely not to match the original page markup.

### Replacing the contents of an element

Setting the value of `innerHTML` lets you easily replace the existing contents of an element with new content. For example, you can erase the entire contents of a document by clearing the contents of the document's body attribute:

```js
document.body.innerHTML = '';
```

> **Note**: This is a security risk if the string to be inserted might contain potentially malicious content. When inserting user-supplied data you should always consider using [`Element.SetHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML) instead, in order to sanitize the content before it is inserted.

### Appending HTML to an element

Setting the value of `innerHTML` lets you append new contents to the existing one of an element. For example, we can append a new list item (`<li>`) to the existing list (`<ul>`):

```html
<ul id="list">
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
</ul>
```

```js
const list = document.getElementById('list');
list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
```

> **Note**: Using `innerHTML` to append HTML elements (e.g. `el.innerHTML += "<a href='...'>link</a>"`) will result in the removal of any previously set event listeners. That is, after you append any HTML element that way, you won't be able to listen to the previously set event listeners.

## References

1. [Element.innerHTML - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
2. [innerHTML - w3schools](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)
3. [JavaScript - The Complete Guide (Beginner + Advanced) - Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=Cj0KCQjw0umSBhDrARIsAH7FCoeU9W1FhcfHq4JH6InuqwKQdlnXPY4wnIG6-ZrfGPJ6hyB9zTE0NW8aAvGkEALw_wcB)
