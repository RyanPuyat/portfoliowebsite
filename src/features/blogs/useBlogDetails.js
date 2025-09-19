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

  console.log(Array.isArray(post));

  console.log(post);

  return { post, isFetching, error };
}

export default useBlogDetails;
