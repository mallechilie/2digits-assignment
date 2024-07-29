import * as React from 'react';

import Box from '@mui/material/Box';

import Filters from '@/app/blogs/Filters';
import CardGrid from '@/components/CardGrid';
import ContentWidth from '@/components/wrappers/ContentWidth';
import { PreprSdk } from '@/server/prepr';

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: number; tag?: string; title?: string };
}) {
  const result = await PreprSdk.SearchBlogs({
    limit: 9,
    skip: (searchParams?.page ?? 1) * 9 - 9,
    where: {
      _tags_any: searchParams?.tag ? [searchParams.tag] : [],
      title_contains: searchParams?.title ?? '',
    },
  });
  const Blogs = result.Blogs?.items;
  // const pagesTotal = (result.Blogs?.total ?? 0) / 9;

  return (
    <Box>
      <Filters params={{ title: searchParams?.title, tag: searchParams?.tag }} />

      {Blogs ? (
        <ContentWidth>
          <CardGrid blogs={Blogs} />
        </ContentWidth>
      ) : undefined}
    </Box>
  );
}
