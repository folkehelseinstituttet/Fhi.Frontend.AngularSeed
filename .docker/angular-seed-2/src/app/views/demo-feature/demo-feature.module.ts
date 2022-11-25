import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { DemoFeatureRoutingModule } from './demo-feature-routing.module';

@NgModule({
  declarations: [
    DemoFeatureRoutingModule.components
  ],
  imports: [
    DemoFeatureRoutingModule,
    SharedModule
  ]
})
export class DemoFeatureModule { }
