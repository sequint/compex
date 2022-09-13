import { Component, EventEmitter, Output } from "@angular/core";

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
  @Output() focusedTabEvent = new EventEmitter<string>();
  greenItemFocusClass: string = 'focused-tab';
  brownItemFocusClass: string = 'unfocused-tab';

  emitCurrentFocusedTab(tabName: string) {
    this.focusedTabEvent.emit(tabName);
  }

  focusGreenItems() {
    this.emitCurrentFocusedTab('Green');
    this.greenItemFocusClass = 'focused-tab';
    this. brownItemFocusClass = 'unfocused-tab';
  }
  
  focusBrownItems() {
    this.emitCurrentFocusedTab('Brown');
    this.brownItemFocusClass = 'focused-tab';
    this.greenItemFocusClass = 'unfocused-tab';
  }
}
