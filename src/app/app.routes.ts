import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/features/home/pages/home'),
    },
    {
        path: 'mentions-legales',
        loadComponent: () => import('../app/features/mentions-legales/mentions-legales'),
    },
    {
        path: '**',
        loadComponent: () => import('../app/features/not-found/not-found'),
    },
];
