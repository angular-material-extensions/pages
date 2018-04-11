<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/ngx-material-pages/master/demo/src/assets/logo.svg">
</p>

# ngx-material-pages - Open source library for angular apps to illustrate custom material pages content with steps (ideal for tutorials and explanation purposes)

[![npm version](https://badge.fury.io/js/ngx-material-pages.svg)](https://badge.fury.io/js/ngx-material-pages),
[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://anthonynahas.github.io/ngx-material-pages)
[![CircleCI branch](https://img.shields.io/circleci/project/github/AnthonyNahas/ngx-material-pages/master.svg?label=circleci)](https://circleci.com/gh/AnthonyNahas/ngx-material-pages)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-material-pages/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-material-pages?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-material-pages/status.svg)](https://david-dm.org/anthonynahas/ngx-material-pages)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-material-pages/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-material-pages#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/ngx-material-pages.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-material-pages.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-material-pages/blob/master/LICENSE)


![ngx-material-pages](https://firebasestorage.googleapis.com/v0/b/ngx-material-pages.appspot.com/o/tutorials%2Fdemo_iphone_320_low.gif?alt=media&token=04283ec5-1f39-4a5e-b853-b79347ed28c6)

Do you need an illustration for your explanations and tutorials ?
Are you using [angular](https://angular.io/) to build wonderful pwa ?
You favorite front-end framework is [angular material](https://material.angular.io/) ?

ngx-material-pages is the right UI component for you!
You build wonderful and comprehensive tutorials pages by providing an outlook and content for each
step of your explanation.

Try it out! 

[![ngx-material-pages](https://firebasestorage.googleapis.com/v0/b/ngx-material-pages.appspot.com/o/v0.1.0%2Fngx-material-pages-v1.0.png?alt=media&token=5598f20b-d773-424b-8f84-c8422e62cbc5)](https://firebasestorage.googleapis.com/v0/b/ngx-material-pages.appspot.com/o/v0.1.0%2Fngx-material-pages.mp4?alt=media&token=637cb6d1-9d45-4a7e-840d-6378598cb1fb)


## Demo
View all the directives in action at https://anthonynahas.github.io/ngx-material-pages

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher)

### Peer Dependencies Requirements:
### Requirements:
- [angular animations ](https://www.npmjs.com/package/@angular/animations)
- [angular cdk ](https://www.npmjs.com/package/@angular/cdk)
- [angular material ](https://www.npmjs.com/package/@angular/material)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
- [material icons](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)
- if you need a built in theme --> please let me know

## Install Peer Dependencies - [help](https://material.angular.io/guide/getting-started#step-1-install-angular-material-and-angular-cdk)
```bash
npm i -s @angular/animations @angular/material @angular/cdk
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

NB: please do not forget to import the angular animations module in your root component too! (usally app.component.ts)
```js
import { NgxMaterialPagesModule } from 'ngx-material-pages';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxMaterialPagesModule.forRoot(),
  BrowserAnimationsModule,
   ...],  
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
```css
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
```
to you `styles.css` files

[learn more](https://material.angular.io/guide/theming)

## Add a material icons - [help](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)
The easiest way is to add 
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
to you `index.html` files

[learn more](https://google.github.io/material-design-icons/)


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

## Support
Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de) and I will help you!

## License

Copyright (c) 2018 [Anthony Nahas](mailto:anthony.na@hotmail.de). Licensed under the MIT License (MIT)
