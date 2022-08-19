import { CompxItem } from 'src/interfaces/CompxItem';

export const fakeCompxItems: CompxItem[] = [
  {
    name: 'Banana Scraps',
    icon: '../../assets/icons/banana.png',
    value: 4.05,
    valChange: 20.00,
    upArrowClass:'arrow-up',
    downArrowClass: 'arrow-down',
    changeColorClass: 'change-perc'
  },
  {
    name: 'Coffee Grinds',
    icon: '../../assets/icons/coffee-beans.png',
    value: 7.25,
    valChange: -12.00,
    upArrowClass:'arrow-up',
    downArrowClass: 'arrow-down',
    changeColorClass: 'change-perc'
  },
  {
    name: 'Apple Scraps',
    icon: '../../assets/icons/apples.png',
    value: 4.15,
    valChange: 0.00,
    upArrowClass:'arrow-up',
    downArrowClass: 'arrow-down',
    changeColorClass: 'change-perc'
  },
  {
    name: 'Egg Carton',
    icon: '../../assets/icons/eggs.png',
    value: 130.15,
    valChange: 45.00,
    upArrowClass:'arrow-up',
    downArrowClass: 'arrow-down',
    changeColorClass: 'change-perc'
  }
];
