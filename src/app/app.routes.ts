import { Routes } from '@angular/router';
import { PythagoraszComponent } from './pythagorasz/pythagorasz.component';

export const routes: Routes = [

    {path: 'pythagorasz', component: PythagoraszComponent},
    {path: '', redirectTo: '/pythagorasz', pathMatch: 'full'},
    {path: '**', redirectTo: '/pythagorasz', pathMatch: 'full'}
];
