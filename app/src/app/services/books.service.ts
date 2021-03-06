import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/books')
  }

  getElementById(id) {
    return this.http.get('http://localhost:3000/books/' + id)
  }
}
