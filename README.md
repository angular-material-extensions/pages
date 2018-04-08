<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/ngx-material-pages/master/demo/src/assets/logo.svg">
</p>

# ngx-material-pages - Open source library for angular apps to illustrate custom material pages content with steps (ideal for tutorials and explanation purposes)

[![npm version](https://badge.fury.io/js/ngx-material-pages.svg)](https://badge.fury.io/js/ngx-material-pages),
[![Build Status](https://travis-ci.org/anthonynahas/ngx-material-pages.svg?branch=master)](https://travis-ci.org/anthonynahas/ngx-material-pages)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-material-pages/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-material-pages?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-material-pages/status.svg)](https://david-dm.org/anthonynahas/ngx-material-pages)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-material-pages/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-material-pages#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/ngx-material-pages.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://anthonynahas.github.io/ngx-material-pages

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-material-pages` via:
```shell
npm install --save ngx-material-pages
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-material-pages`:
```js
map: {
  'ngx-material-pages': 'node_modules/ngx-material-pages/bundles/ngx-material-pages.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-material-pages';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-material-pages';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-material-pages';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 anthonynahas. Licensed under the MIT License (MIT)

