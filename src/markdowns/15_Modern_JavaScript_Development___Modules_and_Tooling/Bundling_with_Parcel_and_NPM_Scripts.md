# Bundling with Parcel and NPM Scripts

## Install and configure Parcel:

1. Install `npm i parcel --save-dev`
2. Acces package.json → write `"start": "parcel index.html"` in "scripts" object → in terminal write `npm run start` or just simple `npm start`
3. Write `"build": "parcel build index.html –dist-dir ./dist"` in "scripts" object → in terminal write `npm run build`.

If you want to uninstall Parcel then you write in the terminal `npm un parcel`. In Parcel 2, before you run the build script, you need to modify `"main": "index.js"` in `"default": "index.html"`.

> You use ```--save-dev``` because development dependency (devDependencies) it's **not a third-party package** which you want to use as part of your project, it will **not be part of the code you want to upload to some server**, it's just a package that you need to do something with the code during development to optimize it, to check it, anything like that.
>
> ```json
> {
>   "name": "forkify",
>   "version": "1.0.0",
>   "description": "Recipe application",
>   "default": "index.html",
>   "scripts": {
>     "start": "parcel index.html",
>     "build": "parcel build index.html --dist-dir ./dist"
>   },
>   "author": "Jonas Schedtmann",
>   "license": "ISC",
>   "devDependencies": {
>     "@parcel/transformer-sass": "^2.6.2",
>     "parcel": "^2.6.2"
>   },
>   "dependencies": {
>     "core-js": "^3.6.5",
>     "fractional": "^1.0.0",
>     "regenerator-runtime": "^0.13.7"
>   }
> }
> ```

## Summary

Parcel is just another ==build tool== which is also on NPM and you need to use NPM to install it.

==A `devDependency` is like a tool that we need to build our application but it's not a dependency that we actually include in our code, so it's simply a tool and so that's why it's called a `devDependency`, because we can use it to develop our project==, and so therefore it appears in a new field in our package.json file.

We use Parcel in the terminal because Parcel is basically just another ==command line interface==. In order to still be able to use Parcel in the terminal, we have two options: so we can use something called NPX or we can use NPM scripts.

==With Parcel you don't need to specify the entire path to a module/library==. In all module bundlers there's no need for specifying the entire path to any module/library, it’s enough to write the name of the package/module and Parcel will then automatically find the path to the package/module and will import it like when we specified the entire path without us having to manually type the entire path to the package/module. 

```js
import cloneDeep from './node_modules/lodash-es/cloneDeep.js'; // without module bundler
import cloneDeep from 'lodash-es'; // with module bundler like Parcel
```

==Parcel works with all kinds of assets==, even with HTML, CSS, SASS files, images, svg and of course also all kinds of modules, so not only ES6 modules but this is also going to work with CommonJS modules.

## References

1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
