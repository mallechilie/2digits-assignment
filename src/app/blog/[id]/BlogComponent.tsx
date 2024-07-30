import * as React from 'react';

import Box from '@mui/material/Box';
import type { Variant } from '@mui/material/styles/createTypography';
import Typography from '@mui/material/Typography';

import type { Blog } from '@/Blog';
import Tag from '@/components/Tag';
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

function asCorrectTextContent(
  content:
    | (
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
        | PreprBlogQuery_Blog_Blog_content_YouTubePost
      )
    | undefined,
) {
  console.log(content);
  if (!(content && 'text' in content && (content.text as string))) return;
  const text = content.text as string;

  if (!('format' in content && content.format)) {
    return { text, format: 'body1' };
  }

  const format = (content.format as string).toLowerCase() as Variant;
  console.log(format, text);
  return { format, text };
}

export default function BlogComponent(props: { blog: Blog }) {
  return (
    <Box>
      {props.blog.categories.map((category) => (
        <Tag tagName={category.body ?? 'Empty'} key={category.body} />
      ))}

      <Typography variant="h3">{props.blog.title}</Typography>

      <Typography>
        {props.blog.content?.map((content) => {
          const _content = asCorrectTextContent(content);
          return _content ? (
            // @ts-ignore already checked type
            <Typography variant={_content.format} key={_content}>
              {_content.text}
            </Typography>
          ) : (
            <Typography key={_content}>Non-text element: not implemented yet</Typography>
          );
        })}
      </Typography>
    </Box>
  );
}
