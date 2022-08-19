import { Component } from '@angular/core';

interface MenuItem {
  title: string,
  route: string
}

/**
 * @title NavBar
 */
@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
  }
)

export class NavBarComponent {
  private menuOpen: boolean;
  private openCntClass: string;
  private closedCntClass: string;
  private openMnClass: string;
  private closedMnClass: string;

  menuItems: MenuItem[];

  constructor() {
    this.menuOpen = false;
    this.openCntClass = 'side-menu-container show-menu-container';
    this.closedCntClass = 'side-menu-container';
    this.openMnClass = 'side-menu show-side-menu';
    this.closedMnClass = 'side-menu';
    this.menuItems = [
      {
        title: 'home',
        route: '/'
      },
      {
        title: 'marketplace',
        route: '/marketplace'
      },
      {
        title: 'inventory',
        route: '/inventory'
      }
    ];
  }

  toggleMenuOpen = () => this.menuOpen = !this.menuOpen;
  getMenuContainerClass = () => this.menuOpen ? this.openCntClass : this.closedCntClass;
  getMenuClass = () => this.menuOpen ? this.openMnClass : this.closedMnClass;
}
