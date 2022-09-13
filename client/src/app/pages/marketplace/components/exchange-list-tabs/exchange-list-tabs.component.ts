import { Component } from "@angular/core";

/**
 * @title ExchangeListTabs
 */
@Component({
    selector: 'exchange-list-tabs',
    templateUrl: './exchange-list-tabs.component.html',
    styleUrls: ['./exchange-list-tabs.component.css'],
  }
)

export class ExchangeListTabs {
  greenItemFocusClass: string = 'focused-tab';
  brownItemFocusClass: string = 'unfocused-tab';

  focusGreenItems() {
    this.greenItemFocusClass = 'focused-tab';
    this. brownItemFocusClass = 'unfocused-tab';
  }
  
  focusBrownItems() {
    this.brownItemFocusClass = 'focused-tab';
    this.greenItemFocusClass = 'unfocused-tab';
  }
}