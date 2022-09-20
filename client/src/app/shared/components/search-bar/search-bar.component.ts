import { Component, Output, EventEmitter } from '@angular/core';

/**
 * @title ExchangeList
 */
@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
  }
)

export class SearchBarComponent {

  // Output event value to pass search value to parent component
  @Output() searchValueEvent = new EventEmitter<string>();

  // Sends the value from search input to the parent component
  setSearchValue = (event: any) => this.searchValueEvent.emit(event.target.value);
  
}
