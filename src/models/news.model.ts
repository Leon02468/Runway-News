import { user } from "./user.model";

export interface news{
    type_of: String;
    id: number;
    title: String;
    description: String;
    readable_publish_date: String;
    slug: String;
    path: String;
    url: String;
    comments_count: number;
    public_reactions_count: number;
    collection_id: number | null;
    published_timestamp: String;
    positive_reactions_count: number;
    cover_image: String;
    social_image: String;
    canonical_url: String;
    created_at: String;
    edited_at: String;
    crossposted_at: String;
    published_at: String;
    last_comment_at: String;
    reading_time_minutes: String;
    tag_list: String [];
    tags: String;
    user: user;

}