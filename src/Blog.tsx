import type {
  PreprBlogQuery_Blog_Blog_content_ApplePodcast,
  PreprBlogQuery_Blog_Blog_content_Assets,
  PreprBlogQuery_Blog_Blog_content_Coordinates,
  PreprBlogQuery_Blog_Blog_content_FacebookPost,
  PreprBlogQuery_Blog_Blog_content_InstagramPost,
  PreprBlogQuery_Blog_Blog_content_NavigationItem,
  PreprBlogQuery_Blog_Blog_content_PageHeader,
  PreprBlogQuery_Blog_Blog_content_Quote,
  PreprBlogQuery_Blog_Blog_content_Resource,
  PreprBlogQuery_Blog_Blog_content_SoundCloudPost,
  PreprBlogQuery_Blog_Blog_content_SpotifyPlaylist,
  PreprBlogQuery_Blog_Blog_content_Text,
  PreprBlogQuery_Blog_Blog_content_TikTokPost,
  PreprBlogQuery_Blog_Blog_content_TwitterPost,
  PreprBlogQuery_Blog_Blog_content_VimeoPost,
  PreprBlogQuery_Blog_Blog_content_YouTubePost,
} from '@/server/prepr/generated/preprAPI.schema';

export interface Blog {
  _id: string;
  _publish_on?: string | undefined;
  title: string;
  banner_image: {
    url?: undefined | string;
    height?: undefined | number;
    width?: undefined | number;
  };
  categories: Array<{ body?: undefined | string }>;
  content?: undefined | Array<Content | undefined>;
  related_blogs?: Array<{ title?: undefined | string }>;
}

type Content =
  | PreprBlogQuery_Blog_Blog_content_ApplePodcast
  | PreprBlogQuery_Blog_Blog_content_Assets
  | PreprBlogQuery_Blog_Blog_content_Coordinates
  | PreprBlogQuery_Blog_Blog_content_FacebookPost
  | PreprBlogQuery_Blog_Blog_content_InstagramPost
  | PreprBlogQuery_Blog_Blog_content_NavigationItem
  | PreprBlogQuery_Blog_Blog_content_PageHeader
  | PreprBlogQuery_Blog_Blog_content_Quote
  | PreprBlogQuery_Blog_Blog_content_Resource
  | PreprBlogQuery_Blog_Blog_content_SoundCloudPost
  | PreprBlogQuery_Blog_Blog_content_SpotifyPlaylist
  | PreprBlogQuery_Blog_Blog_content_Text
  | PreprBlogQuery_Blog_Blog_content_TikTokPost
  | PreprBlogQuery_Blog_Blog_content_TwitterPost
  | PreprBlogQuery_Blog_Blog_content_VimeoPost
  | PreprBlogQuery_Blog_Blog_content_YouTubePost;
