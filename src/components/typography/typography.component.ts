import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss'
})
export class TypographyComponent {
  @Input() size: string = '16px';
  @Input() weight: string = 'normal';
  @Input() lineHeight: string = 'normal';
}
