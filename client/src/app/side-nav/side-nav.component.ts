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

  constructor() {
    this.menuOpen = false;
    this.openClass = '';
    this.closedClass = 'hide-element';
  }

  toggleMenuOpen = () => this.menuOpen = !this.menuOpen;
  getMenuClass = () => this.menuOpen ? this.openClass : this.closedClass;
}
