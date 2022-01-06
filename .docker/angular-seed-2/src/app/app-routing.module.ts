import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'demo-feature'
}, {
  path: 'demo-feature',
  loadChildren: () => import('./demo-feature/demo-feature.module').then(m => m.DemoFeatureModule)
}, {
  path: '**',
  redirectTo: 'demo-feature'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
