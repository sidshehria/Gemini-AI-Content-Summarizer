import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SummarizerService {
  private backendUrl = 'http://localhost:3000/api/summarize';

  constructor(private http: HttpClient) {}

  summarize(content: string): Observable<any> {
    return this.http.post(this.backendUrl, { content });
  }
}
