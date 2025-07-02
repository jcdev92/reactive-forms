import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, Form } from '@angular/forms';
import { FormUtils } from '@app/utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  formUtils = FormUtils;

  fb = inject(FormBuilder);
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  // Alternatively, you can create the form controls manually like this:
  // myForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0, [] // validadores sincronos, [] // validadores asincronos),
  //   inStorage: new FormControl(0),
  // })

  // isValidField(field: string): boolean {
  //   return !!this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  // }

  // getFieldError(field: string): string | null {
  //   if (!this.myForm.controls[field]) return null;
  //   const errors = this.myForm.controls[field].errors ?? {};

  //   for (const key of Object.keys(errors)) {
  //     switch (key) {
  //       case 'required':
  //         return 'Este campo es requerido';
  //       case 'minlength':
  //         return `El campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
  //       case 'min':
  //         return `El valor debe ser mayor a ${errors['min'].min}`;
  //     }
  //   }
  //   return null;
  // }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset({
      name: '',
      price: 0,
      inStorage: 0,
    });
  }
}

