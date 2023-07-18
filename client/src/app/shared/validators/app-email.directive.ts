import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appAppEmail]'
})
export class AppEmailDirective implements Validator, OnChanges {
@Input() appEmail: string[] = [];
  constructor() { }

validate(control: AbstractControl<any, any>): ValidationErrors | null {
  return null
}


ngOnChanges(changes: SimpleChanges): void {
  
}
}
