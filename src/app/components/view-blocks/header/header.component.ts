import { Component, EventEmitter, Output } from '@angular/core';
import { SearchInputComponent } from '../../page-elements/search-input/search-input.component';
import { LoginInformationComponent } from "../../page-elements/login-information/login-information.component";
import { ButtonComponent } from "../../page-elements/button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchInputComponent, LoginInformationComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  toggleSettings() {
    this.onClick.emit();
  }
}
