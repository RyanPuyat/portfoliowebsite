import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../services/apiProjects';
import { useLocation } from 'react-router-dom';

export function useProjects() {
  const {
    data: allProjects,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  const PAGE_SIZE = 4;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = Number(queryParams.get('page')) || 1;
  const selectedCategory = queryParams.get('category') || 'All';

  const categories = Array.isArray(allProjects)
    ? [
        'All',
        ...Array.from(new Set(allProjects.map((project) => project.category))),
      ]
    : ['All'];

  const filteredProjects = allProjects
    ? selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory)
    : [];
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const paginatedProjects = filteredProjects.slice(start, end);
  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);

  return {
    projects: paginatedProjects,
    // totalCount: filteredProjects.length,  use this for showing total number of porject items
    totalPages,
    categories,
    selectedCategory,
    allProjects,
    isFetching,
    error,
  };
}
