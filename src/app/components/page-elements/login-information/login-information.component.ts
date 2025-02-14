import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-information',
  standalone: true,
  imports: [TooltipModule, SidebarModule, NgIf],
  templateUrl: './login-information.component.html',
  styleUrl: './login-information.component.scss'
})
export class LoginInformationComponent {
  @Input() loginData: any;
  sidebarVisible = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if(localStorage.getItem('user') && typeof localStorage.getItem('user') === 'string') {
      // @ts-ignore
      this.loginData = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout() {
    this.sidebarVisible = false;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
