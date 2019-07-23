import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightResult} from 'ngx-highlightjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GettingStartedComponent implements OnInit {

  response: HighlightResult;


  ngVersion = `    _                      _                 ____ _     ___
                 / \\   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
                / △ \\ | '_ \\ / _\` | | | | |/ _\` | '__|   | |   | |    | |
               / ___ \\| | | | (_| | |_| | | (_| | |      | |___| |___ | |
              /_/   \\_\\_| |_|\\__, |\\__,_|_|\\__,_|_|       \\____|_____|___|
                             |___/

              Angular CLI: 1.7.3
              Node: 8.11.1
              OS: darwin x64
              Angular:`;

  importBrowserAnimationsModule = `import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [BrowserAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;

  importNoopAnimationsModule = `import {NoopAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [NoopAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;

  importMaterialThemeSCSS = `@import "~@angular/material/prebuilt-themes/indigo-pink.css";`;

  customMaterialTheme =
    `@import '../node_modules/@angular/material/theming';
     // Plus imports for other components in your app
     // Include the common styles for Angular Material. We include this here so that you only
     // have to load a single css file for Angular Material in your app.
     // Be sure that you only ever include this mixin once!
     @include mat-core()
     // Define the palettes for your theme using the Material Design palettes available in palette.scss
     // (imported above). For each palette, you can optionally specify a default, lighter, and darker
     // hue.
     $candy-app-primary: mat-palette($mat-indigo);
     $candy-app-accent:  mat-palette($mat-pink, A200, A100, A400)
     // The warn palette is optional (defaults to red).
     $candy-app-warn:    mat-palette($mat-red)
     // Create the theme object (a Sass map containing all of the palettes).
     $candy-app-theme: mat-light-theme($candy-app-primary, $candy-app-accent, $candy-app-warn)
     // Include theme styles for core and each component used in your app.
     // Alternatively, you can import and @include the theme mixins for each component
     // that you are using.
     @include angular-material-theme($candy-app-theme);
     `;

  stylesBeforeImportMDI = `"styles": [
        "styles.css"
      ],`;

  stylesAfterImportMDI = `"styles": [
        "styles.css",
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],`;

  materialIconsLink = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`;

  // 6

  systemJSModuleImport = `map: {
  '@angular-material-extensions/pages': 'node_modules/@angular-material-extensions/pages/bundles/@angular-material-extensions/pages.umd.js',
  }`;

  importMatPagesModule = `import { MatPagesModule } from '@angular-material-extensions/pages';`;

  importMatPagesModuleInAppModule = `import { MatPagesModule } from '@angular-material-extensions/pages';
                                              import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                              @NgModule({
                                                declarations: [AppComponent, ...],
                                                imports: [MatPagesModule.forRoot(),
                                                BrowserAnimationsModule,
                                                 ...],
                                                bootstrap: [AppComponent]
                                              })
                                              export class AppModule {
                                              }`;

  importMatPagesModuleInOtherModule = `import { MatPagesModule } from '@angular-material-extensions/pages';

                                                @NgModule({
                                                  declarations: [OtherComponent, ...],
                                                  imports: [MatPagesModule, ...],
                                                })
                                                export class OtherModule {
                                                }`;

  example = `<mat-pages>
               <mat-page-loader>
                 <mat-page-outlook title="Outlook Title 1">
                   Outlook Content 1
                 </mat-page-outlook>
                 <mat-page-content>
                   Page Content 1
                 </mat-page-content>
               </mat-page-loader>
               <mat-page-loader>
                 <mat-page-outlook title="Outlook Title 2">
                   Outlook Content 2
                 </mat-page-outlook>
                 <mat-page-content>
                   Page Content 2
                 </mat-page-content>
               </mat-page-loader>
               <mat-page-loader>
                 <mat-page-outlook title="Outlook Title 3">
                   Outlook Content 3
                 </mat-page-outlook>
                 <mat-page-content>
                   Page Content 3
                 </mat-page-content>
               </mat-page-loader>
             </mat-pages>`;

  constructor(private titleService: Title,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.titleService.setTitle('Getting Started | @angular-material-extensions/pages');
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }

  onPageChanges($event) {
    console.log('page changed - current index: ', $event);
  }

  onLastPageReached() {
    this.snackBar.open('Awesome! You\'re done!', 'OK', {
      duration: 3000
    });
  }

}
