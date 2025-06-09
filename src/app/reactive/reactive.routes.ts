import { Route } from "@angular/router";
import { BasicPageComponent } from "./pages/basic-page/basic-page.component";
import { DynamicPageComponent } from "./pages/dynamic-page/dynamic-page.component";
import { SwitchesPageComponent } from "./pages/switches-page/switches-page.component";

export const reactiveRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Basic Form',
        component: BasicPageComponent
      },
      {
        path: 'dynamic',
        title: 'Dynamic Form',
        component: DynamicPageComponent
      },
      {
        path: 'switches',
        title: 'Switches',
        component: SwitchesPageComponent
      },
      {
        path: '**',
        redirectTo: 'basic',
      }
    ]
  }
];

