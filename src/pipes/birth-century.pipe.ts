import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthCentury',
  standalone: true
})
export class BirthCenturyPipe implements PipeTransform {
  transform(birthDate: Date): string {
    const birthYear = birthDate.getFullYear();
    const century = Math.floor((birthYear - 1) / 100) + 1;

    return `Родился в ${century} веке нашей эры`;
  }
}
