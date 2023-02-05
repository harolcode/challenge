import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SocialMedia } from './interfaces/social.media.interface';
import { SocialMediaService } from './services/social.media.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  socialsMedia!: SocialMedia[];
  constructor(private socialMediaSvc: SocialMediaService) {}

  ngOnInit(): void {
    this.socialMediaSvc.getSocialsMedia()
    .pipe(
      tap((res:SocialMedia[])=> this.socialsMedia = res)
    ).subscribe();
  }

}
