import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface QPaper {
  image: string;
  semester: number;
  year: number
  course:string;
}
@Injectable({
  providedIn: 'root'
})
export class PaperDashboardService {

  constructor(private http: HttpClient) { }

  getQpapers(): Observable<QPaper[]> {
    return this.http.get<QPaper[]>('/qpapers.json');
  }
}
