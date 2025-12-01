import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlaskService {
  constructor(private http: HttpClient) {}

  getProfilo() {
    return this.http.get('https://potential-carnival-r47579vxv574fxjpj-5000.app.github.dev/profilo');
  }
}