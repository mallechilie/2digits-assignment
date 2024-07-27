import Blogs from '@/app/blogs';
import Welcome from '@/app/welcome';
import ContentWidth from '@/components/ContentWidth';

export default function Home() {
  return (
    <main>
      <Welcome />

      <ContentWidth>
        <Blogs />
      </ContentWidth>
    </main>
  );
}
