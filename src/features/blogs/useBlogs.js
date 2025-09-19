import { useQuery } from '@tanstack/react-query';
import { getBlogPosts } from '../../services/apiBlogs';
import { useLocation } from 'react-router-dom';

function useBlogs() {
  const {
    data: post,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getBlogPosts,
  });

  const PAGE_SIZE = 2;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search')?.toLowerCase() || '';
  const page = Number(queryParams.get('page')) || 1;

  const filteredSortedPosts = (post ?? [])
    .filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery) ||
        p.excerpt.toLowerCase().includes(searchQuery)
    )
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const totalPages = Math.ceil(filteredSortedPosts.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paginatedPosts = filteredSortedPosts.slice(start, end);

  return {
    posts: paginatedPosts,
    totalPages,
    page,
    isFetching,
    error,
  };
}

export default useBlogs;
