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
  private searchedItemsDisplay: string = '';
  private trendingItemsDisplay: string = '';
  
  allItems: CompxItem[];
  trendingItems: CompxItem[];

  constructor() {
    this.allItems = this.mapItems();
    this.trendingItems = this.mapItems();
  }

  private mapItems = () => {
    return fakeCompxItems.map(item => {
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

  searchForItems = (event: any) => {
    let lowerItemNames = this.allItems.map(item => item.name.toLowerCase());
    let lowerSearchValue = event.target.value.toLowerCase();
    console.log(lowerSearchValue);
  }
}