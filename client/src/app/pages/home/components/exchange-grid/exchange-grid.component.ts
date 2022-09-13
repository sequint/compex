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
  
  trendingItems: any = [];
  allItems: any = [];

  constructor(public crudService: CrudService) {}

  //** Private functions that intiate all item arrays from on init **//

  private addArrowClassesToItems(trendingItems: any) {
    console.log('in');
    return trendingItems.map((item: any) => {
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
  private getAndAssignItems() {
    this.crudService.getAllItems().subscribe((res: {}) => {
      this.trendingItems = res;
      this.trendingItems = this.addArrowClassesToItems(this.trendingItems);
      this.allItems = this.trendingItems;
    });
  }

  // On component intialization, get all trending items and assign to local arrays
  ngOnInit() {
    this.getAndAssignItems();
  }

  //** Public functions for user interaction **//

  getSearchedItemsClass = () => this.searchedItemsClass;
  getTrendingItemsClass = () => this.trendingItemsClass;
  getSearchValue = () => this.searchValue;

  searchForItems = (searchValue: string) => {

    this.searchValue = searchValue;

    let lowerSearchValue = this.searchValue.toLowerCase();

    if (lowerSearchValue.length > 0) {
      this.searchedItemsClass = '';
      this.trendingItemsClass = 'hide';

      this.allItems = this.trendingItems.filter((item: any) => {
        return item.name.toLowerCase().slice(0, lowerSearchValue.length) === lowerSearchValue;
      });

    }
    else {
      this.searchedItemsClass = 'hide';
      this.trendingItemsClass = '';
    }

  }
  
}
