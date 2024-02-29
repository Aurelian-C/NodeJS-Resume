## HTML Attributes vs DOM Properties

When speaking about manipulating elements, it's also important to understand ==the difference between **attributes** and **properties**==, because it's easy to confuse these two things or to not even be aware of these two different things, because often, indeed ==attributes are mapped to properties== and ==some live synchronization is set up==.

==All attributes are placed in the HTML code==, _so what you write in the HTML code is named an attribute, what you add on the HTML tag, that's an attribute of that tag_. What the browser does with these attributes is it creates such a DOM object based on the tag name and preconfigures it and preconfigures some of its properties based on the attributes, because the important thing is that the attribute is the thing in your HTML code. ==The property is a value stored in the object that's created based on your HTML code== so to say.

==Objects in Javascript have properties==, no matter if there are some DOM objects or not. So of course for DOM objects, we also have properties and these simply reflect the configuration and setup and positioning and so on of the rendered DOM node, of the DOM object, and the idea of attributes is that you, if you're writing HTML code, can provide a certain default configuration to this to be created DOM object.

It's important to understand that ==not every attribute has a one-to-one mapping in properties== though. It's just important to know that ==not always the **attribute name** is equal to the **property name**==.

![attributes_vs_properties](../../img/attributes_vs_properties.jpg)

## References

1. [JavaScript - The Complete Guide (Beginner + Advanced) - Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=Cj0KCQjw0umSBhDrARIsAH7FCoeU9W1FhcfHq4JH6InuqwKQdlnXPY4wnIG6-ZrfGPJ6hyB9zTE0NW8aAvGkEALw_wcB)