import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  images = [
    'assets/img/corporativo.png',
    'assets/img/corporativo2.png',
    'assets/img/casamento.png',
    'assets/img/casamento2.png'
  ];

  currentIndex = 0;

  // Swipe tracking
  touchStartX = 0;
  touchEndX = 0;
  mouseDown = false;
  mouseStartX = 0;

  previous(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  onSlideClick(i: number): void {
    const diff = i - this.currentIndex;
    if (diff === 1 || diff === -this.images.length + 1) {
      this.next();
    } else if (diff === -1 || diff === this.images.length - 1) {
      this.previous();
    }
  }

  getClass(i: number): string {
    const diff = i - this.currentIndex;
    if (diff === 0) return 'center';
    if (diff === -1 || diff === this.images.length - 1) return 'left';
    if (diff === 1 || diff === -this.images.length + 1) return 'right';
    return '';
  }

  // Touch events
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  // Mouse events
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.mouseDown = true;
    this.mouseStartX = event.clientX;
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    if (!this.mouseDown) return;
    const diffX = event.clientX - this.mouseStartX;
    this.mouseDown = false;
    if (diffX > 50) this.previous();
    else if (diffX < -50) this.next();
  }

  private handleSwipe(): void {
    const diff = this.touchStartX - this.touchEndX;
    if (diff > 50) this.next();
    else if (diff < -50) this.previous();
  }
}
