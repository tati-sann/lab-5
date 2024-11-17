import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() size: number = 50;
  @Input() photoUrl: string = '';
}
