import { ResolveFn, Routes } from '@angular/router';
import { MainComponent } from './components/view-blocks/main/main.component';
import { LoginPageComponent } from './components/view-blocks/login-page/login-page.component';
import { VideoPageComponent } from './components/view-blocks/video-page/video-page.component';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('Angular project | video page');

export const routes: Routes = [
    {path: 'main', title: 'Angular project | main page', component: MainComponent, children: [
        {path: 'video', title: resolvedChildATitle, component: VideoPageComponent},
    ]},
    {path: 'login', title: 'Angular project | login page', component: LoginPageComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', redirectTo: 'login'},
];