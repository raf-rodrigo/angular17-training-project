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

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name);
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(BASE_URL);
  }
}
