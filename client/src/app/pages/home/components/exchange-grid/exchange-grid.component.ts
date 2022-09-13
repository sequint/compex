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
  tempItemsArray: any = [];
  trendingItems: any = [];

  constructor(public crudService: CrudService) {}

  //** Private functions that intiate all item arrays from on init **//

  private addArrowClassesToItems(trendingItems: CompxItem[]) {
    return this.trendingItems.map((item: any) => {
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

  // Get all items then assign items to arrays to be worked with
  private getAllItems() {
    this.crudService.getAllItems().subscribe((res: {}) => {
      this.trendingItems = res;
      this.allItems = this.addArrowClassesToItems(this.trendingItems);
      this.tempItemsArray = this.allItems;
      this.trendingItems = this.allItems;
    });
  }

  // On component intialization, get all trending items from the server
  ngOnInit() {
    this.getAllItems();
  }

  //** Public functions for user interaction **//

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
