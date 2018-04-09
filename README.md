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
[![license](https://img.shields.io/github/license/anthonynahas/ngx-material-pages.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-material-pages/blob/master/LICENSE)

Do you need an illustration for your explanations and tutorials ?
Are you using [angular](https://angular.io/) to build wonderful pwa ?
You favorite front-end framework is [angular material](https://material.angular.io/) ?

ngx-material-pages is the right UI component for you!
You build wonderful and comprehensive tutorials pages by providing an outlook and content for each
step of your explanation.

Try it out! 

## Demo
View all the directives in action at https://anthonynahas.github.io/ngx-material-pages

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher)

### Peer Dependencies Requirements:
### Requirements:
- [angular material ](https://www.npmjs.com/package/@angular/material)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
- [angular cdk ](https://www.npmjs.com/package/@angular/cdk)
- if you need a built in theme --> please let me know

## Install Peer Dependencies - [help](https://material.angular.io/guide/getting-started#step-1-install-angular-material-and-angular-cdk)
```bash
npm i -s @angular/material @angular/cdk
```

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
import { NgxMaterialPagesModule } from 'ngx-material-pages';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxMaterialPagesModule .forRoot()`):
```js
import { NgxMaterialPagesModule } from 'ngx-material-pages';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxMaterialPagesModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` NgxMaterialPagesModule `:

```js
import { NgxMaterialPagesModule } from 'ngx-material-pages';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxMaterialPagesModule, ...], 
})
export class OtherModule {
}
```

## Add a material theme - [help](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
The easiest way is to add 
```html
<link href="node_modules/@angular/material/prebuilt-themes/indigo-pink.css" rel="stylesheet">
```
to you `index.html` files

[learn more](https://material.angular.io/guide/theming)

## Usage - Library's components
This library consists of 4 essential components.

1. `ngx-material-pages` the main container that hold the pages incl. the outlook view and the content
2. `ngx-material-page-loader` the container of each page. This component should have two nested elements
 which are the outlook and the content components (see below)
3. `ngx-material-page-outlook` the outlook view of a page. This can contain a custom component, custom layout or just a title.
4. `ngx-material-page-content` this is the content view of the page. This can be anything!!

5. Example:

```html
<ngx-material-pages>
    <ngx-material-page-loader>
      <ngx-material-page-outlook>
        <!-- put your own outlook view for the first page -->
      </ngx-material-page-outlook>
      <ngx-material-page-content>
        <!-- put your own content view for the first page -->
      </ngx-material-page-content>
    </ngx-material-page-loader>
    <ngx-material-page-loader>
      <ngx-material-page-outlook>
        <!-- put your own outlook view for the second page -->
      </ngx-material-page-outlook>
      <ngx-material-page-content>
        <!-- put your own content view for the second page -->
      </ngx-material-page-content>
    </ngx-material-page-loader>
  </ngx-material-pages>
```

## License

Copyright (c) 2018 anthonynahas. Licensed under the MIT License (MIT)

