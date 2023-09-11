import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
@Input()
control!: AbstractControl;
@Input()
showErrorsWhen:boolean = true;
@Input()
label!:string;
@Input()
type: 'text' | 'password' | 'email' = 'text';

get formControl(){
  return this.control as FormControl;
}
}
