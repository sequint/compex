import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryListCardComponent } from './inventory-list-card.component';

describe('InventoryListCardComponent', () => {
  let component: InventoryListCardComponent;
  let fixture: ComponentFixture<InventoryListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
