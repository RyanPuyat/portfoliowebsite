import toast from 'react-hot-toast';
import PostCard from '../../ui/PostCard';
import useBlogs from './useBlogs';
import Spinner from '../../ui/Spinner';

function BlogPreview() {
  const { posts, isPending, error } = useBlogs();
  const count = 2;

  if (error) {
    toast.error(error);
    return null;
  }

  if (isPending) return <Spinner />;

  const latestPosts = posts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, count);
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray200">Latest Blog</h2>

      <div className="grid gap-6 sm:grid-cols-2 z-10">
        {latestPosts.map((posts) => (
          <PostCard key={posts.id} post={posts} />
        ))}
      </div>
    </section>
  );
}
export default BlogPreview;
