import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  private url = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";

  constructor(private http: HttpClient) { }

  getManufacturerList(): Observable<any> {
    console.log(this.http.get<any>(this.url));
    return this.http.get<any>(this.url);
  }

}
