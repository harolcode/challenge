import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SocialMedia } from '../interfaces/social.media.interface';
import { SocialMediaService } from '../services/social.media.service';


@Component({
  selector: 'app-card-followers',
  templateUrl: './card.followers.component.html',
  styleUrls: ['./card.followers.component.css']
})

export class CardFollowersComponent implements OnInit {
  socialsMedia!: SocialMedia[];
  constructor(private socialMediaSvc: SocialMediaService) {}

  ngOnInit(): void {
    this.socialMediaSvc.getSocialsMedia()
    .pipe(
      tap((res:SocialMedia[])=> this.socialsMedia = res)
    ).subscribe();
  }

}
