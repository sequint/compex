import { Component } from '@angular/core';
import { CompxItem } from 'src/interfaces/CompxItem';
import { fakeCompxItems } from 'src/db/fakeCompxItemsDb';

/**
 * @title ExchangeGrid
 */
@Component({
    selector: 'exchange-grid',
    templateUrl: './exchange-grid.component.html',
    styleUrls: ['./exchange-grid.component.css'],
  }
)

export class ExchangeGridComponent {
  compxItems: CompxItem[];

  constructor() {
    this.compxItems = fakeCompxItems;

    // this.setArrowIcon();
  }

  setArrowIcon = () => {
    if (this.compxItems[0].valChange > 0) { this.compxItems[0].arrowIcon = 'gg-arrow-up'}
    else if (this.compxItems[0].valChange < 0) { this.compxItems[0].arrowIcon = 'gg-arrow-down'};
  }
}
