import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounceTime, finalize, of, tap } from 'rxjs';
import { UserDetailsComponent } from "../user-details/user-details.component";
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../models/user';
import { RecentSearch, StoredRecentSearch } from '../../../models/recent-search';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, UserDetailsComponent, HttpClientModule],
  providers: [UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

  searchCtrl: FormControl<string | null>= new FormControl('');
  searchedUser: WritableSignal<RecentSearch | null> = signal<RecentSearch | null>(null);
  doneloading: boolean = true;
  isUserFound: boolean = false;
  isSearch: boolean = false;

  constructor(private userService: UserService) {}

  readonly TILTE: string = 'Search GitHub User';

  get searchResult(): User {
    return this.searchedUser()?.data as User
  }

  search(): void {
    this.doneloading = false
    this.isSearch = true;
    const query: string = this.searchCtrl?.value ?? '';
    this.userService.getUserByQuery(query).pipe(
      tap((result: User) => {
        this.isUserFound = true;
        this.storeData({ query, data: result } as RecentSearch)
      }),

      catchError((error: HttpErrorResponse) => {
        if(error.status === 404) {
          this.isUserFound = false;
          this.storeData({ query, data: null } as RecentSearch)
        }
        return of(error);
      }),
      finalize(() => {
        this.doneloading = true;
      })
    ).subscribe()
  }

  storeData(data: RecentSearch): void {
    this.searchedUser.set(data);
    this.userService.updateStoredData(data);
  }
}
