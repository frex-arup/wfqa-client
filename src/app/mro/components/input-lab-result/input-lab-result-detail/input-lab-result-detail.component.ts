import { Component, OnInit } from '@angular/core';
import { IdName } from 'src/app/shared/model/id-name.model';

@Component({
  selector: 'wfqa-input-lab-result-detail',
  templateUrl: './input-lab-result-detail.component.html',
  styleUrls: ['./input-lab-result-detail.component.css']
})
export class InputLabResultDetailComponent implements OnInit {

  resultStatus: string = 'open';
  testTypeList: string[] = [];
  selectedTestType: string;
  labAccNoList: IdName[] = [];
  selectedLabAccNo: number;
  locationName: string;
  customerName: string;
  derName:string = 'John and Jack Johnson';
  derPhone:string = '(972) 731-8888';
  mro:string = 'John Feelgood';
  lab:string = 'Quest Diagnostics';

  constructor() { }

  ngOnInit(): void {
  }

}
