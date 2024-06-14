import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})

export class BannerComponent {
  @Input() image!: string;
  @Output() onClick: EventEmitter<string> = new EventEmitter();
}
