import { Component } from '@angular/core';

/**
 * @title SideNav
 */
@Component({
    selector: 'side-nav',
    templateUrl: 'side-nav.component.html',
    styleUrls: ['side-nav.component.css'],
  }
)

export class SideNavComponent {
  private menuOpen: boolean;
  private openCntClass: string;
  private closedCntClass: string;
  private openMnClass: string;
  private closedMnClass: string;

  menuItems: string[];

  constructor() {
    this.menuOpen = false;
    this.openCntClass = 'side-menu-container show-menu-container';
    this.closedCntClass = 'side-menu-container';
    this.openMnClass = 'side-menu show-side-menu';
    this.closedMnClass = 'side-menu';
    this.menuItems = ['home', 'marketplace'];
  }

  toggleMenuOpen = () => this.menuOpen = !this.menuOpen;
  getMenuContainerClass = () => this.menuOpen ? this.openCntClass : this.closedCntClass;
  getMenuClass = () => this.menuOpen ? this.openMnClass : this.closedMnClass;
}
