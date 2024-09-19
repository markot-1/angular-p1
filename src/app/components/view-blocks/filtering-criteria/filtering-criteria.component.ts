import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterInputComponent } from "../../page-elements/filter-input/filter-input.component";
import { TextBoldPipePipe } from '../../../pipes/text-bold-pipe.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-filtering-criteria',
  standalone: true,
  imports: [FilterInputComponent, TextBoldPipePipe, NgIf],
  templateUrl: './filtering-criteria.component.html',
  styleUrl: './filtering-criteria.component.scss'
})
export class FilteringCriteriaComponent {

  @Input() searchResultsData: Array<any> = [];
  @Input() isVisible: boolean = true;
  @Output() onInput: EventEmitter<any> = new EventEmitter();
  filterValue: string = '';
  filteredData: any;

  filterByDate() {
    let filteringData = (this.filteredData ? this.filteredData : this.searchResultsData).slice();
    let dataItems = filteringData.sort((a: any, b: any) => {
      return Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt);
    });

    if(this.filteredData && JSON.stringify(this.filteredData) === JSON.stringify(dataItems)) {
      dataItems.reverse();
    }

    this.filteredData = dataItems;
    this.onInput.emit(this.filteredData);
  }

  filterByInput(event: string): any {
    this.filterValue = event;

    let dataItems = this.searchResultsData.filter((item: any) => {
      return item.snippet.title.toLowerCase().includes(this.filterValue);
    });
    this.filteredData = dataItems;
    this.onInput.emit(this.filteredData);
  }
}
