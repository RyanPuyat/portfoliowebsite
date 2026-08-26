import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="h-full bg-[var(--ide-sidebar)] border border-[var(--ide-line)] p-6 overflow-hidden hover:border-[var(--ide-type)] transition-colors mb-4">
      <article key={post.slug} className="font-jbmono">
        <div className="text-xs text-[var(--ide-muted)] mb-2">
          ~/blog/{post.slug}.md
        </div>
        <h3 className="text-lg text-[var(--ide-type)] truncate mb-1">
          {post.title}
        </h3>
        <p className="text-xs text-[var(--ide-muted)] mb-3">
          {new Date(post.date).toLocaleDateString()}
        </p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover mb-4 opacity-90"
          />
        )}
        <p className="text-[var(--ide-text)] mb-4 line-clamp-1 font-sans text-sm">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="text-[var(--ide-accent)] text-sm hover:underline"
        >
          // read more →
        </Link>
      </article>
    </div>
  );
}

export default PostCard;
