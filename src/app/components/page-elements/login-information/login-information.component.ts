import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-login-information',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './login-information.component.html',
  styleUrl: './login-information.component.scss'
})
export class LoginInformationComponent {
  @Input() loginData: any;

  constructor(private router: Router) {}

  ngOnInit() {
    if(localStorage.getItem('user') && typeof localStorage.getItem('user') === 'string') {
      // @ts-ignore
      this.loginData = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
