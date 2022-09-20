import { Component } from '@angular/core';

/**
 * @title Compost
 */
@Component({
    selector: 'compost',
    templateUrl: './compost.component.html',
  }
)

export class CompostPage {
  currentTab: string = 'Green';

  toggleCurrentTab = (currentTab: string) => this.currentTab = currentTab;
}
