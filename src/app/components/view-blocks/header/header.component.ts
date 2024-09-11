import { Component, EventEmitter, Output } from '@angular/core';
import { SearchInputComponent } from '../../page-elements/search-input/search-input.component';
import { LoginInformationComponent } from "../../page-elements/login-information/login-information.component";
import { FilteringCriteriaComponent } from "../filtering-criteria/filtering-criteria.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchInputComponent, LoginInformationComponent, FilteringCriteriaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleFilters: boolean = true;

  toggleSettings() {
    this.toggleFilters = !this.toggleFilters;
  }
}
