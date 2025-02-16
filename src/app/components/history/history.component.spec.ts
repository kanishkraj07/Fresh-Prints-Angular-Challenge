import { TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoredRecentSearch } from '../../../models/recent-search';

describe('HistoryComponent', () => {
  let component: HistoryComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [],
      schemas: [NO_ERRORS_SCHEMA]
    })
    component = TestBed.createComponent(HistoryComponent).componentInstance;
  });

  it('ngonInIt', () => {
    const expectedData = { list: [{ query: 'kanishk', data: {id: 1, name: 'Kanishk Mogalraj'} }]} as StoredRecentSearch;
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(expectedData));
    component.ngOnInit()
    expect(component.data).toEqual(expectedData);
  });

  it('clearHistory', () => {
    spyOn(localStorage, 'removeItem');
    component.clearHistory();
    expect(component.data).toEqual({} as StoredRecentSearch);
    expect(localStorage.removeItem).toHaveBeenCalled();
  });
});
