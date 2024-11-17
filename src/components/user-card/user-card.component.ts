import { Component, Input } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { NgClass, NgFor } from '@angular/common';
import { TypographyComponent } from '../typography/typography.component';

export type Description = {
  id: number;
  description: string;
}

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    HeadingComponent,
    AvatarComponent,
    NgClass,
    TypographyComponent,
    NgFor,

  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() fullName: string = '';
  @Input() photoUrl: string = '';
  @Input() reverse: boolean = false;
  @Input() educations: Description[] = [];
  @Input() works: Description[] = [];
  @Input() skills: Description[] = [];
}
