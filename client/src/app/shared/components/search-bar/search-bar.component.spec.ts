import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let componentFixure: ComponentFixture<SearchBarComponent>;
  let searchBarComponent: SearchBarComponent;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SearchBarComponent
      ],
    }).compileComponents();

    componentFixure = TestBed.createComponent(SearchBarComponent);
    searchBarComponent = componentFixure.componentInstance;
  });

  // Test script for component creation
  it('should create the search bar app', () => {
    expect(searchBarComponent).toBeTruthy();
  });
});
