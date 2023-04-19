import PostsGrid from './PostsGrid';

export default function FeaturedPosts() {
  // 1. 모든 포스트 데이터를 읽어와야 함
  // 2. 모든 포스트 데이터를 보여줌
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid />
    </section>
  );
}
