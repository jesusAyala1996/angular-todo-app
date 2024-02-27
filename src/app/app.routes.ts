import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';

//Aqui se enrutan los diferentes modulos
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'labs',
    component: LabsComponent,
  },
];
