import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../module/student/service/student.service';
import {NgForOf} from '@angular/common';
import {GroupService} from '../../module/group/service/group.service';
import {GroupModel} from '../../module/group/model';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HeadingComponent} from '../../components/heading/heading.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    NgForOf,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HeadingComponent
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  studentForm: FormGroup;
  groups: GroupModel[] = [];
  title = 'Добавить студента';
  isFormSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private studentService: StudentService,
    private groupService: GroupService,
    private route: ActivatedRoute
  ) {
    this.studentForm = this.fb.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      groupLink: ['', Validators.required],
      course: ['', [Validators.required, Validators.min(1)]],
      yearOfAdmission: ['', [Validators.required, Validators.min(2000)]]
    });
  }

  ngOnInit() {
    this.groupService.list().subscribe((groups) => {
      this.groups = groups;
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? null;

      if (id) {
        this.title = "Редактировать студента"

        this.studentService.item(id).subscribe((student) => {
          if (student) {
            this.studentForm.patchValue(student);
          }
        });
      }
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const id = this.route.snapshot.paramMap.get('id');

      const request$ = id ?
        this.studentService.edit(id, this.studentForm.value) :
        this.studentService.create(this.studentForm.value);

      request$.subscribe(() => {
        this.isFormSubmitted = true;
        const groupLink = this.studentForm.get('groupLink')?.value;
        this.router.navigate([`/group/${groupLink}`]);
      }, error => {
        console.error(error);
      });
    }
  }

  onCancel() {
    this.router.navigate([`/group`]);
  }
}
