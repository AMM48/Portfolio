import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CliComponent } from './pages/cli/cli.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cli', component: CliComponent},
];
