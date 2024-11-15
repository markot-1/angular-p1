import { Component, Input, OnInit } from '@angular/core';
import { VideoCardComponent } from "../../page-elements/video-card/video-card.component";
import { NgFor, NgIf } from '@angular/common';
import { FilteringCriteriaComponent } from '../filtering-criteria/filtering-criteria.component';
import { VideoDataService } from '../../../services/video-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [VideoCardComponent, NgIf, NgFor, FilteringCriteriaComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnInit {
  constructor(private videoDataService: VideoDataService, private router: Router) { }

  @Input() toggleFilters: boolean = true;
  @Input() searchValue: string = '';
  data: any;
  filteredData: any;

  ngOnInit(): void {
    this.videoDataService.getData().subscribe((data) => {
      this.data = data;
    })
  }

  navigateToVideoPage(videoId: string): void {
    this.router.navigate(['/video', videoId]);
  }

  filterSearchResults(event: any) {
    this.filteredData = event;
  }
}
