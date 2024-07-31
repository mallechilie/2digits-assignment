'use client';

import * as React from 'react';
import type { ChangeEvent } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Pagination, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import MyToggleButtonGroup from '@/app/blogs/MyToggleButtonGroup';
import ContentWidth from '@/components/wrappers/ContentWidth';
import WideBackground from '@/components/wrappers/WideBackground';

export default function Search(props: {
  params?: { page?: number; maxPages: number; tag?: string; title?: string };
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // eslint-disable-next-line ts/unbound-method
  const { replace } = useRouter();

  const tags = ['Interview', 'Blog', 'Whitepaper'];
  const getStartTag = (tag: string = '') => {
    tag = tag.charAt(0).toUpperCase() + tag.slice(1);
    return tags.includes(tag) ? tag : '';
  };
  const [tag, setTag] = React.useState<string>(() => getStartTag(props.params?.tag));

  const [title, setTitle] = React.useState<string>(() => props.params?.title ?? '');
  const handleTag = (newTag: string) => {
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
        <ContentWidth sx={{ py: '32px' }}>
          <Typography variant="h5" sx={{ color: '#0E1527' }}>
            Search for blogs
          </Typography>

          <Box sx={{ display: 'flex', my: '16px' }}>
            <TextField
              sx={{ bgcolor: 'white', '& fieldset': { border: 'none' } }}
              fullWidth
              InputLabelProps={{ style: { color: '#0E1527' } }}
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

            <Button
              sx={{
                textTransform: 'none',
                bgcolor: '#371172',
                color: 'white',
                display: 'block',
                px: '32px',
                ml: '24px',
                '&:hover': {
                  backgroundColor: '#571bb1',
                },
              }}
              onClick={() => handleSearch()}>
              {'Search'}
            </Button>
          </Box>
        </ContentWidth>
      </WideBackground>

      <ContentWidth sx={{ py: '32px' }}>
        <Typography variant="h5" sx={{ color: '#0E1527' }}>
          Topics
        </Typography>

        <MyToggleButtonGroup
          values={[
            { value: '', label: 'ALL BLOGS' },
            ...tags.map((tag) => ({ value: tag, label: tag })),
          ]}
          value={tag}
          onChange={handleTag}
          sx={{
            mr: '8px',
            py: '4px',
            '&.Mui-selected': { bgcolor: '#371172', color: 'white' },
            '&.Mui-selected:hover': { bgcolor: '#571bb1', color: 'white' },
          }}
        />
      </ContentWidth>

      {props.children}

      <ContentWidth sx={{ display: 'flex', justifyContent: 'center', py: '80px' }}>
        <Pagination
          count={props.params?.maxPages ?? 1}
          page={page}
          onChange={handlePage}
          shape="rounded"
          sx={{ color: '#371172' }}
        />
      </ContentWidth>
    </Box>
  );
}
