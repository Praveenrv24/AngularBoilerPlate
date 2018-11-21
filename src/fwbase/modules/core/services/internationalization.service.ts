import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class InternationalizationService {

  constructor(private translate: TranslateService) { }

  // set default language of the app
  setDefaultLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }

  // set all languages which supports by the app. example ['en', 'fr']
  addLanguage(lang: string[]) {
    this.translate.addLangs(lang);
  }

  // get all the languages which are added
  getLanguages() {
    return this.translate.getLangs();
  }

  //use selected language 
  useLanguage(lang: string) {
    this.translate.use(lang);
  }
}
