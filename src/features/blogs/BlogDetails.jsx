import { useParams } from 'react-router-dom';
import useBlogDetails from './useBlogDetails';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Spinner from '../../ui/Spinner';

function BlogDetails() {
  const { slug } = useParams();
  const { post, isFetching, error } = useBlogDetails(slug);

  if (isFetching) return <Spinner />;
  if (error) {
    toast.error(error);
    return null;
  }

  return (
    <div className="max-w-[1300px] mx-auto px-6 py-12 glass">
      <h1 className="text-3xl font-bold text-purple-400 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(post.date).toLocaleDateString()}
      </p>

      <div className="prose prose-invert max-w-none mb-12 ">{post.body}</div>

      <Link to="/blog" className="text-purple-300 text-sm hover:underline">
        {' '}
        ← Back to Posts
      </Link>
    </div>
  );
}
export default BlogDetails;
