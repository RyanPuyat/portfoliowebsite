import supabase from './supabase';

export async function getBlogPosts() {
  let { data: blogpost, error } = await supabase.from('blogpost').select('*');

  if (error) {
    console.log(error);
    throw new Error('Blogpost could not be loaded');
  }

  return blogpost;
}

export async function getBlogsDetails() {
  let { data: postdetails, error } = await supabase
    .from('postdetails')
    .select('*');

  if (error) {
    console.log(error);
    throw new Error('Blog details could not be loaded');
  }
  return postdetails;
}
