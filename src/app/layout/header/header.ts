import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  current: 'de' | 'en' = 'de';

  constructor(private translate: TranslateService) {
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('app-lang') as 'de' | 'en' | null;
      if (savedLang) {
        this.current = savedLang;
        this.translate.use(savedLang);
      }
    }
  }

  setLang(lang: 'de' | 'en') {
    this.current = lang;
    this.translate.use(lang);
    if (this.isBrowser) {
      localStorage.setItem('app-lang', lang);
    }
  }

  toggleMenu() {
    const burgerBox = document.querySelector('#burger-box');
    const burgerMenu = document.querySelector('#menu');
    const headerRight = document.querySelector('#header-right');
    burgerMenu?.classList.toggle('burger-menu-active');
    headerRight?.classList.toggle('flex');
    burgerBox?.classList.toggle('active-burger');
  }
}