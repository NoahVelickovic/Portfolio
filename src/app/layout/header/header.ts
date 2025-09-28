import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { get } from 'http';


@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  current = 'de';

  constructor(private translate: TranslateService) {
    this.current = this.translate.currentLang || 'de';
  }

  switchLang(lang: 'de' | 'en') {
    this.current = lang;
    this.translate.use(lang);
}
}