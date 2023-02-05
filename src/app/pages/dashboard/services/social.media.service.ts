import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialMedia } from '../interfaces/social.media.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
  private apiURL = 'src\app\pages\dashboard\services\db.json';
  constructor(private http: HttpClient) { }

  getSocialsMedia():Observable<SocialMedia[]> {
    return this.http.get<SocialMedia[]>(this.apiURL);
  }
}
