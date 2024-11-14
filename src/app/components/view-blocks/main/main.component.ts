import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, SearchResultsComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  toggleFilters: boolean = true;
  searchValue: string = '';

  toggleFilterComponent() {
    this.toggleFilters = this.toggleFilters ? false : true;
  }

  search(event: any) {
    this.searchValue = event;
  }
}
