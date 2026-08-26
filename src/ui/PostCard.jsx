import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="h-full bg-[var(--sig-panel)] backdrop-blur border border-[var(--sig-line)] p-6 overflow-hidden hover:border-[var(--sig-green-dim)] transition-colors mb-4">
      <article key={post.slug}>
        <div className="w-2 h-2 rounded-full bg-[var(--sig-amber)] shadow-[0_0_8px_var(--sig-amber)] mb-3" />
        <h3 className="font-display text-lg text-[var(--sig-text)] truncate mb-1">
          {post.title}
        </h3>
        <p className="font-mono text-[11px] text-[var(--sig-muted)] mb-3">
          {new Date(post.date).toLocaleDateString()}
        </p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover mb-4 opacity-90"
          />
        )}
        <p className="text-[var(--sig-text)] mb-4 line-clamp-1 text-sm">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="font-mono text-xs text-[var(--sig-green)] hover:underline"
        >
          [ READ MORE ]
        </Link>
      </article>
    </div>
  );
}

export default PostCard;
