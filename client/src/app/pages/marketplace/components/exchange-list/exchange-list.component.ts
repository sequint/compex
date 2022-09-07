import { Component } from '@angular/core';
import { CompxItem } from 'src/app/shared/interfaces/CompxItem';
import { fakeCompxItems } from 'src/db/fakeCompxItemsDb';

/**
 * @title ExchangeList
 */
@Component({
    selector: 'exchange-list',
    templateUrl: './exchange-list.component.html',
    styleUrls: ['./exchange-list.component.css'],
  }
)

export class ExchangeListComponent {
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
        item.downArrowClass = 'hide';
        item.changeColorClass += ' compx-item positive-change';
      }
      else if (item.valChange < 0) {
        item.upArrowClass = 'hide';
        item.changeColorClass += ' compx-item negative-change';
      }
      else {
        item.upArrowClass = 'hide';
        item.downArrowClass = 'hide';
      }

      return item;
    });
  }

  getSearchedItemsClass = () => this.searchedItemsClass;
  getTrendingItemsClass = () => this.trendingItemsClass;
  getSearchValue = () => this.searchValue;

  setItemSearchValue = (searchValue: string) => this.searchValue = searchValue;

  searchForItems = (searchValue: string) => {

    this.searchValue = searchValue;

    let lowerSearchValue = this.searchValue.toLowerCase();

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
