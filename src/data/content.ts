// ============================================
// PERSONAL WEBSITE CONTENT
// Edit this file to update your website content
// ============================================

export const siteConfig = {
  name: 'Ellen Herrera',
  title: 'Software Developer & Fitness Professional',
  email: 'ebherrera01@gmail.com', // TODO: Add your email
  location: 'Richmond, VA',
  github: 'https://github.com/ebh1226', // TODO: Add your GitHub
  linkedin: 'https://linkedin.com/in/ellenherrera',
}

export const heroContent = {
  greeting: "Hi, I'm",
  name: 'Ellen Herrera',
  roles: [
    'Software Developer',
    'AI Consultant',
    'Fitness Professional',
    'Personal Trainer',
  ],
  tagline: 'Bridging technology and wellness to create innovative solutions and empower healthier lives.',
  ctaPrimary: 'View My Work',
  ctaSecondary: 'Get In Touch',
}

export const aboutContent = {
  headline: 'About Me',
  paragraphs: [
    "I'm a recent UVA graduate with a unique blend of expertise in software development, AI consulting, and fitness instruction. My journey spans cybersecurity analysis, building RAG agents for enterprise workflows, and empowering people through fitness across Richmond's top gyms.",
    "Currently serving as Head Software Developer and AI Consultant at MyAiPathways, I help organizations leverage artificial intelligence to transform their operations. My technical background in cybersecurity gives me a security-first mindset in everything I build.",
    "Beyond code, I'm an ACE-certified personal trainer and group exercise instructor at 5 gyms in RVA. I believe in holistic wellness—that physical health and mental clarity fuel professional excellence. This dual perspective allows me to bring energy, discipline, and fresh thinking to every project.",
  ],
  stats: [
    { value: '3+', label: 'Years in Tech' },
    { value: '5', label: 'Gyms in RVA' },
    { value: 'ACE', label: 'Certified PT' },
  ],
  image: '/images/profile.jpg', // TODO: Add your profile photo
}

export const experienceContent = {
  headline: 'Technical Experience',
  positions: [
    {
      company: 'MyAiPathways',
      role: 'Head Software Developer, AI Consultant & Technical Creative Associate',
      period: 'Present',
      type: 'current',
      description: 'Leading software development and AI consulting initiatives for an innovative AI consulting firm.',
      achievements: [
        'Architect and implement AI-powered solutions for diverse client needs',
        'Provide technical leadership and creative direction for client projects',
        'Develop custom AI integrations and automation workflows',
        'Consult on AI strategy and implementation roadmaps',
      ],
      technologies: ['Python', 'AI/ML', 'LLMs', 'RAG', 'Cloud Services'],
    },
    {
      company: 'Booz Allen Hamilton',
      role: 'Software Developer Intern',
      period: 'Summer 2023', // TODO: Verify dates
      type: 'internship',
      description: 'Developed innovative AI solutions for cybersecurity compliance workflows.',
      achievements: [
        'Implemented RAG (Retrieval-Augmented Generation) agent for Jira/Confluence workflow optimization',
        'Enabled cybersecurity compliance auditors to streamline their documentation processes',
        'Worked with enterprise-scale data and security-conscious development practices',
        'Collaborated with cross-functional teams on AI/ML initiatives',
      ],
      technologies: ['Python', 'RAG', 'LangChain', 'Jira API', 'Confluence API', 'Vector Databases'],
    },
    {
      company: 'Sentara Healthcare',
      role: 'Junior Cybersecurity Analyst',
      period: '1 Year 10 Months', // TODO: Add specific dates
      type: 'full-time',
      description: 'Protected healthcare systems and patient data through security monitoring and analysis.',
      achievements: [
        'Monitored and analyzed security events across enterprise healthcare infrastructure',
        'Conducted vulnerability assessments and security audits',
        'Collaborated with IT teams to implement security best practices',
        'Ensured HIPAA compliance and data protection standards',
      ],
      technologies: ['SIEM', 'Network Security', 'Vulnerability Assessment', 'HIPAA Compliance'],
    },
    {
      company: 'Freelance',
      role: 'Web Developer & IT Support',
      period: 'Ongoing',
      type: 'freelance',
      description: 'Providing web development and IT support services to local businesses.',
      achievements: [
        'Redesigned website for Central Virginia Physical Therapy',
        'Improved client web presence and user experience',
        'Provided ongoing IT support and technical consultation',
        'Delivered solutions tailored to small business needs',
      ],
      technologies: ['Web Development', 'UI/UX', 'IT Support', 'Client Relations'],
    },
  ],
}

