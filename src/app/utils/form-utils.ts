import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {
  static isValidField(form: FormGroup, field: string): boolean {
    return !!form.controls[field].errors && form.controls[field].touched;
  }

  static getErrorMessage(errors: ValidationErrors): string | null {
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

  static getFieldError(form: FormGroup, field: string): string | null {
    if (!form.controls[field]) return null;
    const errors = form.controls[field].errors ?? {};
    return this.getErrorMessage(errors);
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
    return this.getErrorMessage(errors);
  }
}
