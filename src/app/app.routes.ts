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
   {
    path: 'legal-notice',
    loadComponent: () =>
      import('./pages/legal-notice/legal-notice').then(m => m.LegalNotice),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/privacy/privacy').then(m => m.Privacy),
  },
  { path: '**', redirectTo: '' },];
