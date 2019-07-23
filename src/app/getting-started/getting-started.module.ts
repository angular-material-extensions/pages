import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GettingStartedComponent} from './getting-started.component';
import {GettingStartedRoutingModule} from './getting-started-routing.module';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatSnackBarModule, MatTooltipModule} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ClipboardModule} from 'ngx-clipboard';
import {MatPagesModule} from '@angular-material-extensions/pages';
import {DisqusModule} from 'ngx-disqus';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    MatPagesModule.forRoot(),
    DisqusModule.forRoot('@angular-material-extensions/pages'),
    HighlightModule.forRoot(),
    ClipboardModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    OverlayModule,
  ],
  declarations: [GettingStartedComponent],
})
export class GettingStartedModule {
}
