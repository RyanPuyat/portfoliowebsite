// Shared route -> "file" mapping for the editor-chrome nav (Sidebar + TabBar).
export const NAV_ITEMS = [
  { path: '/', file: 'Home.jsx', lang: 'JSX', color: 'var(--ide-func)' },
  { path: '/projects', file: 'Projects.json', lang: 'JSON', color: 'var(--ide-num)' },
  { path: '/blog', file: 'Blog.md', lang: 'Markdown', color: 'var(--ide-type)' },
  { path: '/about', file: 'About.md', lang: 'Markdown', color: 'var(--ide-type)' },
  { path: '/contact', file: 'Contact.txt', lang: 'Plain Text', color: 'var(--ide-muted)' },
];

export function matchNavItem(pathname) {
  // exact match first, then prefix match for nested routes like /projects/:id
  const exact = NAV_ITEMS.find((i) => i.path === pathname);
  if (exact) return exact;
  const prefix = NAV_ITEMS.filter((i) => i.path !== '/' && pathname.startsWith(i.path));
  return prefix[0] || null;
}
