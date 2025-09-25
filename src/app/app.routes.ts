import { Routes } from '@angular/router';

export const routes: Routes = [  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./sections/my-projects/my-projects').then(m => m.MyProjects),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./sections/contact/contact').then(m => m.Contact),
  },
  { path: '**', redirectTo: '' },];
