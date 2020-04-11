import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Components } from '../model/component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get<Components[]>('/assets/data/menu.json');
  }
}
