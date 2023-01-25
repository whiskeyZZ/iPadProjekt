import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPad } from './IPad';
import { Ausleihhistorie } from './ausleihhistorie';

@Injectable({
  providedIn: 'root'
})
export class IPadService {
  private apiServerUrl = 'http://localhost:8080/ipads/all';

  constructor(private http: HttpClient) { }

  public getIPads(): Observable<IPad[]> {
    return this.http.get<IPad[]>(this.apiServerUrl);
  }

  public postHistorie(historie: string){
    fetch('http://localhost:8080/ausleihhistorie/add', {
      method: 'POST',
      body: historie,
      headers: {'Content-Type': 'application/json'} });
  }
}