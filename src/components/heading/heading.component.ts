import { Component, Input } from '@angular/core';
import { NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [
    NgSwitch,
    NgStyle,
    NgSwitchCase
  ],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
  @Input() level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
  @Input() variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
  @Input() weight: string = 'bold';
  @Input() text: string = '';

  styles = {
    h1: { fontSize: '44px', lineHeight: '52px' },
    h2: { fontSize: '32px', lineHeight: '40px' },
    h3: { fontSize: '28px', lineHeight: '36px' },
    h4: { fontSize: '24px', lineHeight: '36px' },
    h5: { fontSize: '20px', lineHeight: '24px' },
    h6: { fontSize: '18px', lineHeight: '24px' },
  };

  get variantStyles() {
    return this.styles[this.variant];
  }
}
