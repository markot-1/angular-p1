import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, SearchResultsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
