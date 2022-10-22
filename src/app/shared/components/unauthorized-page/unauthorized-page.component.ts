import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'wfqa-unauthorized-page',
  templateUrl: './unauthorized-page.component.html',
  styleUrls: ['./unauthorized-page.component.css']
})
export class UnauthorizedPageComponent implements OnInit {

  role: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.role = this.userService.getCurrentRole();
  }

  goToHomePage() {
    if(this.role === 'mro') {
      this.router.navigateByUrl('mro/dashboard');
    } else {
      this.router.navigateByUrl('mro/dashboard');
    }
  }

}
