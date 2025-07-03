import { FormArray, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {
  static isValidField(form: FormGroup, field: string): boolean {
    return !!form.controls[field].errors && form.controls[field].touched;
  }

  static getInputErrorMessage(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `El campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El valor debe ser mayor a ${errors['min'].min}`;
      }
    }
    return null;
  }

  static getArrayErrorMessage(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'minlength':
          return `El arreglo debe tener al menos ${errors['minlength'].requiredLength} elementos`;
        case 'required':
          return 'El arreglo es requerido';
      }
    }
    return null;
  }

  static getFieldError(form: FormGroup, field: string): string | null {
    if (!form.controls[field]) return null;
    const errors = form.controls[field].errors ?? {};
    return this.getInputErrorMessage(errors);
  }

  static isValidArray(formArray: FormArray): boolean {
    return !!formArray.errors;
  }

  static getArrayError(formArray: FormArray): string | null {
    if (!formArray.errors) return null;
    const errors = formArray.errors ?? {};
    return this.getArrayErrorMessage(errors);
  }

  static isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors &&
      formArray.controls[index].touched
    );
  }

  static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
    if (!formArray.controls[index]) return null;
    const errors = formArray.controls[index].errors ?? {};
    return this.getInputErrorMessage(errors);
  }

  static isValidInput(input: FormControl): boolean {
    return !!input.errors && input.touched;
  }

  static getInputError(input: FormControl): string | null {
    const errors = input.errors ?? {};
    return this.getInputErrorMessage(errors);
  }
}
