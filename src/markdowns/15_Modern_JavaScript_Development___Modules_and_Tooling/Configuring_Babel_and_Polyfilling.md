# Configuring Babel and Polyfilling

Now that we learned about JavaScript bundlers like Parcel and how we can activate bundling, it's time to configure Babel to ==compile our super modern code back to ES5 code==. This is still important right now even many years after the new ES6 standard has been introduced, and the reason for that is simply because are still many people out there who are stuck on like a Windows XP or Windows 7 and cannot upgrade their old Internet Explorer, but we want our applications to work for everyone.

## Babel is a JavaScript Compiler

==Babel is a JavaScript **compiler**== that converts our modern ES6 code back to ES5 code.

Now, the good news is that ==Parcel automatically uses Babel to compile our ES6 code== and we can configure Babel a lot if we want to, for example defining exactly what browsers should be supported, but as always that's a ton of work and so we don't want that, and instead Parcel makes some very good default decisions for us, and so we will simply mainly just go with these defaults.

Basically ==Babel works with **plugins** and **presets**== that can both be configured. Now a plugin is a specific JavaScript feature that we want to compile, so to convert, so for example, let's say we only wanted to convert arrow functions back to ES5 but leave everything else in ES6, for example ```const``` and ```let``` declarations. Now usually that doesn't make a lot of sense because basically we will want to compile everything at the same time, and so usually instead of using single plugins for each of these features, Babel actually uses presets, and so a ==preset is basically a bunch of plugins bundled together==, and its by default Parcel is going to use `@babel/preset-env ` preset and this preset will automatically select which JavaScript features should be compiled based on browser support, and again that will all happen automatically and out-of-the-box Babel will convert all features, so only browsers that are barely used anymore with the market share of less than 0.25% are not going to be supported by the compiling with `@babel/preset-env` preset.

Some code is basically not part of this `@babel/preset-env` preset because this preset `-env` does actually only include final features, so features that are already part of the language after passing the four stages of the ECMA process. However, if you want to compile for example a class field, which at the time are only at stage three, you need to use ==experimental plugins==.

Now there's still two more things that I need to show you and so let's write some more code below. So what I will do now is to use the ES6 `find()` method to find products in a cart that are edit more than twice and remember that `find()` is an ES6 method.

```js
console.log(state.cart.find(*el* => el.quantity >= 2));
```

If you look at the other script create by Parcel you will see that is basically that same code with the difference that the arrow function that we had in the original code is gone and it was replaced by a regular function. However, the ES6 method `find()` is still present in the compiled script, so it has not been converted to ES5. Now the same is too for other things, for example, let's try Promises.

```js
Promise.resolve('Test').then(*x* => console.log(x));
```

If we take a look again at compiled script, now then Promise is also not converted to ES5, so remember Promise is an ES6 feature, but again it was not converted back to ES5, and the reason for that is that ==Babel can actually **only compile ES6 syntax**==, so data things like arrow functions, classes, `const` or the spread operator, so these are basically things that have an equivalent way of writing them in ES5, so for example the arrow function it is simply a different syntax and so Babel can simply write function instead of that. And the same goes with `const`, so it's very easy to simply convert that to `var`, but the same is not true for real new features that were added to the language like `find()` and Promises. So these new additions to the language, so these new features, they can simply not be compiled, it's simply not possible. Only syntax is easy to convert, so easy to compile. However, our hope is not lost. So for these added features such as Promises or all the array methods like `find()` and really a bunch of other stuff, we can polyfill them and so that's why since the beginning I've always been saying compiling and polyfilling, so these new features we have to polyfill them.

## Polyfill

New JavaScript features may include not only syntax constructs and operators, but also built-in functions. As we’re talking about new functions, not syntax changes, there’s no need to transpile anything here. We just need to declare the missing function.

Now ==Babel used to do polyfilling out-of-the-box some time ago but recently they started to simply recommending another library== and so we now have to manually import that as well, so is the `core-js` library, and we usually only want to import a part of `core-js` library and that's called `stable`. Now usually we have to install all of the packages first but fortunately Parcel is smart enough to install this automatically, well at least that is how it should be. If Parcel don't install automatically the `core-js`, we need to install manually by writing in the terminal `npm i core-js `.

```js
import 'core-js/stable';
```

However, the polyfilling is going to polyfill everything even if we don't need it. So we had polyfilling the `findIndex()`, `some()`, `every()` methods there as well and so we are actually not even using these. If we wanted we could cherry pick basically just the features that we actually want to polyfill. Now that of course is a lot of work but it will also greatly reduce the bundle size and so it might be worth it if that's really a concern. So we could instead of `import 'core-js/stable';`,  so instead of basically importing everything, we can just polyfill just what we want, for example only `find()` method like `import 'core-js/stable/array/find';`. So that's going to be a lot of work which we usually don't do, but it is possible again if you are really worried about your bundle size.

```js
import 'core-js/stable/array/find';
import 'core-js/stable/promise';
```

Finally, just to finish there is still one feature that is not polyfilled by `import 'core-js/stable';` and so we always need to install just one more package by writing in the terminal `npm i regenerator-runtime ` and then import it in the script by writing the code below:

```js
import 'regenerator-runtime/runtime';   //this is for polyfilling async functions.
```

So again, it probably looks a bit confusing that we have to do all of this, but yeah, don't worry. It's just a recipe that you have to follow and usually you would put all these imports right at the top of your file but in this case, we can just leave them here because they will be hosted anyway. Also keep in mind that all of this might change and so if you're watching this lecture like in two years from now, then things might be different and things might not work the same and so once again make sure that you then install exactly the same versions as I have here, especially the `core-js` and `regenerator-runtime`, and of course, also Parcel.

## References

1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
