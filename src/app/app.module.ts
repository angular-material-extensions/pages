import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatDialogsModule} from '@angular-material-extensions/dialogs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterModule} from './shared/footer/footer';
import {HomepageModule} from './pages/homepage';
import {NavBarModule} from './shared/navbar';
import {ComponentPageTitle} from './pages/page-title/page-title';
import {SharedModule} from './shared/shared.module';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    MarkdownModule.forRoot({loader: HttpClient}),
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MatDialogsModule,
    BrowserAnimationsModule,
    HomepageModule,
    NavBarModule,
    FooterModule
  ],
  providers: [ComponentPageTitle],
  bootstrap: [AppComponent]
})
export class AppModule {
}
