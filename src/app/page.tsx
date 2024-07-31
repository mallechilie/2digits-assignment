import Blogs from '@/app/Blogs';
import Header from '@/components/Header';
import ContentWidth from '@/components/wrappers/ContentWidth';

export default function Home() {
  return (
    <main>
      <Header title={'Home'} sx={{ height: 600 }} />

      <ContentWidth sx={{ py: '64px' }}>
        <Blogs />
      </ContentWidth>
    </main>
  );
}
