import type { Site, Page } from './types'

export const LINKS = {
  github: 'https://github.com/mranv',
  linkedin: 'https://www.linkedin.com/in/anubhavgain/',
  mail: 'mailto:iamanubhavgain@gmail.com',
  instagram: 'https://www.instagram.com/anubhavgain',
  medium: 'https://mranv.medium.com/',
  discord: 'https://discordapp.com/users/163300027618295808',
}

export const SITE: Site = {
  TITLE: 'Anubhav Gain',
  DESCRIPTION: 'DevSecOps Engineer and Cybersecurity Expert',
  AUTHOR: 'Anubhav Gain',
}

export const WORK: Page = {
  TITLE: 'Experience',
  DESCRIPTION: 'My professional journey in cybersecurity and software development.',
}

export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Insights and articles on cybersecurity, DevSecOps, and technology.',
}

export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Cybersecurity and software development projects I have worked on.',
}

export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Explore my work, blog posts, and projects.',
}

export const STUDIES = [
  {
    title: 'Bachelor of Technology - BTech, Cyber/Computer Forensics and Counterterrorism',
    institution: 'Parul University',
    link: 'https://www.paruluniversity.ac.in/',
    date: '2021 - 2025',
  },
  {
    title: 'Licentiate degree, Ransomware Techniques',
    institution: 'Charles Sturt University',
    link: 'https://www.csu.edu.au/',
    date: 'Mar 2023 - Sep 2023',
  },
]

export const EXPERIENCE = [
  {
    company: 'Atcults',
    location: 'Ahmedabad, Gujarat, India',
    position: 'DevSecOps Engineer',
    start: 'Nov 2023',
    link: 'https://www.atcults.com/',
    end: 'Present',
    tasks: [
      'Integrating automated security testing and threat monitoring in CI/CD pipeline',
      'Implementing security-as-code practices for secure application development',
      'Conducting risk assessments and fostering DevSecOps culture across teams',
    ],
  },
  {
    company: 'Lucid Growth',
    location: 'Bengaluru, Karnataka, India',
    position: 'Security Engineer',
    start: 'Oct 2023',
    end: 'Nov 2023',
    tasks: [
      'Implemented and maintained stringent security protocols',
      'Conducted comprehensive risk assessments',
      'Collaborated with cross-functional teams to develop robust security policies',
    ],
  },
  {
    company: 'Parul University',
    location: 'Vadodara, Gujarat, India',
    position: 'IT Specialist',
    start: 'Nov 2022',
    end: 'Oct 2023',
    tasks: [
      'Managed incident response and security operations',
      'Worked with Palo Alto Networks security solutions',
      'Provided system support and troubleshooting',
    ],
  },
]