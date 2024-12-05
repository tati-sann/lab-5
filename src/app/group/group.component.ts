import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TypographyComponent} from '../../components/typography/typography.component';
import {NgForOf, NgIf} from '@angular/common';
import {GroupService} from '../../module/group/service/group.service';
import {GroupModel} from '../../module/group/model';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {ReactiveFormsModule} from '@angular/forms';
import {StudentService} from '../../module/student/service/student.service';
import {StudentModel} from '../../module/student/model';
import {StudentCardComponent} from '../../components/student-card/student-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    TypographyComponent,
    NgIf, MatFormFieldModule, MatSelectModule, NgForOf, MatListModule, ReactiveFormsModule, StudentCardComponent, MatButtonModule
  ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent implements OnInit {
  selectedGroup: string | null = null;
  groups: GroupModel[] = [];
  students: StudentModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private studentService: StudentService,
    private router: Router,
    public dialog: MatDialog,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedGroup = params.get('id') ?? null;
    });

    this.groupService.list().subscribe((groups) => {
      this.groups = groups;
    })

    if (this.selectedGroup) {
      this.getStudentsByGroup(this.selectedGroup);
    }
  }

  onGroupSelected(selected: string | null) {
    if (selected) {
      this.getStudentsByGroup(selected);
    }
    this.router.navigate(['/group', selected]);
    this.changeDetector.detectChanges();
  }

  getStudentsByGroup(group: string) {
    this.studentService.list(group).subscribe((students) => {
      this.students = students;
    });
  }

  toAddStudent() {
    this.router.navigate(['/student']);
  }
}
