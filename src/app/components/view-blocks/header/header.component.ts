import { Component } from '@angular/core';
import { SearchInputComponent } from '../../page-elements/search-input/search-input.component';
import { LoginInformationComponent } from "../../page-elements/login-information/login-information.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchInputComponent, LoginInformationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
