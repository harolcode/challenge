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
                "increaseFollowers": "arrow_drop_up",
                "viewsToday": 87,
                "increaseViews": "arrow_drop_up",
                "percentViews": 3,
                "likesToday": 52,
                "increaseLikes": "arrow_drop_down",
                "percentLikes": 2,
                "type": "FOLLOWERS",
                "imageUrl": "../../../../assets/images/icon-facebook.svg",
                "color": "color_green",
                "colorLine": "color-line1"
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
                "increaseFollowers": "arrow_drop_up",
                "viewsToday": 117,
                "increaseViews": "arrow_drop_up",
                "percentViews": 303,
                "likesToday": 507,
                "increaseLikes": "arrow_drop_up",
                "percentLikes": 553,
                "type": "FOLLOWERS",
                "imageUrl": "../../../../assets/images/icon-twitter.svg",
                "color": "color_green",
                "colorLine": "color-line2"
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
                "increaseFollowers": "arrow_drop_up",
                "viewsToday": "52k",
                "increaseViews": "arrow_drop_up",
                "percentViews": 1375,
                "likesToday": 5462,
                "increaseLikes": "arrow_drop_up",
                "percentLikes": 2257,
                "type": "FOLLOWERS",
                "imageUrl": "../../../../assets/images/icon-instagram.svg",
                "color": "color_green",
                "colorLine": "color-line3"
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
                "increaseFollowers": "arrow_drop_down",
                "viewsToday": 1404,
                "increaseViews": "arrow_drop_down",
                "percentViews": 12,
                "likesToday": 107,
                "increaseLikes": "arrow_drop_down",
                "percentLikes": 19,
                "type": "SUBSCRIBERS",
                "imageUrl": "../../../../assets/images/icon-youtube.svg",
                "color": "color_red",
                "colorLine": "color-line4"
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
