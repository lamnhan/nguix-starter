import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), pathMatch: 'full' },
  { path: 'guides', loadChildren: () => import('./pages/guides/guides.module').then(m => m.GuidesPageModule) },
  { path: 'guide/:id', loadChildren: () => import('./pages/guide/guide.module').then(m => m.GuidePageModule) },
  { path: 'templates', loadChildren: () => import('./pages/templates/templates.module').then(m => m.TemplatesPageModule) },
  { path: 'components', loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsPageModule) },
  { path: 'template/:id', loadChildren: () => import('./pages/template/template.module').then(m => m.TemplatePageModule) },
  { path: 'component/header', loadChildren: () => import('./pages/component/header/header.module').then(m => m.HeaderPageModule) },
  { path: 'component/footer', loadChildren: () => import('./pages/component/footer/footer.module').then(m => m.FooterPageModule) },
  { path: '**', loadChildren: () => import('./pages/oops/oops.module').then(m => m.OopsPageModule) },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
