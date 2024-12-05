import { Component, Input } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { NgClass, NgFor } from '@angular/common';
import { TypographyComponent } from '../typography/typography.component';
import moment from 'moment';
import {ItalicIfMinorDirective} from '../../directives/italic-if-minor.directive';
import {BirthCenturyPipe} from '../../pipes/birth-century.pipe';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [
    HeadingComponent,
    AvatarComponent,
    NgClass,
    TypographyComponent,
    NgFor,
    ItalicIfMinorDirective,
    BirthCenturyPipe,
    MatButtonModule,

  ],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.scss'
})
export class StudentCardComponent {
  @Input() fullName: string = '';
  @Input() dateOfBirth: string = '';
  @Input() groupLink: string = '';
  @Input() course: number = 0;
  @Input() yearOfAdmission: number = 0;
  @Input() id: string = '';

  birthDate = new Date()
  age = 0;
  url = ""

  constructor() {
  }

  ngOnInit() {
    this.birthDate = new Date(this.dateOfBirth);
    const currentDate = moment();
    this.age = currentDate.diff(this.birthDate, "year");
    this.url = `/student/${this.id}`
  }
}
