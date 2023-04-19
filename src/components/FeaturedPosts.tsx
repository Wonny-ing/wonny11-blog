import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  // 1. 모든 포스트 데이터를 읽어와야 함
  const posts = await getFeaturedPosts();
  // 2. 모든 포스트 데이터를 보여줌
  return (
    <section className='my-4'>
      <h2 className='text-2xl text-bold my-2'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
