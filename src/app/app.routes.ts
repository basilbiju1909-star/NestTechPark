import { Routes } from '@angular/router';
import { Home } from './Ui/home/home';
import { About } from './Ui/about/about';
import { Service } from './Ui/service/service';
import { Contact } from './Ui/contact/contact';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'home', component: Home},
    {path:'about',component:About},
    {path:'service',component:Service},
    {path:'contact',component:Contact}
];
