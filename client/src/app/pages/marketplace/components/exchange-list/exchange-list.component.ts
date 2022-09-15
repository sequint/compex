import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import { CompxItem } from 'src/app/shared/interfaces/CompxItem';

/**
 * @title ExchangeList
 */
@Component({
    selector: 'exchange-list',
    templateUrl: './exchange-list.component.html',
    styleUrls: ['./exchange-list.component.css'],
  }
)

export class ExchangeListComponent implements OnInit {
  allItems: CompxItem[] = [];
  trendingItems: CompxItem[] = [];
  itemSearchResults: CompxItem[] = [];
  searchedItemsClass: string = 'hide';
  trendingItemsClass: string = '';
  searchValue: string = '';

  @Input() focusedTab: string = '';

  constructor(public crudService: CrudService) {}

  private sortTypeByCurrentTab(currentTab: string) {
    // Filter items with a type value equal to the focusedTab
    this.trendingItems = this.allItems.filter((item: CompxItem) => {
      return item.type === currentTab;
    });
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

  private getAllItems() {
    this.crudService.getAllItems().subscribe((res: {}) => {
      // Add arrow classes to array res before assigning to trendingItems array
      this.allItems = this.addArrowClassesToItems(res);

      // Sort the list based on the focused tab
      this.sortTypeByCurrentTab(this.focusedTab);
    });
  }

  // On component load get trending items from the server
  ngOnInit() {
    this.getAllItems();
  }

  ngOnChanges(changes: SimpleChanges) {
    const newTabValue: string = changes['focusedTab'].currentValue;

    this.sortTypeByCurrentTab(newTabValue);
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
