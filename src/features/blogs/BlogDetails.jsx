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

  const proseClasses =
    'prose prose-invert max-w-none prose-headings:font-normal prose-headings:text-[var(--ide-type)] prose-a:text-[var(--ide-accent)] prose-strong:text-[var(--ide-text)] prose-code:text-[var(--ide-string)] prose-blockquote:border-l-[var(--ide-line)] prose-blockquote:text-[var(--ide-muted)]';

  return (
    <div className="max-w-[1300px] mx-auto px-6 sm:px-10 py-14 bg-[var(--ide-sidebar)] border border-[var(--ide-line)]">
      <div className="text-xs font-jbmono text-[var(--ide-muted)] mb-6">
        ~/blog/{post.slug}.md
      </div>
      <h1 className="font-jbmono text-2xl text-[var(--ide-type)] mb-2">
        {post.title}
      </h1>
      <p className="font-jbmono text-xs text-[var(--ide-muted)] mb-10">
        {new Date(post.date).toLocaleDateString()}
      </p>

      <div>
        <div className={`${proseClasses} mb-12`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>
        <div className={`${proseClasses} mb-8`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.section01}
          </ReactMarkdown>
        </div>
        <div className="mb-4 py-4 mx-auto">
          {post.image01 && (
            <img
              src={post.image01}
              alt="image01"
              className="w-full max-w-4xl h-auto object-cover border border-[var(--ide-line)] opacity-90"
            />
          )}
        </div>
        <div className={`${proseClasses} mb-12`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.section02}
          </ReactMarkdown>
        </div>
        <div className="mb-4 py-4 mx-auto">
          {post.image02 && (
            <img
              src={post.image02}
              alt="image01"
              className="w-full max-w-4xl h-auto mb-4 object-cover border border-[var(--ide-line)] opacity-90"
            />
          )}
        </div>
        <div className={`${proseClasses} mb-12`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.section03}
          </ReactMarkdown>
        </div>
        <div className={`${proseClasses} mb-12`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.section04}
          </ReactMarkdown>
        </div>
      </div>

      <Link
        to="/blog"
        className="font-jbmono text-[var(--ide-accent)] text-sm hover:underline"
      >
        ← back to posts
      </Link>
    </div>
  );
}
export default BlogDetails;
