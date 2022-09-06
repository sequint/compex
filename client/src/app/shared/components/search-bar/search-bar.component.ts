import { Component } from '@angular/core';

/**
 * @title ExchangeList
 */
@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
  }
)

export class SearchBarComponent {

  private searchValue: string;

  constructor() {
    this.searchValue = '';
  }

  getSearchValue = () => this.searchValue;
  setSearchValue = (event: any) => this.searchValue = event.target.value;
  
}
