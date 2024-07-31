import Blogs from '@/app/blogs';
import Welcome from '@/app/welcome';
import ContentWidth from '@/components/wrappers/ContentWidth';

export default function Home() {
  return (
    <main>
      <Welcome />

      <ContentWidth sx={{ py: '64px' }}>
        <Blogs />
      </ContentWidth>
    </main>
  );
}
