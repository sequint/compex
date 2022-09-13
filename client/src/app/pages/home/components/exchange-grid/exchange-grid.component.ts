import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import { CompxItem } from 'src/app/shared/interfaces/CompxItem';

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
  private searchedItemsClass: string = 'hide';
  private trendingItemsClass: string = '';
  private searchValue: string = '';
  
  allItems: any = [];
  tempAllItems: any = [];
  tempItemsArray: any = [];
  trendingItems: any = [];

  constructor(public crudService: CrudService) {}

  getAllItems() {
    console.log('in get all');
    this.crudService.getAllItems().subscribe((res: {}) => {
      this.tempAllItems = res;
      this.allItems = this.addArrowClassesToItems();
      this.tempItemsArray = this.allItems;
      this.trendingItems = this.allItems;
    });
  }

  ngOnInit() {
    this.getAllItems();
  }

  private addArrowClassesToItems = () => {
    return this.tempAllItems.map((item: any) => {
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

      this.allItems = this.tempItemsArray.filter((item: any) => {
        return item.name.toLowerCase().slice(0, lowerSearchValue.length) === lowerSearchValue;
      });

    }
    else {
      this.searchedItemsClass = 'hide';
      this.trendingItemsClass = '';
    }

  }
  
}
