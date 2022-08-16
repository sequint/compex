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
    this.compxItems = fakeCompxItems.map(item => {
      if (item.valChange > 0) {
        item.arrowIcon = 'gg-arrow-up';
        item.changeColorClass += ' positive-change';
      };
      if (item.valChange < 0) {
        item.arrowIcon = 'gg-arrow-down';
        item.changeColorClass += ' negative-change';
      };

      return item;
    });
  }
}
