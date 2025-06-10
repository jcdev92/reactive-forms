import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-country-page',
  imports: [JsonPipe],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent { }
