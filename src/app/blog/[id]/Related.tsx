import * as React from 'react';

import Typography from '@mui/material/Typography';

import CardGrid from '@/components/CardGrid';
import ContentWidth from '@/components/wrappers/ContentWidth';
import WideBackground from '@/components/wrappers/WideBackground';
import { PreprSdk } from '@/server/prepr';

export default async function Related(props: { id: string }) {
  const { Similar_Blogs } = await PreprSdk.RelatedBlogs({ id: props.id, limit: 3 });
  const Blogs = Similar_Blogs?.items;

  return Blogs ? (
    <WideBackground>
      <ContentWidth>
        <Typography variant="h2" sx={{ color: '#0E1527' }}>
          Gerelateerde blogs
        </Typography>

        <CardGrid blogs={Blogs} />
      </ContentWidth>
    </WideBackground>
  ) : undefined;
}
