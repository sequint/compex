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
  private menuOpen: boolean = false;
  private openCntClass: string = 'side-menu-container show-menu-container';
  private closedCntClass: string = 'side-menu-container';
  private openMnClass: string = 'side-menu show-side-menu';
  private closedMnClass: string = 'side-menu';

  menuItems: MenuItem[] = [
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
      },
      {
        title: 'compost',
        route: '/compost'
      }
    ];

  toggleMenuOpen = () => this.menuOpen = !this.menuOpen;

  getMenuContainerClass = () => this.menuOpen ? this.openCntClass : this.closedCntClass;
  
  getMenuClass = () => this.menuOpen ? this.openMnClass : this.closedMnClass;
}
