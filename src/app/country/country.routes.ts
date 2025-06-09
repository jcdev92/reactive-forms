import { Route } from "@angular/router";
import { CountryPageComponent } from "./pages/country-page/country-page.component";

export const authRoutes: Route[] = [
  {
    path: '',
    component: CountryPageComponent
  }
];

