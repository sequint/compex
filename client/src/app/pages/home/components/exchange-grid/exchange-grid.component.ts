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
  itemSearchResults: CompxItem[] = [];

  constructor(public crudService: CrudService) {}

  //** Private functions that intiate all item arrays from on init **//

  private addArrowClassesToItems(trendingItems: any) {
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

  private getTrendingItems() {
    this.crudService.getAllItems().subscribe((res: {}) => {
      // Add arrow classes to array res before assigning to trendingItems array
      this.trendingItems = this.addArrowClassesToItems(res);
    });
  }
  
  ngOnInit() {
    this.getTrendingItems();
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

      this.itemSearchResults = this.trendingItems.filter((item: any) => {
        return item.name.toLowerCase().slice(0, lowerSearchValue.length) === lowerSearchValue;
      });

    }
    else {
      this.searchedItemsClass = 'hide';
      this.trendingItemsClass = '';
    }

  }
  
}
