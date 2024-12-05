import { Component } from '@angular/core';
import { TypographyComponent } from '../../components/typography/typography.component';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { ButtonComponent } from '../../components/button/button.component';
import { users } from '../../assets/data/user.data';
import { NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TypographyComponent,
    UserCardComponent,
    HeadingComponent,
    ButtonComponent,
    NgForOf,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected readonly users = users;

  groupId: string = "6132-020402D";

  constructor(private router: Router) { }

  goToGroup(groupId: string): void {
    this.router.navigate(['/group', groupId]);
  }
}
