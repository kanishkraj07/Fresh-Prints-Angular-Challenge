import { Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'history', component: HistoryComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
