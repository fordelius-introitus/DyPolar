import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Landing } from './pages/landing/landing';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'about-us', component: Landing},
    {path: 'home', component: Home}
];