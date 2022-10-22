import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TestTypeService {

  constructor(private apiService: ApiService) { }

  getTestTypes() {
    return this.apiService.get('test-types');
  }
}
