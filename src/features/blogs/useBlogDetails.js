import { useQuery } from '@tanstack/react-query';
import { getBlogsDetails } from '../../services/apiBlogs';

function useBlogDetails(slug) {
  const {
    data: post,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['postsdetails'],
    queryFn: () => getBlogsDetails(slug),
    enabled: !!slug,
    keepPreviousData: false,
  });

  return { post, isFetching, error };
}

export default useBlogDetails;
