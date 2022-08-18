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
  private searchedItemsClass: string;
  private trendingItemsClass: string;
  private searchValue: string;
  private tempItemsArray: CompxItem[];
  
  allItems: CompxItem[];
  trendingItems: CompxItem[];

  constructor() {
    this.searchedItemsClass = 'hide';
    this.trendingItemsClass = '';
    this.searchValue = '';
    this.allItems = this.mapItems();
    this.trendingItems = this.mapItems();
    this.tempItemsArray = this.allItems;
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

  getSearchedItemsClass = () => this.searchedItemsClass;
  getTrendingItemsClass = () => this.trendingItemsClass;
  getSearchValue = () => this.searchValue;

  searchForItems = (event: any) => {
    this.searchValue = event.target.value;

    let lowerSearchValue = event.target.value.toLowerCase();

    if (lowerSearchValue.length > 0) {
      this.searchedItemsClass = '';
      this.trendingItemsClass = 'hide';

      this.allItems = this.tempItemsArray.filter(item => {
        return item.name.toLowerCase().slice(0, lowerSearchValue.length) === lowerSearchValue;
      });
    }
    else {
      this.searchedItemsClass = 'hide';
      this.trendingItemsClass = '';
    }
  }
}
