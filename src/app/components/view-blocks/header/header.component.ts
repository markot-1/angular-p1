import { Component } from '@angular/core';
import { SearchInputComponent } from '../../page-elements/search-input/search-input.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
