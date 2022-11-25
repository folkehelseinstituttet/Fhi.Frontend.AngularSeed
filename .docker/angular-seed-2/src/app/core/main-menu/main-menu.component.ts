import { Component, Input } from '@angular/core';

import { MainMenuItem } from './main-menu-item.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {

  @Input() projectName: string = '';

  mainMenuIsOpen = false;

  mainMenuItems: MainMenuItem[] = [{
    name: 'Demo-feature',
    link: `/demo-feature`
  }];

  mainMenuClose(): void {
    this.mainMenuIsOpen = false;
  }

  mainMenuToggle(): void {
    this.mainMenuIsOpen = !this.mainMenuIsOpen;
  }

}
