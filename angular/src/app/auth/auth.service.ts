import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
    console.log("AuthService -> constructor -> http", http)
  }
  register(form) {
    return this.http.post("/api/register", form)
  }
}
