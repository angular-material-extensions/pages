import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

/**
 * Service responsible for setting the title that appears above the components and guide pages.
 */
@Injectable()
export class ComponentPageTitle {
  // tslint:disable-next-line:variable-name
  _title = '';

  get title(): string { return this._title; }

  set title(title: string) {
    this._title = title;
    if (title !== '') {
      title = `${title} | `;
    }
    this.bodyTitle.setTitle(`${title}Angular Material`);
  }

  constructor(private bodyTitle: Title) { }

}
