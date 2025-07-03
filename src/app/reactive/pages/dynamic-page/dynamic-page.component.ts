import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    ], [Validators.minLength(2), Validators.required] // Validaciones del arreglo
    )
  });

  newGame = new FormControl('', [Validators.required, Validators.minLength(3)]);

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddGame() {
    if (this.newGame.invalid) {
      this.newGame.markAsTouched();
      return;
    }
    this.favoriteGames.push(this.fb.control(this.newGame.value, [Validators.required, Validators.minLength(3)]));
    this.newGame.reset();
  }

  onRemoveGame(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Form submitted:', this.myForm.value);
  }

}
