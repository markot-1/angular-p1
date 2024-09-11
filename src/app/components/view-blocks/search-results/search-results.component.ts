import { Component } from '@angular/core';
import { VideoCardComponent } from "../../page-elements/video-card/video-card.component";

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {

}
