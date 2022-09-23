import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schueler } from './schueler';

@Injectable({
  providedIn: 'root'
})
export class SchuelerService {

  private apiServerUrl = 'http://localhost:8080/schueler/ito1';

  constructor(private http: HttpClient) { }

  public getSchueler(): Observable<Schueler[]> {

    return this.http.get<Schueler[]>(this.apiServerUrl);
  }
}
