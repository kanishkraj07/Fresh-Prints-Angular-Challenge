import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(() => {
   TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });

    component = TestBed.createComponent(AppComponent).componentInstance;
  });

  it('onTabChange', () => {
    component.onTabChange('History');
    expect(component.activeTab()).toBe(1);
  });

  it('isActive', () => {
    component.activeTab.set(0);
    const result: boolean = component.isActive(0);
    expect(result).toBeTrue();
  });
});
