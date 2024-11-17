import { Component, SimpleChanges } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TypographyComponent } from '../../components/typography/typography.component';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    TypographyComponent
  ],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  greetingForm: FormGroup;

  greetingMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    console.log('Constructor: Создание экземпляра компонента');

    this.greetingForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

  displayGreeting(): void {
    if (this.greetingForm.valid) {
      const username = this.greetingForm.value.username;

      this.greetingMessage = `Добро пожаловать, ${username}!`;
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit: Компонент был инициализирован');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Изменения в входных данных', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Входные данные изменились');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Содержимое компонента было инициализировано');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Содержимое компонента проверено');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Вид компонента был инициализирован');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: Вид компонента проверен');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Компонент будет уничтожен');
  }
}
