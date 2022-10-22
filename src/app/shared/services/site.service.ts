import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private apiService: ApiService) { }

  getAllSitesByTypeAndStatus(type: string, status: string) {
    return this.apiService.get('sites/'+type+'/'+status);
  }
}
