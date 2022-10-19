import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'wfqa-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  role: string = '';
  sidenavItems = [];

  constructor(private router: Router,
     private userService: UserService,
     private apiService: ApiService) { }

  ngOnInit(): void {
    this.role = this.userService.getCurrentRole();
    this.apiService.getDataFromJson("../../../assets/json/sidenav-items.json").subscribe(resp => {
      this.sidenavItems = (resp as JSON[])[this.role];
      console.log(this.sidenavItems);
    }, error => {
      console.error(error)
    })
  }

  navigateByUrl(url: string) {
    this.router.navigate([url]);
  }

}
