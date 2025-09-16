import supabase from './supabase';

export async function getProjects() {
  const { data: projects, error } = await supabase.from('projects').select('*');

  if (error) {
    console.log(error);
    throw new Error('Projects could not be loaded');
  }

  return projects || [];
}

export async function getProjectDetails(id) {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Projects could not be loaded');
  }

  return projects || [];
}
