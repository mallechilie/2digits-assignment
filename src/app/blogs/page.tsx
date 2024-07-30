import * as React from 'react';

import Search from '@/app/blogs/Search';
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
  const pagesTotal = Math.ceil((result.Blogs?.total ?? 0) / 9);

  return (
    <Search
      params={{
        page: searchParams?.page,
        tag: searchParams?.tag,
        title: searchParams?.title,
        maxPages: pagesTotal,
      }}>
      {Blogs ? (
        <div>
          <ContentWidth>
            <CardGrid blogs={Blogs} />
          </ContentWidth>
        </div>
      ) : undefined}
    </Search>
  );
}
