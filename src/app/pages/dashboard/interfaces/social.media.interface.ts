
    export interface User {
        id: number;
        name: string;
        totalFollowers: any;
        todayFollowers: number;
        increaseFollowers: boolean;
        viewsToday: any;
        increaseViews: boolean;
        percentViews: number;
        likesToday: number;
        increaseLikes: boolean;
        percentLikes: number;
        type: string;
        imageUrl: string;
    }

    export interface SocialMedia {
        id: number;
        name: string;
        user: User;
    }

