import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="h-full glass rounded-lg overflow-hidden shadow-sm transition hover:shadow-md bg-gray-800 p-6  mb-4">
      <article key={post.slug}>
        <h3 className="text-2xl font-semibold text-purple-400 truncate">
          {post.title}
        </h3>
        <p className="text-sm text-gray-400 mb-2">
          {new Date(post.date).toLocaleDateString()}
        </p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
        )}
        <p className="text-gray-300 mb-4 line-clamp-1">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="text-purple-300 text-sm hover:underline"
        >
          Read More →
        </Link>
      </article>
    </div>
  );
}

export default PostCard;
