import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypographyComponent } from '../../components/typography/typography.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    TypographyComponent,
    NgIf
  ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent implements OnInit{
  groupId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.groupId = params.get('id');
    });
  }
}
