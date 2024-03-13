import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

export const routes: Routes = [
  {
    path: '', component: FirstComponent
  },
  {
    path: 'list', component: ListRenderComponent
  }
];
