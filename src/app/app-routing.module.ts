import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: 'template', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
  { path: 'reactive', loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule) }, 
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
