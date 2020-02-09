<p align="center">
  <img height="256px" width="256px" style="text-align: center;" 
  src="https://cdn.jsdelivr.net/gh/angular-material-extensions/pages@master/assets/angular-material-extensions-logo.png">
</p>


# @angular-material-extensions/pages - Open source library for Angular Apps to illustrate custom material pages content with steps (ideal for tutorials and explanation purposes) - Angular V9 supported

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Fpages.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Fpages)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/pages)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/pages/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/pages)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/pages/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/pages?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/pages/status.svg)](https://david-dm.org/angular-material-extensions/pages)
[![devDependency Status](https://david-dm.org/angular-material-extensions/pages/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/pages#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/pages.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/pages.svg?style=flat-square)](https://github.com/angular-material-extensions/pages/blob/master/LICENSE)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/gdi2290/awesome-angular)


> This Github project has been transferred to the angular material extensions monorepo [angular-material-extensions/components](https://github.com/angular-material-extensions/components)

<p align="center">
  <img alt="@angular-material-extensions/pages" style="text-align: center;"
   src="assets/demo.gif">
</p>


Do you need an illustration for your explanations and tutorials ? Or maybe an alternative way of pagination ?
Are you using [angular](https://angular.io/) to build wonderful pwa ?
You favorite front-end framework is [angular material](https://material.angular.io/) ?

@angular-material-extensions/pages is the right UI component for you!
You build wonderful and comprehensive tutorials pages by providing an outlook and content for each
step of your explanation.

Try it out! 

## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/pages/issues)

If did you this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Peer Dependencies](#peerDependencies)
- [Additional Requirements - material (Include a theme)](#additional-requirements-material-theme)
- [Additional Requirements - material icons](#additional-requirements-material-icons)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Run Demo App Locally](#run-demo-app-locally)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

---

## [Demo](https://angular-material-extensions.github.io/pages)

View all the directives and components in action at [https://angular-material-extensions.github.io/pages](https://angular-material-extensions.github.io/pages)

## Dependencies
* [Angular](https://angular.io) (*requires*) tested with V9
- if you are still using angular v5 or lower, please use the following version `1.2.1`


> This project has been renamed from [@angular-material-extensions/pages](https://www.npmjs.com/package/@angular-material-extensions/pages) to [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)

<a name="peerDependencies"/>

## Peer Dependencies
- [angular animations v7.x](https://www.npmjs.com/package/@angular/animations)
- [angular material v7.x](https://www.npmjs.com/package/@angular/material)
- [angular cdk v7.x](https://www.npmjs.com/package/@angular/cdk)

> [learn more about angular material and cdk](https://material.angular.io/guide/getting-started#step-1-install-angular-material-and-angular-cdk)

> if you need a built in theme --> please let me know
```bash
npm i -s @angular/animations @angular/material @angular/cdk
```

or use `angular schematics` like e.g:

```bash
ng add @angular/material 
```


<a name="additional-requirements-material-theme"/>

### Additional requirements Theme (Material Design)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)

<a name="additional-requirements-material-icons"/>

## Additional Requirements - Import the material design icons [learn more](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)

- The easiest way to import material design icons is to provide a link in your `index.html` file like below:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

- alternative solution:

1. Install of the official npm module of the material design icons

```bash
npm i -s material-design-icons
```

2. Import them in your `angular.json` file

```json
"styles": [
        "styles.css",
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],
```  


----

<a name="installation"/>

##  [Installation](https://angular-material-extensions.github.io/pages/getting-started)

Install above dependencies via *npm*. 

Now install `@angular-material-extensions/pages` via:
```shell
npm install --save @angular-material-extensions/pages
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@angular-material-extensions/pages`:
```js
map: {
  '@angular-material-extensions/pages': 'node_modules/@angular-material-extensions/pages/bundles/@angular-material-extensions/pages.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { MatPagesModule } from '@angular-material-extensions/pages';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatPagesModule .forRoot()`):

NB: please do not forget to import the angular animations module in your root component too! (usally app.component.ts)
```js
import { MatPagesModule } from '@angular-material-extensions/pages';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatPagesModule.forRoot(),
  BrowserAnimationsModule,
   ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MatPagesModule `:

```js
import { MatPagesModule } from '@angular-material-extensions/pages';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MatPagesModule, ...], 
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


<a name="usage"/>

## [Usage](https://angular-material-extensions.github.io/pages/getting-started)

This library consists of 4 essential components.

1. `mat-pages` the main container that hold the pages incl. the outlook view and the content
2. `mat-page-loader` the container of each page. This component should have two nested elements
 which are the outlook and the content components (see below)
3. `mat-page-outlook` the outlook view of a page. This can contain a custom component, custom layout or just a title.
4. `mat-page-content` this is the content view of the page. This can be anything!!

5. Example:

```html
<mat-pages>
    <mat-page-loader>
      <mat-page-outlook>
        <!-- put your own outlook view for the first page -->
      </mat-page-outlook>
      <mat-page-content>
        <!-- put your own content view for the first page -->
      </mat-page-content>
    </mat-page-loader>
    <mat-page-loader>
      <mat-page-outlook>
        <!-- put your own outlook view for the second page -->
      </mat-page-outlook>
      <mat-page-content>
        <!-- put your own content view for the second page -->
      </mat-page-content>
    </mat-page-loader>
  </mat-pages>
```

--- 

<a name="documentation"/>

## [Documentation](https://angular-material-extensions.github.io/pages/doc/index.html)

Please checkout the full documentation [here](https://angular-material-extensions.github.io//pages/doc/index.html) 
or follow the official [tutorial](https://angular-material-extensions.github.io//pages/getting-started)

--- 


<a name="run-demo-app-locally"/>

## Run Demo App Locally

- [clone this repo](https://github.com/angular-material-extensions/pages.git) by running
```bash
$ git clone https://github.com/angular-material-extensions/pages.git
```

- link the **@angular-material-extensions/pages** package

```bash
$ gulp link
```

- build the library

```bash
$ gulp build
```

- navigate to the demo app directory
```bash
$ cd demo
```

- install the dependencies
```bash
$ npm i
```

- run/start/serve the app
```bash
$ npm run start
```
or
```bash
$ ng serve --open
```
- the app is now hosted on `http://localhost:4200/`


## Where are @angular-material-extensions/pages being used ? Here are some examples
- [ngx-auth-firebaseui](https://ngx-auth-firebaseui.firebaseapp.com/getting-started)
- [@angular-material-extensions/pages](https://angular-material-extensions.github.io/pages/getting-started)
- [@angular-material-extensions/password-strength](https://angular-material-extensions.github.io/password-strength/getting-started)
- [@angular-material-extensions/contacts](https://angular-material-extensions.github.io/contacts/getting-started)
- [@angular-material-extensions/faq](https://angular-material-extensions.github.io/faq/getting-started)
- [@angular-material-extensions/combination-generator](https://angular-material-extensions.github.io/combination-generator/getting-started)

<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/jumbotron](https://github.com/angular-material-extensions/jumbotron)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/fab-menu](https://github.com/angular-material-extensions/fab-menu)
- [@angular-material-extensions/select-country](https://github.com/angular-material-extensions/select-country)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

---

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de) and I will help you
+ or open an appropriate [issue](https://github.com/angular-material-extensions/pages/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 ---
 
## License

Copyright (c) 2018 [Anthony Nahas](mailto:anthony.na@hotmail.de). Licensed under the MIT License (MIT)
