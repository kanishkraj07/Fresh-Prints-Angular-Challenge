import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RecentSearch } from '../../../models/recent-search';
import { User } from '../../../models/user';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule, provideHttpClient } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let  userService: jasmine.SpyObj<UserService>;
      
    const MOCK_RECENT_SEARCH: RecentSearch = { query: 'john', data: { id: 1, name: 'John Doe' } } as RecentSearch;

  beforeEach(() => {
    userService = jasmine.createSpyObj<UserService>('UserService', ['getUserByQuery', 'updateStoredData']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule, HomeComponent],
      providers: [provideHttpClient(),
        { provide: UserService, useValue: userService }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    const fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('searchResult', () => {
    const user: RecentSearch = MOCK_RECENT_SEARCH;
    component.searchedUser.set(user);
    expect(component.searchResult).toEqual(user.data as User);
  });

  it('storeData', () => {
    component.storeData(MOCK_RECENT_SEARCH);
    expect(component.searchedUser()).toEqual(MOCK_RECENT_SEARCH);
  });
});
