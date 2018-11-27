import { InternationalizationService } from '@frame/services/internationalization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Root } from '@frame/root/root';


export class AppRoot extends Root {
  constructor(
    private aroute: ActivatedRoute,
    private translate: InternationalizationService
  ) {
    super(aroute);
    this.translate.setDefaultLanguage();
  }
}