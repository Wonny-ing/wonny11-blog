import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
    </>
  );
}
