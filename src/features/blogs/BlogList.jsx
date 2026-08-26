import Search from '../../ui/Search';
import Pagination from '../../ui/Pagination';
import useBlogs from './useBlogs';
import toast from 'react-hot-toast';
import Spinner from '../../ui/Spinner';
import PostCard from '../../ui/PostCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogList() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const { posts, totalPages, isFetching, error } = useBlogs();

  if (isFetching) return <Spinner />;
  if (error) {
    toast.error(error);
    return null;
  }

  function handleSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`?search=${encodeURIComponent(query)}&page=1`);
  }
  return (
    <>
      <div className="bg-[var(--ide-sidebar)] border border-[var(--ide-line)] p-6 sm:p-10 max-w-[1300px] mx-auto">
        <div className="text-xs font-jbmono text-[var(--ide-muted)] mb-2">
          ~/blog
        </div>
        <h2 className="font-jbmono text-2xl text-[var(--ide-type)] mb-6">
          Blog
        </h2>
        <Search value={searchQuery} onChange={handleSearch} />
        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-[var(--ide-muted)] text-center font-jbmono text-sm">
              // no posts found
            </p>
          ) : (
            posts.map((post) => <PostCard key={post.slug} post={post} />)
          )}
        </div>
      </div>

      <Pagination totalPages={totalPages} />
    </>
  );
}

export default BlogList;
