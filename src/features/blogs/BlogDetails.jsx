import { useParams } from 'react-router-dom';
import useBlogDetails from './useBlogDetails';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Spinner from '../../ui/Spinner';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function BlogDetails() {
  const { slug } = useParams();
  const { post, isFetching, error } = useBlogDetails(slug);

  if (isFetching) return <Spinner />;
  if (error) {
    toast.error(error);
    return null;
  }

  // const markdown = post.body.replace(/\\n/g, '\n');

  return (
    <div className="max-w-[1300px] mx-auto px-6 py-12 glass">
      <h1 className="text-3xl font-bold text-purple-400 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div>
        <div className="prose prose-invert max-w-none mb-12 ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>
        <div className="prose prose-invert max-w-none mb-8 ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.section01}
          </ReactMarkdown>
        </div>
        <div className="mb-4 py-4 mx-auto">
          {post.image01 && (
            <img
              src={post.image01}
              alt="image01"
              className="w-[1000] h-[360px] mb-4 object-cover"
            />
          )}
        </div>
        <div className="prose prose-invert max-w-none mb-12 ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.section02}
          </ReactMarkdown>
        </div>
        <div className="mb-4 py-4 mx-auto">
          {post.image02 && (
            <img
              src={post.image02}
              alt="image01"
              className="w-[1000] h-[360px]  object-cover"
            />
          )}
        </div>
        <div className="prose prose-invert max-w-none mb-12 ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.section03}
          </ReactMarkdown>
        </div>
        <div className="prose prose-invert max-w-none mb-12 ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.section04}
          </ReactMarkdown>
        </div>
      </div>

      <Link to="/blog" className="text-purple-300 text-sm hover:underline">
        {' '}
        ← Back to Posts
      </Link>
    </div>
  );
}
export default BlogDetails;
