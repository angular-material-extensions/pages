import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | @angular-material-extensions/pages');
  }

  pnPageChanges($event) {
    console.log('page changed - current index: ', $event);
  }

  onLastPageReached() {
    this.snackBar.open('Awesome! You\'re done!', 'OK', {
      duration: 3000
    });
  }

}
