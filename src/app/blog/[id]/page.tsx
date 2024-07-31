import Box from '@mui/material/Box';

import BlogComponent from '@/app/blog/[id]/BlogComponent';
import Header from '@/app/blog/[id]/Header';
import Related from '@/app/blog/[id]/Related';
import ContentWidth from '@/components/wrappers/ContentWidth';
import { PreprSdk } from '@/server/prepr';

export default async function Page({ params }: { params: { id: string } }) {
  const { Blog } = await PreprSdk.Blog({ blogId: params.id });

  return Blog ? (
    <Box>
      <Header imageUrl={`url(${Blog.banner_image.url})`} />

      <ContentWidth sx={{ py: '64px' }}>
        <BlogComponent blog={Blog} />
      </ContentWidth>

      <Related id={params.id} />
    </Box>
  ) : (
    <Box></Box>
  );
}
