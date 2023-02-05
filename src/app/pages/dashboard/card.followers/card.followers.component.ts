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
  socialsMedia: SocialMedia[] =  [
        {
            "id": 1,
            "name": "Facebook",
            "user": {
                "id": 1,
                "name": "@nathanf",
                "totalFollowers": 1987,
                "todayFollowers": 12,
                "increaseFollowers": true,
                "viewsToday": 87,
                "increaseViews": true,
                "percentViews": 3,
                "likesToday": 52,
                "increaseLikes": false,
                "percentLikes": 2,
                "type": "FOLLOWERS",
                "imageUrl": "../../../../assets/images/icon-facebook.svg"
            }
        },
        {
            "id": 2,
            "name": "Twitter",
            "user": {
                "id": 1,
                "name": "@nathanf",
                "totalFollowers": 1044,
                "todayFollowers": 99,
                "increaseFollowers": true,
                "viewsToday": 117,
                "increaseViews": true,
                "percentViews": 303,
                "likesToday": 507,
                "increaseLikes": true,
                "percentLikes": 553,
                "type": "FOLLOWERS",
                "imageUrl": "../../../../assets/images/icon-twitter.svg"
            }
        },
        {
            "id": 3,
            "name": "Instagram",
            "user": {
                "id": 1,
                "name": "@realnathanf",
                "totalFollowers": "11K",
                "todayFollowers": 1099,
                "increaseFollowers": true,
                "viewsToday": "52k",
                "increaseViews": true,
                "percentViews": 1375,
                "likesToday": 5462,
                "increaseLikes": true,
                "percentLikes": 2257,
                "type": "FOLLOWERS",
                "imageUrl": "../../../../assets/images/icon-instagram.svg"
            }
        },
        {
            "id": 4,
            "name": "Youtube",
            "user": {
                "id": 1,
                "name": "Nathan F.",
                "totalFollowers": 8239,
                "todayFollowers": 144,
                "increaseFollowers": false,
                "viewsToday": 1404,
                "increaseViews": false,
                "percentViews": 12,
                "likesToday": 107,
                "increaseLikes": false,
                "percentLikes": 19,
                "type": "SUBSCRIBERS",
                "imageUrl": "../../../../assets/images/icon-youtube.svg"
            }
        }
    ]

  constructor(private socialMediaSvc: SocialMediaService) {}

  ngOnInit(): void {
    this.socialMediaSvc.getSocialsMedia()
    .pipe(
      tap((res:SocialMedia[])=> this.socialsMedia = res)
    );
  }

}
