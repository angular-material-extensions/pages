import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Footer {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');

  version = 'beta';
}


@NgModule({
  exports: [Footer],
  declarations: [Footer],
})
export class FooterModule {}
