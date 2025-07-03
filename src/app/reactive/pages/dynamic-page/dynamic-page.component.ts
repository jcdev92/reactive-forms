import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
  formUtils = FormUtils;

  private fb = inject(FormBuilder);
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', [Validators.required, Validators.minLength(3)]],
      ['Final Fantasy', [Validators.required, Validators.minLength(3)]],
    ],
    Validators.minLength(2) // Validación para que al menos haya 3 juegos
  )
  });

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

}
