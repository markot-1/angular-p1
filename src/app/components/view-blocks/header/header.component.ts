import { Component, EventEmitter, Output } from '@angular/core';
import { LoginInformationComponent } from "../../page-elements/login-information/login-information.component";
import { ButtonComponent } from "../../page-elements/button/button.component";
import { FilterInputComponent } from "../../page-elements/filter-input/filter-input.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginInformationComponent, ButtonComponent, FilterInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchValue: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  toggleSettings() {
    this.onClick.emit();
  }

  searchByInput(event: any) {
    this.searchValue = event;
  }

  search(value: string) {
    this.onSearch.emit(value);
  }
}
