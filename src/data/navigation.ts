export interface NavLink {
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'featured-work', label: 'Featured' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
];
