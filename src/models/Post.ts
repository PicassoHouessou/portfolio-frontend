import type {Locale} from "~/models/Locale";
import type {User} from "~/models/User";

export interface PostType {
    id: string;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
}

export interface Post {
    id: string;
    parent: Post;
    postType: PostType;
    contents: Array<PostContent>;
    user: User;
}
export interface PostContent {
    alias: string;
    id: string;
    title: string;
    externalLink: string;
    content: string;
    metaTitle: string;
    metaKeywords: string;
    metaDescription: string;
    locale: Locale;
    is_enabled: boolean;
    weight: number;
    post: {
        id: string;
        postType: {
            id: string;
            layout: string;
            active: string;
            user: string;
            ip: string;
            postTypeDescriptions: [
                {
                    name: string;
                }
            ];
        };
    };
    createdAt: string;
    dateUpdateAtAgo: string;
    aliasEnabled: boolean;
}

