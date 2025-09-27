import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-two',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './project-two.html',
  styleUrls: ['./project-two.scss']
})
export class ProjectTwo implements AfterViewInit {
  @ViewChild('projectTwoContainer', { static: true }) el!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    if (typeof window === 'undefined') return;

    const getEl = () =>
      this.el?.nativeElement ?? document.querySelector<HTMLElement>('.project-two-container');

    const threshold = 0.75;
    const check = () => {
      const target = getEl();
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      if (rect.height === 0) return;

      if (rect.top <= vh * threshold) {
        target.classList.add('visible');
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    };

    const onScroll = () => requestAnimationFrame(check);

    window.addEventListener('load', check);
    requestAnimationFrame(check);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }
}