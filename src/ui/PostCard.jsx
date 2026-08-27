import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="h-full bg-[var(--sig-panel)] backdrop-blur border border-[var(--sig-line)] p-6 overflow-hidden mb-4 transition-all duration-200 hover:border-[var(--sig-green-dim)] hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_var(--sig-green-dim)]">
      <article key={post.slug} className="group">
        <div className="w-2 h-2 rounded-full bg-[var(--sig-amber)] shadow-[0_0_8px_var(--sig-amber)] mb-3" />
        <h3 className="font-display text-lg text-[var(--sig-text)] truncate mb-1">
          {post.title}
        </h3>
        <p className="font-mono text-[11px] text-[var(--sig-muted)] mb-3">
          {new Date(post.date).toLocaleDateString()}
        </p>
        {post.image && (
          <div className="overflow-hidden mb-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <p className="text-[var(--sig-text)] mb-4 line-clamp-1 text-sm">
          {post.excerpt}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="font-mono text-xs text-[var(--sig-green)] hover:underline inline-flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-1"
        >
          [ READ MORE ]
        </Link>
      </article>
    </div>
  );
}

export default PostCard;
