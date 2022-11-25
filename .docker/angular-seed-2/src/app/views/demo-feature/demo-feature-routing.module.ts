import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoFeatureComponent } from './demo-feature.component';

const routes: Routes = [{
  path: '',
  component: DemoFeatureComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoFeatureRoutingModule {
  static components = [
    DemoFeatureComponent
  ];
}

