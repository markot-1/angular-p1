import { Routes } from '@angular/router';
import { MainComponent } from './components/view-blocks/main/main.component';
import { LoginPageComponent } from './components/view-blocks/login-page/login-page.component';
import { VideoPageComponent } from './components/view-blocks/video-page/video-page.component';

export const routes: Routes = [
    {path: 'main', title: 'Angular project | main page', component: MainComponent},
    {path: 'login', title: 'Angular project | login page', component: LoginPageComponent},
    {path: 'video/:id', title: 'Angular project | video page', component: VideoPageComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', redirectTo: 'login'},
];