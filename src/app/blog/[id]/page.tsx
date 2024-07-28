import Box from '@mui/material/Box';

import Blog from '@/app/blog/[id]/Blog';
import Header from '@/app/blog/[id]/Header';
import Related from '@/app/blog/[id]/Related';
import ContentWidth from '@/components/wrappers/ContentWidth';

export default function Page() {
  return (
    <Box>
      <Header imageUrl={`url(https://picsum.photos/1440/600?grayscale)`} />

      <ContentWidth>
        <Blog content={'Content'} tag={'Interview'} />
      </ContentWidth>

      <Related />
    </Box>
  );
}
