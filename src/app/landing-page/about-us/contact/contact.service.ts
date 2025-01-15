import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface ContactFormModel {
    name: string | null;
    surname: string | null;
    email: string | null;
    contactNumber: string | null;
    message: string | null;
    source: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }
  SERVER_API_URL = 'https://api.ethax.trade'
  // Your HTTP requests go here
  contactForm(contactForm: ContactFormModel): Observable<HttpResponse<any>> {
    return this.http.post(this.SERVER_API_URL + '/api/contactUs', contactForm, {
      observe: 'response',
      responseType: 'json'
    });
  }
}
