import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'wfqa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;
  dashboardWidgets = [];

  constructor(private userService: UserService,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getSessionUser;
    this.getDashBoardWidgets();
  }

  getDashBoardWidgets() {
    this.apiService.getDataFromJson("../../../assets/json/dashboard-widgets.json").subscribe(resp => {
      this.dashboardWidgets = (resp as JSON[])[this.user?.role];
    }, error => {
      console.error(error)
    })
  }

  navigateByUrl(url: string) {
    this.router.navigate([url]);
  }

}
