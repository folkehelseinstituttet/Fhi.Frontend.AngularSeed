import { Component, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MainMenuItem } from './main-menu-item.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {

  @Input() projectName: string = '';

  faBars = faBars;
  faTimes = faTimes;
  mainMenuIsOpen = false;

  mainMenuItems: MainMenuItem[] = [{
    name: 'Demo-feature',
    routerLink: `/demo-feature`
  }];

  mainMenuClose(): void {
    this.mainMenuIsOpen = false;
  }

  mainMenuToggle(): void {
    this.mainMenuIsOpen = !this.mainMenuIsOpen;
  }

}
