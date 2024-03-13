import '../Animal';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL = 'http://localhost:3000/animals';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  // private apiURL = 'http://localhost:3000/animals';

  // constructor(private http: HttpClient) { }

  private http = inject(HttpClient);

  remove(id: number){
    return this.http.delete<Animal>(`${BASE_URL}/${id}`);
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(BASE_URL);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${BASE_URL}/${id}`)
  }
}
