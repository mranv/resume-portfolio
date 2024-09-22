import type { Site, Page } from './types'

export const loaderAnimation = {
  duration: 5,
  opacity: [0, 1],
  scale: [0.9, 1],
  easing: "ease-in-out",
};
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
      'Architected and implemented automated security testing and threat monitoring systems within CI/CD pipelines, enhancing detection of vulnerabilities by 40%',
      'Spearheaded the adoption of security-as-code practices, resulting in a 30% reduction in security-related defects in application development',
      'Conducted thorough risk assessments and led initiatives to foster a DevSecOps culture, improving cross-team collaboration and reducing security incidents by 25%'
    ],
  },
  {
    company: 'Lucid Growth',
    location: 'Bengaluru, Karnataka, India',
    position: 'Security Engineer',
    start: 'Oct 2023',
    end: 'Nov 2023',
    tasks: [
      'Designed and implemented robust security protocols, enhancing overall system integrity and reducing potential vulnerabilities by 35%',
      'Led comprehensive risk assessments, identifying and mitigating critical security gaps across various IT infrastructures',
      'Facilitated cross-functional collaboration to develop and implement cohesive security policies, improving organizational security posture by 20%'
    ],
  },
  {
    company: 'Parul University',
    location: 'Vadodara, Gujarat, India',
    position: 'IT Specialist',
    start: 'Nov 2022',
    end: 'Oct 2023',
    tasks: [
      'Orchestrated incident response and security operations, reducing average resolution time for security incidents by 50%',
      'Leveraged Palo Alto Networks security solutions to fortify network defenses, resulting in a 40% decrease in successful breach attempts',
      'Provided expert system support and troubleshooting, maintaining 99.9% uptime for critical university IT infrastructure'
    ],
  },
]

