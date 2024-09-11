import { Component, Input } from '@angular/core';
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
  @Input() isVisible: boolean = true;
}
