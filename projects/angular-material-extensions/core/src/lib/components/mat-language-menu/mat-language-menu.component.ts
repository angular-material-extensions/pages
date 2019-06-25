import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Language {
  id: string;
  title: string;
  flag: string;
}

@Component({
  selector: 'mat-language-menu',
  templateUrl: './mat-language-menu.component.html',
  styleUrls: ['./mat-language-menu.component.scss']
})
export class MatLanguageMenuComponent implements OnInit {

  @Input()
  languages: Language[];

  @Input()
  selectedLanguage: Language;

  @Output()
  onLanguageChanged: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Set the language
   *
   * @param lang
   */
  setLanguage(lang: Language): void {
    // Set the selected language for the toolbar
    this.selectedLanguage = lang;

    // Use the selected language for translations
    // this._translateService.use(lang.id);
    this.onLanguageChanged.emit(lang.id);
  }

}
