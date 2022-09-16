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
  trendingItems: CompxItem[] = [];
  itemSearchResults: CompxItem[] = [];
  searchedItemsClass: string = 'hide';
  trendingItemsClass: string = '';
  searchValue: string = '';

  constructor(public crudService: CrudService) {}

  private sortTopFourItems(items: CompxItem[]) {
    return items.sort((a, b) => (a.tradeVolumeRank > b.tradeVolumeRank) ? 1 : -1);
  }

  private getTopFourByTradeVolumeRank(items: CompxItem[]) {
    let topFourItems: CompxItem[] = [];

    topFourItems = items.filter((item: CompxItem) => item.tradeVolumeRank <= 4);
    topFourItems = this.sortTopFourItems(topFourItems);

    return topFourItems;
  }

  private addArrowClassesToItems(trendingItems: any) {
    return trendingItems.map((item: CompxItem) => {
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
      this.trendingItems = this.getTopFourByTradeVolumeRank(this.trendingItems);
      console.log(this.trendingItems);
    });
  }

  // On component load get trending items from the server
  ngOnInit() {
    this.getTrendingItems();
  }

  searchForItems(searchValue: string) {
    // Assign input value to searchValue
    this.searchValue = searchValue;

    // Filter trending items into search results by comparing search val to item name
    this.itemSearchResults = this.trendingItems.filter((item: any) => {
      return item.name.toLowerCase().slice(0, searchValue.length) === searchValue.toLowerCase();
    });

    // Change grid visibility based on whether there is a search input or not
    if (searchValue.length > 0) {
      this.searchedItemsClass = '';
      this.trendingItemsClass = 'hide';
    }
    else {
      this.searchedItemsClass = 'hide';
      this.trendingItemsClass = '';
    }
  }
}
