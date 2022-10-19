import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {

  common_url: string = environment.api_url;

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(`${this.common_url}${url}`);
  }
  post(url: string, body: any) {
    return this.http.post(`${this.common_url}${url}`, body);
  }

  put(url: string, body: any) {
    return this.http.put(`${this.common_url}${url}`, body);
  }

  delete(deleteIdURL: string) {
    return this.http.delete(`${this.common_url}${deleteIdURL}`);
  }

  getDataFromJson(url: string) {
    return this.http.get(url);
  }
}
      
