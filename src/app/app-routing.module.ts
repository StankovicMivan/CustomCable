import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { CycicComponent } from './cycic/cycic.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OrderPreviewComponent } from './order-preview/order-preview.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
    {path: 'create', component: CycicComponent,runGuardsAndResolvers: 'always'},
    {path: 'about', component: AboutComponent,runGuardsAndResolvers: 'always'},
    {path: 'contact', component: ContactComponent,runGuardsAndResolvers: 'always'},
    {path: 'cart', component: OrderPreviewComponent,runGuardsAndResolvers: 'always'},
    {path: 'gallery', component: GalleryComponent,runGuardsAndResolvers: 'always'},
    {path: '', component: HomeComponent,runGuardsAndResolvers: 'always'},
    {path: '**', component: HomeComponent,runGuardsAndResolvers: 'always'},

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [CycicComponent, AboutComponent, ContactComponent ,HomeComponent,OrderPreviewComponent,GalleryComponent]