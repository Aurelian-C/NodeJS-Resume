# Introducing to JavaScript Modules

JavaScript programs started off pretty small — most of its usage in the early days was to do isolated scripting tasks, providing a bit of interactivity to your web pages where needed, so large scripts were generally not needed. Fast forward a few years and we now have complete applications being run in browsers with a lot of JavaScript, as well as JavaScript being used in other contexts (Node.js, for example).

It has therefore made sense in recent years to start thinking about ==providing mechanisms for splitting JavaScript programs up into separate modules that can be imported when needed==. Node.js has had this ability for a long time, and there are a number of JavaScript libraries and frameworks that enable module usage (for example, other [CommonJS](https://en.wikipedia.org/wiki/CommonJS) and [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-based module systems like [RequireJS](https://requirejs.org/), and more recently [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/)).

Almost every language has a concept of *modules* — a way to include functionality declared in one file within another. Typically, a developer creates an encapsulated library of code responsible for handling related tasks. That library can be referenced by applications or other modules.

The benefits:

1. Code can be split into smaller files of self-contained functionality.
2. The same modules can be shared across any number of applications.
3. Ideally, modules need never be examined by another developer, because they’ve has been proven to work.
4. Code referencing a module understands it’s a dependency. If the module file is changed or moved, the problem is immediately obvious.
5. Module code (usually) helps eradicate naming conflicts. Function `x()` in module1 cannot clash with function `x()` in module2. Options such as namespacing are employed so calls become `module1.x()` and `module2.x()`.

## The Module Pattern with IIFE

Module Pattern was ==used before ES6 Modules== in order to ==implement modules== in JavaScript.

Just like in regular modules, the main goal of the Module Pattern is to ==encapsulate functionality==, to have ==private data== and to ==expose a public API==, and the best way of achieving all that is by simply using a function, because ==functions give us private data by default== and ==allow us to return values==, which can become our public API.

We implement Module Pattern by writing a function, and usually we write an IIFE (Immediately Invoked Function Expression), and the reason for that is because this way we don't have to call it separately and we can also ensure that it's only called once. So it's very important that _this function is ==only created once== because the goal of this function is not to reuse code by running it multiple times, the only purpose of this function is to ==create a new scope== and ==return data just once==_.

_All the data that IIFE returns need to be stored in a variable because if you don’t do that the return data kind of disappears into nothing_.

```js
const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart.addToCart('apple', 4);
ShoppingCart.addToCart('pizza', 2);

console.log(ShoppingCart2.shippingCost); //on the other hand, the properties that we basically wanted to make private, they are not accessible, so they are undefined.
```

The problem with Module Pattern is that if we wanted one module per file, like we have with ES6 modules, then we would have to create different scripts and link all of them in the HTML file and that then creates a couple of problems, like we have to be careful with the ==order in which we declare them in HTML==, and we would have all of the ==variables living in the global scope (variables collisions)==, and finally, we also ==couldn't bundle them together using a module bundler==. So the Module Pattern that we just learned about does indeed work quite good but it has some limitations and that's exactly the reason why native modules were added to the language in ES6.

## CommonJS & AMD Modules

Besides native ES6 Module and the Module Pattern, there are also ==other module systems== that have been used by JavaScript in the past, but again, they were ==not native JavaScript==, so ==they relied on some external implementations==, and two examples are ==**AMD Modules**== and ==**CommonJS**== module.

CommonJS modules are important for us because they have been used in ==Node.js== for almost all of its existence, so only very recently ES6 Modules have actually been implemented in Node.js. The big consequence of this is that ==_almost all the modules in the NPM repository, so all these modules that we can use in our own code still use the CommonJS module system_== and the reason for that is that ==_NPM was originally only intended for Node.js. Only later NPM became the standard repository for the whole JavaScript world_== and so now we are basically stuck with CommonJS and so therefore, you will see probably a lot of CommonJS still around.

Just like ES6 modules, ==in CommonJS one file is one module==. And we export something from a module using `export.` and then the name of the export. Now of course, this is not going to work in the browser but it would work in Node.js. The imports are made using:

```js
const { importedValue } = require('./moduleName.js');
```

We ==_can’t use libraries that uses the CommonJS module system without a_ **module bundler**==, so we cannot directly import it into our code without a module bundler.

## ES6 Modules

==Variables that are declared inside of a module are scoped to that module==. So basically inside a module, the module itself is like the top level scope, and so by default this means that all top level variables are private inside of module. So unlike traditional scripts which would put all of the global variables in the global scope, the modules system will scoped variables that are inside of it.

So variables are scoped to the current module and so we can only use them inside of that current module. Now, if we wanted to use them in another module, then we would have to use exports, and in ES6 modules there are two types of exports, Named Exports and Default Exports, and Named Exports is actually the simplest way of exporting something from a module because all we have to do is to put export in front of anything that we might want to export.

## Exporting and importing in native ES6 Modules

- In moduleName.js names, it's also a convention to use ==camelCase== names.

- ES6 Modules are ==native== to JavaScript.

- There is no need to use the `defer` attribute when loading a module script; ==modules are deferred automatically==.

- Module features are imported into the scope of a single script — they ==aren't available in the global scope==. Therefore, you will only be able to access imported features in the script they are imported into, and you won't be able to access them from the JavaScript console, for example.

- Normal code (without asynchronous code) inside imports are executed first, so before the code in the module that we make the imports.

- All the importing statements are ==hoisted== to the top and because this we usually write all the imports statements at the top of the file.

- All modules are executed in ==Strict Mode by default==, so you don't need to write 'use strict' at the beginning of the module.

- Understand how to export and import values between modules.

- You can ==import a module without importing any value==.

- ==When you use Parcel you can omit the .js extension== because with Parcel ES6 modules also work without that ( import './moduleName'; ).

- We can say that a module exports kind of a public API because everything else that we don’t export stays private inside of the module.

- Exports always nedd to happen in ==top level code==.

- Imports are a ==live connection== to exports (imports are not copies of the export).

## Named exports/imports in ES6 Modules

With Named Export/Import you can export/import a single item or you can export/import multiple items with ```{}``` . When you export/import items and use ```{}```, you can change the name of the export/import using ```as```.

In Named Export/Import you have to give to imports values the ==same name as name you defined in export module== and you have to ==put them inside curly braces ```{}```==.

```js
// <<<<<< shoppingCart.js module >>>>>>

// Export single named items
export const cart = []; // export a single named item
export const addToCart = function (product, quantity) { // export a single named item
  cart.push({ product, quantity });
};

// Export multiple named items
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as tq }; // export multiple named items and change name of some items
```

```js
// <<<<<< script.js module >>>>>>

// Import multiple named items
import {addToCart, totalPrice as tp, tq} from './shoppingCart.js'; // importing named items and change name of some items

// Import multiple named items with *
import * as ShoppingCart from './shoppingCart.js';
```

Import all the exports of a module at the same time with `*` and `as` by creating a **module object** (when we import everything from a module with `*` the convention is to use the first letter of the namespace as capital letter, just like in classes. This will create a namespace for all of the values exported from that module, so basically this we'll create an object containing everything that is exported from the module).

==**Exports always nedd to happen in TOP LEVEL CODE**==, so it wouldn't work like below.

```js
if (true) {
    export const addToCart = function(product, quantity) {
        cart.push({product, quantity});
    };
};
```

## Default exports/imports in ES6 Modules

Usually, ==we use Default Export when we only want to **EXPORT ONE THING PER MODULE**== and so that's the reason why they are called default. It works pretty similar like Named Export but then we have to write ```default```  and then we want to simply export a value.

```js
// <<<<<< shoppingCart.js module >>>>>>

export default function (product, quantity) { // Default export
  cart.push({ product, quantity });
}
```

```js
// <<<<<< script.js module >>>>>>

import add from './shoppingCart.js'; // Default import
```

When you import a default export you can imported ==without `{}`== and you can give ==any name== that you want. We can give to Default Import any name that we want because ==Default Export don't have a name==.

Default Export is designed to make it easy to have a default function provided by a module, and also helps JavaScript modules to _interoperate with existing ==CommonJS== and ==AMD module== systems_.

## Mixed Imports in ES6 Modules

We could mix Named Import and Default Import in the same import statement, so if we wanted, we could have default and named imports all at the same time. However, in practice, we usually never mix Named and Default Exports in the same module.

```js
import plus, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
```

However, what you probably should really not do is to mix Default and Named Imports like we did above, so avoid that to reduce complexity. But besides that, you can use Named Exports/Imports or Default Exports/Imports, whatever works best in your situations.

## Imports are a Live Connection to Exports

Imports a ==**LIVE CONNECTION**== to exports, and that's something really important to keep in mind. So one more time, ==IMPORTS ARE **NOT COPIES** OF THE EXPORT==, and keep this in mind when you write your own programs because this can of course leads to bugs if you don't know what you're doing.

## When Does Module Code Execute?

==Code in your modules runs when the module is **imported and loaded for the _first time_**==.

All code that you have in a module does execute but it only executes ==once== when a module is ==imported and used for the first time==.

## Module Scope & [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)

==Modules have their **own scope**==, _something defined in a module is not shared with others unless you export it_.

## References

1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
2. [JavaScript modules - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
3. [Understanding ES6 Modules - Craig Buckler](https://www.sitepoint.com/understanding-es6-modules/)
4. [ES6 In Depth: Modules - Jason Orendorff](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
5. [How JavaScript works: the module pattern + comparing CommonJS, AMD, UMD, and ES6 Modules - Lawrence Eagles](https://blog.sessionstack.com/how-javascript-works-the-module-pattern-comparing-commonjs-amd-umd-and-es6-modules-437f77548437)
6. [CommonJS …what, why and how - Constance Crutchfield](https://medium.com/@cgcrutch18/commonjs-what-why-and-how-64ed9f31aa46)
