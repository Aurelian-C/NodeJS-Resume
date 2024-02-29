##  Data attributes & `HTMLElement.dataset`

HTML is designed with extensibility in mind for data that should be associated with a particular element but need not have any defined meaning. [`data-*` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) allow us to store extra information on standard, semantic HTML elements without other hacks, such as non-standard attributes or extra properties on DOM.

==The **`data-*`** [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) form a class of attributes called **custom data attributes**, that allow proprietary information to be exchanged between the [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and its [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) representation by scripts==.

> Note: Global attributes are attributes common to all HTML elements; they can be used on all elements, though they may have no effect on some elements.

All such custom data attributes defined on an HTML element are available in JavaScript via the `HTMLElement.dataset` of the element the attribute is set on.

## `data-*` attributes name

#### In HTML

In HTML, the attribute name begins with `data-`. You can replace `*` only with letters, numbers, dashes`-`, periods`.`, colons`:`, and underscores`_`. Any ASCII capital letters (`A` to `Z`) are converted to lowercase:

```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars"
>
  ...
</article>
```

#### In JavaScript

In JavaScript, the property name of a custom `data` attribute is _the same as the HTML attribute without the `data-` prefix_, and removes single dashes`-` for when to capitalize the property's "camelCased" name (for example, a `data-abc-def` attribute corresponds to `dataset.abcDef`):

```js
const article = document.querySelector("#electric-cars");

// Attributes can be set and read by the camelCase name/key as an object property of the dataset: element.dataset.keyname
article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"

// Attributes can also be set and read using bracket syntax: element.dataset['keyname']
article.dataset["parent"]; // "cars"
```

## HTML syntax

By adding `data-*` attributes, even ordinary HTML elements can become rather complex and powerful program-objects.

The syntax is simple. Any attribute on any element whose attribute name starts with `data-` is a data attribute. Say you have an article and you want to store some extra information that doesn't have any visual representation. Just use `data` attributes for that:

```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars"
>
  ...
</article>
```

## JavaScript access custom data attributes values defined on an HTML element via `HTMLElement.dataset`

Reading the values of these attributes out in JavaScript is also very simple. You could use [`getAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute) with their full HTML name to read them, but ==the standard defines a simpler way: a [`DOMStringMap`](https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap) you can read out via a `HTMLElement.dataset` property==.

The `dataset` _read-only_ property provides read/write access to custom data attributes (`data-*`) on elements. It exposes a _map of strings (`DOMStringMap`)_ with an entry for each `data-*` attribute.

> The **`DOMStringMap`** interface is used for the `HTMLElement.dataset`/[`SVGElement.dataset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) attribute, to represent data for custom attributes added to HTML elements.

To get a `data` attribute through the `dataset` object, get the property by the part of the attribute name after `data-` (note that ==dashes `-` are converted to camelCase==):

```js
const article = document.querySelector("#electric-cars");

// Attributes can be set and read by the camelCase name/key as an object property of the dataset: element.dataset.keyname
article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"

// Attributes can also be set and read using bracket syntax: element.dataset['keyname']
article.dataset["parent"]; // "cars" 
```

_Each property is a string_ and can be read and written. In the above case setting `article.dataset.columns = 5` would change that attribute to `"5"`.

> **Note**: When you _get_ or _set_ a `data` attribute, its value is always converted to a string. For example: `element.dataset.example = null` is converted into `data-example="null"`.
>
> To remove an attribute, you can use the [`delete` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete): `delete element.dataset.keyname`.

## CSS access

Note that as data attributes are plain HTML attributes, you can even access them from CSS. For example to show the parent data on the article you can use generated content in CSS with the [`attr()`](https://developer.mozilla.org/en-US/docs/Web/CSS/attr) function:

```css
article::before {
  content: attr(data-parent);
}
```

You can also use the [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) in CSS to change styles according to the data:

```css
article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}
```

## References

1. [Using data attributes - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
2. [`data-*` - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)
3. [Global attributes - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
4. [`DOMStringMap` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap)
5. [`HTMLElement.dataset` - MDN](https://developer.mozilla.org/en-US/docs/web/api/htmlelement/dataset)
6. [Using Dataset in JavaScript - medium.com](https://medium.com/@adamkearney124/using-dataset-in-javascript-5331af3ec6c3)
