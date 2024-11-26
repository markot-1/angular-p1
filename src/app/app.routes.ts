import { Routes } from '@angular/router';
import { MainComponent } from './components/view-blocks/main/main.component';
import { LoginPageComponent } from './components/view-blocks/login-page/login-page.component';
import { VideoPageComponent } from './components/view-blocks/video-page/video-page.component';
import { appGuard } from './app.guard';
import { PageNotFoundComponent } from './components/view-blocks/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'login', title: 'Angular project | login page', component: LoginPageComponent},
    {
      path: 'main',
      title: 'Angular project | main page',
      component: MainComponent,
      canActivate: [appGuard],
    },
    {path: 'video/:id', title: 'Angular project | video page', component: VideoPageComponent, canActivate: [appGuard],},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', title: 'Page not found', component: PageNotFoundComponent},
];