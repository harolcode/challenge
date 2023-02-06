
    export interface User {
        id: number;
        name: string;
        totalFollowers: any;
        todayFollowers: number;
        increaseFollowers: string;
        viewsToday: any;
        increaseViews: string;
        percentViews: number;
        likesToday: number;
        increaseLikes: string;
        percentLikes: number;
        type: string;
        imageUrl: string;
        color: string;
        colorLine: string
    }

    export interface SocialMedia {
        id: number;
        name: string;
        user: User;
    }

