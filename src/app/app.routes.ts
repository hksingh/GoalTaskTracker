import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './ui/shared/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path:'home',
        loadChildren: () => import('../app/ui/home/home.module').then((m) => m.HomeModule),
    },
    {
        path:'', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', pathMatch:'full', component: PagenotfoundComponent
    }
];
