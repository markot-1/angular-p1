import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  standalone: true,
  imports: [],
  templateUrl: './filter-input.component.html',
  styleUrl: './filter-input.component.scss'
})
export class FilterInputComponent {
  @Input() value: string = '';
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  OnInput(value: any) {
    this.onChange.emit(value.value);
  }
}
