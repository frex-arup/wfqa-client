import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/model/user.model';
import { CommonService } from '../shared/services/common.service';
import { ToastService } from '../shared/services/toast.service';
import { UserService } from '../shared/services/user.service';
import { ApiResponse } from '../shared/model/api-response-model';

@Component({
  selector: 'wfqa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLogin: boolean = true;
  showSignup: boolean = false;

  user: User = new User();
  constructor(private userService: UserService,
    private router: Router,
    private tostService: ToastService,
    private commonService: CommonService,
    private translateService: TranslateService) { }


  ngOnInit(): void {
    this.showLogin = true;
    this.loadScript();
    // this.user.username = "admin";
    // this.user.password = "Admin";
  }

  login() {
    if (this.user) {
      this.userService.login(this.user).subscribe((res: ApiResponse) => {
        this.tostService.sucess(this.translateService.instant(
          "usermanagement.login"), "", this.translateService.instant(
            "usermanagement.succeful"));
        this.userService.setSessionUser = res.data as User;
        this.userService.loggedInUser.next(res.data);
        // if (res.data?.roles[0]?.name === 'ADMIN') {
        //   this.router.navigateByUrl('admin/dashboard');
        // } else if (res.data?.roles[0]?.name === 'MRO') {
        // } else {
          this.router.navigateByUrl('mro/dashboard');
        // }
        // this.router.navigateByUrl('mro');
      }, (err) => {
        this.tostService.error(this.translateService.instant(
          "usermanagement.loginFail"), "", this.translateService.instant(
            "usermanagement.invalidUser"));
        this.router.navigateByUrl('login');
      });
    }
  }
  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/plugins/bootstrap-show-password/bootstrap-show-password.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}


/* this.user.username = "rahul.anand@bipros.com"
this.user.password = "R3@G$X2QNE", */