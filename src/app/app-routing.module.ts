import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  // general pages (including the ** route)
  { path: 'terms', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixTermsPageModule) },
  { path: 'privacy', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixPrivacyPageModule) },
  // documation pages
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), pathMatch: 'full' },
  { path: 'guides', loadChildren: () => import('./pages/guides/guides.module').then(m => m.GuidesPageModule) },
  { path: 'guide/:id', loadChildren: () => import('./pages/guide/guide.module').then(m => m.GuidePageModule) },
  { path: 'templates', loadChildren: () => import('./pages/templates/templates.module').then(m => m.TemplatesPageModule) },
  { path: 'template/:id', loadChildren: () => import('./pages/template/template.module').then(m => m.TemplatePageModule) },
  { path: 'splashscreens', loadChildren: () => import('./pages/splashscreens/splashscreens.module').then(m => m.SplashscreensPageModule) },
  { path: 'components', loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsPageModule) },
  { path: 'component/header', loadChildren: () => import('./pages/component/header/header.module').then(m => m.HeaderPageModule) },
  { path: 'component/header2nd', loadChildren: () => import('./pages/component/header2nd/header2nd.module').then(m => m.Header2ndPageModule) },
  { path: 'component/footer', loadChildren: () => import('./pages/component/footer/footer.module').then(m => m.FooterPageModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages/pages.module').then(m => m.PagesPageModule) },
  { path: 'page/oops', loadChildren: () => import('./pages/page/oops/oops.module').then(m => m.OopsPageModule) },
  { path: 'page/terms', loadChildren: () => import('./pages/page/terms/terms.module').then(m => m.TermsPageModule) },
  { path: 'page/privacy', loadChildren: () => import('./pages/page/privacy/privacy.module').then(m => m.PrivacyPageModule) },
  { path: 'splashscreen/heartbeat', loadChildren: () => import('./pages/splashscreen/heartbeat/heartbeat.module').then(m => m.HeartbeatPageModule) },
  { path: 'splashscreen/bouncing', loadChildren: () => import('./pages/splashscreen/bouncing/bouncing.module').then(m => m.BouncingPageModule) },
  { path: 'splashscreen/still', loadChildren: () => import('./pages/splashscreen/still/still.module').then(m => m.StillModule) },
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
