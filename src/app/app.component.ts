import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

  activeTab: WritableSignal<number> = signal(0);

  readonly allTabs: { name: string, path: string }[] = [ { name: 'Home', path: 'home' } , { name: 'History', path: 'history'} ];

  onTabChange(tab: string): void {
    this.activeTab.set(this.allTabs.findIndex(ele => ele.name === tab));
  }

  isActive(index: number): boolean {
    return this.activeTab() === index;
  }

  }
