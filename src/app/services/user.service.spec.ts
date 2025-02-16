import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RecentSearch, StoredRecentSearch } from '../../models/recent-search';
import { User } from '../../models/user';

describe('UserService', () => {
  let service: UserService,
  httpMock: HttpTestingController;

  const mockRecentSearches: StoredRecentSearch = { list: [ { query: 'kanishk', data: { id: 10 }}] } as StoredRecentSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('getUserByQuery', () => {
    service.getUserByQuery('kanishk').subscribe(res => {
      expect(res).toBeTruthy();
    });
    httpMock.expectOne(req => req.url === 'https://api.github.com/users/kanishk').flush({});
  });

  it('getStoredData', () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockRecentSearches));
    expect(service.getStoredData()).toEqual(mockRecentSearches);
  });

  it('updateStoredData', () => {
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockRecentSearches));
    service.updateStoredData({ query: 'kanishk', data: { id: 10 }} as RecentSearch);
    expect(localStorage.setItem).toHaveBeenCalledWith('recentSearches', JSON.stringify(mockRecentSearches))
  });
});
