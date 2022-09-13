import { Component } from '@angular/core';

/**
 * @title Marketplace
 */
@Component({
    selector: 'marketplace',
    templateUrl: './marketplace.component.html',
  }
)

export class MarketplacePage {
  currentTab: string = 'Green';

  toggleCurrentTab = (currentTab: string) => this.currentTab = currentTab;
}
