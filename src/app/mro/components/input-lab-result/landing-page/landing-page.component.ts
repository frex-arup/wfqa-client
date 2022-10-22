import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/shared/model/api-response-model';
import { IdName } from 'src/app/shared/model/id-name.model';
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
  labAccNoList: IdName[] = [];
  selectedLabAccNo: number;
  sortByList: string[] = [];
  sortBy: string = 'City';
  city: string;
  collectionSiteName: string;

  constructor(private siteService: SiteService, private testTypeService: TestTypeService) { }

  ngOnInit(): void {
    this.sortByList = ['City', 'Collection Site', 'Subaccount', 'State'];
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

  }

  reset() { 
    this.selectedLabAccNo = undefined;
    this.selectedCustomer = undefined;
    this.selectedLab = 0;
    this.selectedTestType = null;
    this.sortBy = 'City';
    this.city= null;
    this.collectionSiteName = null;
  }

  save() { }
}
