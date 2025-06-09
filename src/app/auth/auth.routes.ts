import { Route } from "@angular/router";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

const authRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        component: RegisterPageComponent
      },
      {
        path: '**',
        redirectTo: 'sign-up',
      }
    ]
  }
];

export default authRoutes;
