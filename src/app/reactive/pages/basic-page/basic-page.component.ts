import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  fb = inject(FormBuilder);

  myForm = this.fb.group({
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
}
