import { Component, OnInit } from '@angular/core';
import { UserDetailsComponent } from "../user-details/user-details.component";
import { StoredRecentSearch } from '../../../models/recent-search';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [UserDetailsComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.less'
})
export class HistoryComponent implements OnInit {

  data!: StoredRecentSearch;

  ngOnInit(): void {
     this.data = JSON.parse(localStorage.getItem('recentSearches') || '{}');
  }

  clearHistory(): void {
    this.data = {} as StoredRecentSearch
    localStorage.removeItem('recentSearches');
  }

}
