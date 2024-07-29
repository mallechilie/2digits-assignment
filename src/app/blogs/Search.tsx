'use client';

import * as React from 'react';
import type { ChangeEvent } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Pagination, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ContentWidth from '@/components/wrappers/ContentWidth';
import WideBackground from '@/components/wrappers/WideBackground';

function getStartTag(tagList: string[], tag: string = '') {
  tag = tag.charAt(0).toUpperCase() + tag.slice(1);
  return tagList.includes(tag) ? tag : '';
}

export default function Search(props: {
  params?: { page?: number; maxPages: number; tag?: string; title?: string };
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // eslint-disable-next-line ts/unbound-method
  const { replace } = useRouter();

  const tags = ['Interview', 'Blog', 'Whitepaper'];
  const [tag, setTag] = React.useState<string>(() => getStartTag(tags, props.params?.tag));

  const [title, setTitle] = React.useState<string>(() => props.params?.title ?? '');
  const handleTag = (_event: React.MouseEvent<HTMLElement>, newTag: string) => {
    setTag(newTag);
    handleSearch(newTag, title);
  };
  const [page, setPage] = React.useState<number>(props.params?.page ?? 1);
  const handlePage = (_event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    const params = new URLSearchParams(searchParams);
    params.set('page', String(newPage));
    replace(`${pathname}?${params.toString()}`);
  };

  function handleSearch(_tag: string = tag, _title: string = title) {
    const params = new URLSearchParams(searchParams);
    _tag ? params.set('tag', _tag) : params.delete('tag');
    _title ? params.set('title', _title) : params.delete('title');
    params.delete('page');
    setPage(1);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Box>
      <WideBackground>
        <ContentWidth>
          <Typography variant="h2" sx={{ color: '#0E1527' }}>
            Search for blogs
          </Typography>

          <Box sx={{ display: 'flex' }}>
            <TextField
              sx={{ width: '100%' }}
              label={'Search'}
              defaultValue={title}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(event.target.value);
              }}
              onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                  handleSearch();
                }
              }}
            />

            <Button sx={{ color: 'white', display: 'block' }} onClick={() => handleSearch()}>
              {'Search'}
            </Button>
          </Box>
        </ContentWidth>
      </WideBackground>

      <ContentWidth>
        <Typography variant="h2" sx={{ color: '#0E1527' }}>
          Topics
        </Typography>

        <ToggleButtonGroup value={tag} exclusive onChange={handleTag}>
          <ToggleButton value="">ALL BLOGS</ToggleButton>

          {tags.map((tag) => (
            <ToggleButton value={tag} key={tag}>
              {tag}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </ContentWidth>

      {props.children}

      <ContentWidth sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={props.params?.maxPages ?? 1} page={page} onChange={handlePage} />
      </ContentWidth>
    </Box>
  );
}
