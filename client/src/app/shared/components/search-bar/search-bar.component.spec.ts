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

  // Test for component creation
  it('should create the search bar app', () => {
    expect(searchBarComponent).toBeTruthy();
  });

  // Test setSearchValue func to return the input given to it
  it('should emit from search bar on input change', () => {
    spyOn(searchBarComponent, 'setSearchValue');

    searchBarComponent.setSearchValue('hello');

    expect(searchBarComponent.setSearchValue).toHaveBeenCalledWith('hello');
  });
});
