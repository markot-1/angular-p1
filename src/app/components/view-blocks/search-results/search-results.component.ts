import { Component, Input, OnInit } from '@angular/core';
import { VideoCardComponent } from "../../page-elements/video-card/video-card.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgFor, NgIf } from '@angular/common';
import { FilteringCriteriaComponent } from '../filtering-criteria/filtering-criteria.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [VideoCardComponent, HttpClientModule, NgIf, NgFor, FilteringCriteriaComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnInit {
  constructor(private http: HttpClient) { }

  @Input() toggleFilters: boolean = true;
  @Input() searchValue: string = '';
  data: any;
  filteredData: any;

  ngOnInit(): void {
    this.http.get("assets/data/response.json").subscribe({ next: (data: any) => 
      this.data = data
    });
  }

  filterSearchResults(event: any) {
    this.filteredData = event;
  }
}
