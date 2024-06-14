import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() image!: string;
}
