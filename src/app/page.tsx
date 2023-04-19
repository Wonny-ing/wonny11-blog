import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
}
