import { Component } from '@angular/core';

/**
 * @title SideNav
 */
@Component( {
    selector: 'side-nav',
    templateUrl: 'side-nav.component.html',
    styleUrls: ['side-nav.component.css'],
  }

)

export class SideNavComponent {
  private menuOpen: boolean;
  private openClass: string;
  private closedClass: string;
  
  menuItems: string[];

  constructor() {
    this.menuOpen = false;
    this.openClass = 'side-menu-container';
    this.closedClass = 'hide-element';
    this.menuItems = ['home', 'marketplace'];
  }

  toggleMenuOpen = () => this.menuOpen = !this.menuOpen;
  getMenuClass = () => this.menuOpen ? this.openClass : this.closedClass;
}
