import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './recommendations.html',
  styleUrls: ['./recommendations.scss']
})
export class Recommendations implements AfterViewInit {
  @ViewChild('recommendations', { static: true }) el!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    if (typeof window === 'undefined') return;

    const getEl = () =>
      this.el?.nativeElement ?? document.querySelector<HTMLElement>('.recommendations');

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

    @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLDivElement>;

  dragging = false;
  private startX = 0;
  private startScrollLeft = 0;
  private pointerId: number | null = null;

  onPointerDown(ev: PointerEvent) {
    const el = this.trackRef.nativeElement;
    this.dragging = true;
    this.pointerId = ev.pointerId;
    el.setPointerCapture?.(ev.pointerId);

    this.startX = ev.clientX;
    this.startScrollLeft = el.scrollLeft;
  }

  onPointerMove(ev: PointerEvent) {
    if (!this.dragging) return;
    const el = this.trackRef.nativeElement;

    const dx = ev.clientX - this.startX;
    el.scrollLeft = this.startScrollLeft - dx; // drag = scroll
  }

  onPointerUp(ev: PointerEvent) {
    if (!this.dragging) return;
    this.dragging = false;

    const el = this.trackRef.nativeElement;
    if (this.pointerId != null) {
      el.releasePointerCapture?.(this.pointerId);
      this.pointerId = null;
    }
    // scroll-snap erledigt das Einrasten automatisch
  }
}
