import { Component, EventEmitter, Output } from "@angular/core";

/**
 * @title ExchangeListTabs
 */
@Component({
    selector: 'exchange-list-tabs',
    templateUrl: './exchange-list-tabs.component.html',
    styleUrls: ['./exchange-list-tabs.component.scss'],
  }
)

export class ExchangeListTabs {
  greenItemFocusClass: string = 'focused-tab';
  brownItemFocusClass: string = 'unfocused-tab';

  @Output() focusedTabEvent = new EventEmitter<string>();

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
