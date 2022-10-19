import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'wfqa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userImage: string;
  defaultImage: string = "../../assets/images/profilePic.png";
  user: User = new User();

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

    this.user = this.userService.getSessionUser;
    this.loadScript();
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('login');
  }

  ngOnDestroy(): void {
    this.loadScript();
  }

  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/plugins/sidemenu/sidemenu.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

}
