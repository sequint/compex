import { Component, OnInit } from '@angular/core';
import { CompxItem } from 'src/app/shared/interfaces/CompxItem';
import { CrudService } from 'src/app/shared/services/crud.service';
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

export class ExchangeGridComponent implements OnInit {
  private searchedItemsClass: string;
  private trendingItemsClass: string;
  private searchValue: string;
  private tempItemsArray: CompxItem[];
  
  allItems: any = [];
  trendingItems: any = [];

  constructor(public crudService: CrudService) {
    this.searchedItemsClass = 'hide';
    this.trendingItemsClass = '';
    this.searchValue = '';
    this.allItems = this.mapItems();
    this.trendingItems = this.mapItems();
    this.tempItemsArray = this.allItems;
  }

  ngOnInit = () => {
    this.getAllItems();
  }

  getAllItems = () => {
    this.crudService.getAllItems().subscribe((res: {}) => {
      this.allItems = res;
    });
  }

  private mapItems = () => {
    return fakeCompxItems.map(item => {
      if (item.valChange > 0) {
        item.downArrowClass = 'hide';
        item.changeColorClass += ' positive-change';
      }
      else if (item.valChange < 0) {
        item.upArrowClass = 'hide';
        item.changeColorClass += ' negative-change';
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
    console.log(lowerSearchValue);

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