export const fitnessContent = {
  headline: 'Fitness & Wellness',
  intro: "Fitness isn't just my side hustle—it's a core part of who I am. I believe physical wellness fuels mental clarity and professional excellence.",
  certifications: [
    {
      title: 'ACE Certified Personal Trainer',
      issuer: 'American Council on Exercise',
      year: '2024', // TODO: Verify year
      icon: 'award',
    },
  ],
  highlights: [
    {
      title: 'Group Exercise Instructor',
      description: 'Teaching high-energy classes at 5 gyms across Richmond, VA',
      icon: 'users',
    },
    {
      title: 'Personal Training',
      description: 'One-on-one coaching focused on sustainable fitness and lifestyle changes',
      icon: 'dumbbell',
    },
    {
      title: 'Holistic Approach',
      description: 'Combining physical training with wellness education for lasting results',
      icon: 'heart',
    },
  ],
  philosophy: 'I bring the same discipline, energy, and continuous improvement mindset from fitness into my tech work—and vice versa. Both require dedication, adaptability, and a commitment to growth.',
}

export const educationContent = {
  headline: 'Education & Certifications',
  degrees: [
    {
      school: 'University of Virginia',
      degree: 'Bachelor of Arts in Computer Science (BACS)',
      year: '2024',
      highlights: [
        'Completed rigorous computer science curriculum',
        'Combined technical education with liberal arts foundation',
        // TODO: Add relevant coursework, activities, honors
      ],
    },
  ],
  certifications: [
    {
      name: 'ACE Certified Personal Trainer',
      issuer: 'American Council on Exercise',
      year: '2024',
    },
    // TODO: Add other certifications
  ],
  continuous: [
    {
      name: 'AI Ready RVA',
      description: 'Active member passionate about AI education and community building',
    },
    // TODO: Add other continuous learning activities
  ],
}

export const projectsContent = {
  headline: 'Featured Projects',
  projects: [
    {
      title: 'RAG Agent for Workflow Optimization',
      company: 'Booz Allen Hamilton',
      description: 'Built a Retrieval-Augmented Generation agent that streamlined Jira and Confluence workflows for cybersecurity compliance auditors, significantly improving documentation efficiency.',
      technologies: ['Python', 'LangChain', 'RAG', 'Vector DB', 'Jira API', 'Confluence API'],
      highlights: [
        'Automated retrieval of relevant compliance documentation',
        'Integrated with existing enterprise tools',
        'Reduced manual documentation search time',
      ],
      // image: '/images/projects/rag-agent.png', // TODO: Add project image
      // link: '', // TODO: Add link if public
    },
    {
      title: 'Central Virginia Physical Therapy Website',
      company: 'Freelance',
      description: 'Complete website redesign for a local physical therapy practice, improving user experience and modernizing their online presence.',
      technologies: ['Web Development', 'UI/UX Design', 'Responsive Design'],
      highlights: [
        'Modern, mobile-responsive design',
        'Improved patient engagement',
        'Enhanced online appointment visibility',
      ],
      // image: '/images/projects/cvpt.png', // TODO: Add project image
      link: '', // TODO: Add website URL
    },
    {
      title: 'AI Consulting Solutions',
      company: 'MyAiPathways',
      description: 'Developing and implementing AI-powered solutions for diverse clients, from automation workflows to intelligent assistants.',
      technologies: ['Python', 'AI/ML', 'LLMs', 'API Integration', 'Cloud Services'],
      highlights: [
        'Custom AI integrations for client workflows',
        'Strategic AI implementation consulting',
        'End-to-end solution development',
      ],
      // image: '/images/projects/myaipathways.png', // TODO: Add project image
      // link: '', // TODO: Add link if applicable
    },
  ],
}

export const contactContent = {
  headline: "Let's Connect",
  description: "Whether you're looking for a developer, AI consultant, or personal trainer—or just want to chat about the intersection of tech and wellness—I'd love to hear from you.",
  email: siteConfig.email,
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: siteConfig.linkedin,
      icon: 'linkedin',
    },
    {
      platform: 'GitHub',
      url: siteConfig.github,
      icon: 'github',
    },
  ],
}

export const footerContent = {
  copyright: `${new Date().getFullYear()} Ellen Herrera. All rights reserved.`,
  builtWith: 'Built with Next.js & Tailwind CSS',
}

// Navigation items
export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Fitness', href: '#fitness' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
