import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-pages-page',
  templateUrl: './pages-page.component.html',
  styleUrls: ['./pages-page.component.scss']
})
export class PagesPageComponent implements OnInit {

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
