import { Component } from '@angular/core';
import { CompxItem } from 'src/interfaces/CompxItem';

/**
 * @title ExchangeGrid
 */
@Component({
    selector: 'exchange-grid',
    templateUrl: './exchange-grid.component.html',
    styleUrls: ['./exchange-grid.component.css'],
  }
)

export class ExchangeGridComponent {
  compxItems: CompxItem[];

  constructor() {
    this.compxItems = [{
      name: 'Banana Scraps',
      icon: '../../assets/icons/banana.png',
      value: 4.05,
      valChange: 20.00,
      arrowIcon: ''
    }];

    this.setArrowIcon();
  }

  setArrowIcon = () => {
    if (this.compxItems[0].valChange > 0) { this.compxItems[0].arrowIcon = 'gg-arrow-up'}
    else if (this.compxItems[0].valChange < 0) { this.compxItems[0].arrowIcon = 'gg-arrow-down'};
  }

  getItemName = () => this.compxItems[0].name;
  getItemIcon = () => this.compxItems[0].icon;
  getItemValue = () => this.compxItems[0].value;
  getItemValChange = () => this.compxItems[0].valChange;
  getArrowIcon = () => this.compxItems[0].arrowIcon;
}
