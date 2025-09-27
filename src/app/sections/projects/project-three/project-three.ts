import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-three',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './project-three.html',
  styleUrls: ['./project-three.scss']
})
export class ProjectThree implements AfterViewInit {
  @ViewChild('projectThreeContainer', { static: true }) el!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    if (typeof window === 'undefined') return;

    const getEl = () =>
      this.el?.nativeElement ?? document.querySelector<HTMLElement>('.project-three-container');

    const threshold = 0.9; // wie bei den anderen
    const check = () => {
      const target = getEl();
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      if (rect.height === 0) return; // warten bis Layout/Bilder Höhe liefern

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