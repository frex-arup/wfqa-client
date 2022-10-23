import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class InputLabResultService {

  constructor(private apiService: ApiService) { }

  getLabAccountNoList(customerId: number, testType: string, labId: number, mroId: number,
    cityName: string, csName: string, sortBy: string, status: string) {
      let fromString=`customerId=${customerId}&testType=${testType}&sortBy=${sortBy}&status=${status}`;
      if (labId && labId != 0) {
        fromString += `&labId=${labId}`;
      }
      if (mroId && mroId != 0) {
        fromString += `&mroId=${mroId}`;
      }
      if (cityName) {
        fromString += `&cityName=${cityName}`;
      }
      if (csName) {
        fromString += `&csName=${csName}`;
      }
      const params = new HttpParams({
        fromString: fromString
      })
      // let params = new HttpParams();
      // params.append('customerId', customerId);
      // params.append('testType', testType);
      // params.append('labId', labId);
      // params.append('mroId', mroId);
      // params.append('cityName', cityName);
      // params.append('csName', csName);
      // params.append('sortBy', sortBy);
      // params.append('status', status);
      console.log(params);
    return this.apiService.get('cust-association/get-lan-sa-list', params);
  }
  
}
