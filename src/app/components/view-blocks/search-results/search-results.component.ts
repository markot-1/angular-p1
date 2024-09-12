import { Component, OnInit } from '@angular/core';
import { VideoCardComponent } from "../../page-elements/video-card/video-card.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [VideoCardComponent, HttpClientModule, NgIf, NgFor],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnInit {
  constructor(private http: HttpClient) { }

  data: any;

  ngOnInit(): void {
    this.http.get("assets/data/response.json").subscribe({ next: (data: any) => 
      this.data = data
    });
  }
}
