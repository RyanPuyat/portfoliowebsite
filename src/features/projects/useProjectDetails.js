// import { useParams } from 'react-router-dom';
import { getProjectDetails } from '../../services/apiProjects';
import { useQuery } from '@tanstack/react-query';

export function useProjectDetails(id) {
  //   const { projectId } = useParams();

  const {
    data: project,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['project'],
    queryFn: () => getProjectDetails(id),
    enabled: !!id,
    keepPreviousData: false,
  });

  return {
    project,
    isFetching,
    error,
  };
}
