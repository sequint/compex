import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { ExchangeListTabsComponent } from '../exchange-list-tabs/exchange-list-tabs.component';

describe('ExchangeListTabsComponent', () => {
  let componentFixure: ComponentFixture<ExchangeListTabsComponent>;
  let exchangeListTabsComponent: ExchangeListTabsComponent;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExchangeListTabsComponent
      ],
    }).compileComponents();

    componentFixure = TestBed.createComponent(ExchangeListTabsComponent);
    exchangeListTabsComponent = componentFixure.componentInstance;
  });

  // Test for component creation
  it('should create the exchange list tabs', () => {
    expect(exchangeListTabsComponent).toBeTruthy();
  });

  // When the green items tab is clicked, it should emit the string 'Green'
  it('should emit Green string when green tab is clicked', waitForAsync(() => {
    spyOn(exchangeListTabsComponent, 'emitCurrentFocusedTab');
    componentFixure.detectChanges();
    let greenItemTab = componentFixure.debugElement.query(By.css('#green-tab'));

    greenItemTab.triggerEventHandler('click', null);
    componentFixure.detectChanges();

    // Once the button is click, expect emit to be 'Green'
    componentFixure.whenStable().then(() => {
      expect(exchangeListTabsComponent.emitCurrentFocusedTab).toHaveBeenCalledWith('Green');
    });
  }));

  // When the brown items tab is clicked, it should emit the string 'Brown'
  it('should emit Brown string when brown tab is clicked', waitForAsync(() => {
    spyOn(exchangeListTabsComponent, 'emitCurrentFocusedTab');
    componentFixure.detectChanges();
    let brownItemTab = componentFixure.debugElement.query(By.css('#brown-tab'));

    brownItemTab.triggerEventHandler('click', null);
    componentFixure.detectChanges();

    // Once the button is click, expect emit to be 'Brown'
    componentFixure.whenStable().then(() => {
      expect(exchangeListTabsComponent.emitCurrentFocusedTab).toHaveBeenCalledWith('Brown');
    });
  }));
});
