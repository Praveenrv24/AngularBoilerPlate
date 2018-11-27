import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LANGAUAGE } from './../../../constants/language-constants';


@Injectable({
  providedIn: 'root'
})
export class InternationalizationService {

  constructor(private translate: TranslateService) { }

  // set default language of the app
  setDefaultLanguage(lang?: string) {
    const language = lang ? lang : LANGAUAGE.default;
    this.translate.setDefaultLang(language);
  }

  // set all languages which supports by the app. example ['en', 'fr']
  addLanguage() {
    const lang = LANGAUAGE.lang;
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
