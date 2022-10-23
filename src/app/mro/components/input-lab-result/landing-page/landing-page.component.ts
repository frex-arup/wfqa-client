import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabAccNoDTO } from 'src/app/mro/model/lab-acc-no-dto.model';
import { InputLabResultService } from 'src/app/mro/services/input-lab-result.service';
import { ApiResponse } from 'src/app/shared/model/api-response-model';
import { IdName, IdNameStr } from 'src/app/shared/model/id-name.model';
import { SiteService } from 'src/app/shared/services/site.service';
import { TestTypeService } from 'src/app/shared/services/test-type.service';

@Component({
  selector: 'wfqa-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  searchByLAN: boolean = true;
  customerList: IdName[] = [];
  selectedCustomer: number;
  testTypeList: string[] = [];
  selectedTestType: string;
  labList: IdName[] = [];
  selectedLab: number;
  labAccNoList: LabAccNoDTO[] = [];
  selectedLabAccNo: number;
  sortByList: IdNameStr[] = [];
  sortBy: string = 'city';
  city: string;
  collectionSiteName: string;

  constructor(private siteService: SiteService,
    private testTypeService: TestTypeService,
    private router: Router,
    private inputLabResultService: InputLabResultService) { }

  ngOnInit(): void {
    this.sortByList = [
      {
        'id': 'city',
        'name': 'City'
      },
      {
        'id': 'collectionSite',
        'name': 'Collection Site'
      },
      {
        'id': 'subAccount',
        'name': 'Sub Account'
      },
      {
        'id': 'state',
        'name': 'State'
      }
    ];
    this.getAllCustomers();
    this.getTestTypes();
    this.getLabList();
  }

  getTestTypes() {
    this.testTypeService.getTestTypes().subscribe((res: ApiResponse) => {
      this.testTypeList = res.datas as string[];
    }, (err: ApiResponse) => {
      this.testTypeList = [];
      console.log(err.errorCode);
    });
  }

  getAllCustomers() {
    this.siteService.getAllSitesByTypeAndStatus('CARRIER', 'A').subscribe((res: ApiResponse) => {
      this.customerList = res.datas as IdName[];
    }, (err: ApiResponse) => {
      this.customerList = [];
      console.log(err.errorCode);
    });
  }

  getLabList() {
    this.siteService.getAllSitesByTypeAndStatus('LAB', 'A').subscribe((res: ApiResponse) => {
      this.labList = res.datas as IdName[];
    }, (err: ApiResponse) => {
      this.labList = [];
      console.log(err.errorCode);
    });
  }

  getLabAccNoList() {
    if (this.selectedCustomer && this.selectedTestType) {
      this.inputLabResultService.getLabAccountNoList(this.selectedCustomer, this.selectedTestType, this.selectedLab ? this.selectedLab :0,
        0, this.city ? this.city : null, this.collectionSiteName ? this.collectionSiteName : null, this.sortBy, 'A').subscribe((res: ApiResponse) => {
          this.labAccNoList = res.datas as LabAccNoDTO[];
        }, (err: ApiResponse) => {
          this.labAccNoList = [];
          console.log(err.errorCode);
        });
    }
  }

  reset() {
    this.selectedLabAccNo = undefined;
    this.selectedCustomer = undefined;
    this.selectedLab = undefined;
    this.selectedTestType = undefined;
    this.sortBy = 'City';
    this.city = undefined;
    this.collectionSiteName = undefined;
  }

  continue() {
    if (this.searchByLAN) {

    } else {
    }
    this.router.navigate(['mro/input-lab-results/detail'], { queryParams: { 'lanId': 'hi' } });
  }

  save() { }
}
