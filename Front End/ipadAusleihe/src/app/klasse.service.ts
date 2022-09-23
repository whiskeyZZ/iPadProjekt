import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Klasse } from './klasse';

@Injectable({
  providedIn: 'root'
})
export class KlasseService {
  private apiServerUrl = 'http://localhost:8080/klasse/all';

  constructor(private http: HttpClient) { }

  public getKlassen(): Observable<Klasse[]> {
    return this.http.get<Klasse[]>(this.apiServerUrl);
  }
}
