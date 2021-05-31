import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), pathMatch: 'full' },
  { path: 'guides', loadChildren: () => import('./pages/guides/guides.module').then(m => m.GuidesPageModule) },
  { path: 'guide/:id', loadChildren: () => import('./pages/guide/guide.module').then(m => m.GuidePageModule) },
  { path: 'templates', loadChildren: () => import('./pages/templates/templates.module').then(m => m.TemplatesPageModule) },
  { path: 'components', loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsPageModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages/pages.module').then(m => m.PagesPageModule) },
  { path: 'template/:id', loadChildren: () => import('./pages/template/template.module').then(m => m.TemplatePageModule) },
  { path: 'component/header', loadChildren: () => import('./pages/component/header/header.module').then(m => m.HeaderPageModule) },
  { path: 'component/header2nd', loadChildren: () => import('./pages/component/header2nd/header2nd.module').then(m => m.Header2ndPageModule) },
  { path: 'component/footer', loadChildren: () => import('./pages/component/footer/footer.module').then(m => m.FooterPageModule) },
  { path: 'page/oops', loadChildren: () => import('./pages/page/oops/oops.module').then(m => m.OopsPageModule) },
  { path: '**', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixOopsPageModule) },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
