import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNb from '@angular/common/locales/nb';
import localeNbExtra from '@angular/common/locales/extra/nb';
registerLocaleData(localeNb, 'nb', localeNbExtra);

import 'what-input';

import { SharedModule } from '../shared/shared.module';

import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule
  ],
  exports: [
    MainMenuComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nb' },
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core module in the AppModule.');
    }
  }
}
