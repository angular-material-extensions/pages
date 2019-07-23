import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GettingStartedComponent} from './getting-started.component';
import {GettingStartedRoutingModule} from './getting-started-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
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
