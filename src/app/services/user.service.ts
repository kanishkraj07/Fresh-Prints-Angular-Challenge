import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { RecentSearch, StoredRecentSearch } from '../../models/recent-search';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserByQuery(query: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${query}`);
  }

  getStoredData(): StoredRecentSearch {
    return JSON.parse(localStorage.getItem('recentSearches') ?? '{}')
  }

  updateStoredData(searchData: RecentSearch | null): void {
    let data: StoredRecentSearch = this.getStoredData();
    if(!data.list) {
      data.list = [];
    }
    if(searchData) {
      const index: number =  data.list.findIndex(ele => ele.data?.id === searchData.data?.id);
      if(index != -1) {
       data.list.splice(index, 1);
       data.list.unshift(searchData);
      } else {
        data.list.push(searchData as RecentSearch);
      }
    }
    localStorage.setItem('recentSearches', JSON.stringify(data));
  }
}
