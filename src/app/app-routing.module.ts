import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { CycicComponent } from './cycic/cycic.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: 'cycic', component: CycicComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: '', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [CycicComponent, AboutComponent, ContactComponent ,HomeComponent]