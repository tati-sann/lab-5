import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appItalicIfMinor]',
  standalone: true
})
export class ItalicIfMinorDirective {

  constructor(private el: ElementRef) { }

  @Input('appItalicIfMinor') isMinor!: boolean;
  ngOnInit() {
    if (this.isMinor) {
      this.el.nativeElement.style.fontStyle = 'italic';
    }
  }
}
