import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  url: string = "assets/data/response.json";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
}
