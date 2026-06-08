import { ContactData } from '../types';

export const contactData: ContactData = {
  // Core identity
  name: 'Akshay Gupta',
  position: 'M.Tech Student',
  department: 'Data and Computational Science, Department of Mathematics',
  institution: 'Indian Institute of Technology Jodhpur',
  institutionShort: 'IIT Jodhpur',

  // Contact channels
  email: 'm25mac017@iitj.ac.in',
  altEmail: 'akshay.gpt505@gmail.com',
  github: 'https://github.com/aksugpt',
  githubHandle: 'aksugpt',
  linkedin: 'https://www.linkedin.com/in/akshay-gupta-a16201164/',
  linkedinHandle: 'akshay-gupta-a16201164',
  location: 'IIT Jodhpur Campus, Jodhpur, Rajasthan, India',

  // Legacy fields (kept for compatibility)
  availability: 'open',
  availabilityText: 'Open to Research Opportunities, AI/ML Roles, and Collaborations',
  socials: [
    {
      platform: 'Email',
      url: 'mailto:m25mac017@iitj.ac.in',
      label: 'm25mac017@iitj.ac.in',
      iconName: 'Mail',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/akshay-gupta-a16201164/',
      label: 'akshay-gupta-a16201164',
      iconName: 'Linkedin',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/aksugpt',
      label: 'aksugpt',
      iconName: 'Github',
    },
  ],

  // Rich profile data
  tagline: 'Open to Research, AI Innovation, and Technical Discussions',
  intro:
    "M.Tech researcher at IIT Jodhpur specialising in Generative AI, LLMs, and Agentic Systems. I bridge deep research with full-stack engineering — whether it's building RAG pipelines, agentic workflows, or embedded systems. Always open to meaningful collaboration.",
  professionalInterests: [
    'Deep Learning',
    'Generative AI',
    'Retrieval-Augmented Generation (RAG)',
    'Large Language Models (LLMs)',
    'Agentic AI Systems',
    'Machine Learning',
    'Data Science',
    'Wireless Security',
    'Embedded Systems',
    'Full-Stack Development',
  ],
  openTo: [
    'AI/ML Research Opportunities',
    'Generative AI Projects',
    'RAG Systems Development',
    'Agentic AI Research',
    'Software Engineering Roles',
    'Research Collaborations',
    'Open Source Contributions',
  ],
};
