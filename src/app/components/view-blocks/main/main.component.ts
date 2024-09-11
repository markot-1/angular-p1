import { Component } from '@angular/core';
import { FilteringCriteriaComponent } from "../filtering-criteria/filtering-criteria.component";
import { HeaderComponent } from '../header/header.component';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FilteringCriteriaComponent, HeaderComponent, SearchResultsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
