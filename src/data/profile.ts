export interface Role {
  company: string
  url: string
  role: string
  startDate: string
  endDate?: string
  location: string
  description: string
  bullets: string[]
  current?: boolean
}

export const roles: Role[] = [
  {
    company: 'Payabli Inc.',
    url: 'https://www.payabli.com/',
    role: 'Software Engineer',
    startDate: 'May 2022',
    location: 'Miami, FL (Remote)',
    description: 'Fintech company building embedded payment infrastructure for software platforms.',
    bullets: [
      'Build React/TypeScript payment widgets and embedded components integrated into third-party platforms',
      'Develop merchant dashboards and financial reporting interfaces handling complex data visualization',
      'Contribute to full-stack features across the React frontend and .NET/C# backend with PostgreSQL',
      'Maintain and extend component library documented with Storybook',
      'Collaborate with design (Figma) and backend teams in an agile environment',
    ],
    current: true,
  },
  {
    company: 'CIMEX Audita S.A.',
    url: 'https://audita.cimex.com.cu/',
    role: 'Software Developer',
    startDate: 'Jan 2019',
    endDate: 'Sep 2021',
    location: 'Cienfuegos, Cuba',
    description: 'IT auditing company under CIMEX Corporation.',
    bullets: [
      'Developed and maintained internal software tools for audit management',
      'Built web applications supporting business operations and internal workflows',
    ],
  },
  {
    company: 'Ministry of Communications',
    url: 'https://www.mincom.gob.cu/',
    role: 'IT Specialist',
    startDate: 'Sep 2017',
    endDate: 'Apr 2019',
    location: 'Cienfuegos, Cuba',
    description: 'Territorial Control Office.',
    bullets: [
      'Provided software support and IT security for government communications infrastructure',
      'Managed informatic security protocols and system maintenance',
    ],
  },
]

export interface Project {
  titleEn: string
  titleEs: string
  descEn: string
  descEs: string
  stack: string[]
  cvSummary: string
  github: string
  live?: string
}

export const projects: Project[] = [
  {
    titleEn: 'Personal Portfolio',
    titleEs: 'Portfolio Personal',
    descEn: "The site you're on right now. Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. Features bilingual support (EN/ES), dark/light mode, and smooth animations.",
    descEs: 'El sitio que estás viendo ahora. Construido con Vite, React, TypeScript, Tailwind CSS y shadcn/ui. Soporte bilingüe (EN/ES), modo oscuro/claro y animaciones suaves.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    cvSummary: 'Bilingual personal site with dark mode and a generated PDF CV',
    github: 'https://github.com/joperezcf/portfolio',
    live: 'https://joseorlando.dev',
  },
  {
    titleEn: 'qEstudiare',
    titleEs: 'qEstudiare',
    descEn: 'Android app to help Cuban students explore university careers, navigate academic offerings, and make informed decisions about their studies.',
    descEs: 'Aplicación Android para ayudar a estudiantes cubanos a explorar carreras universitarias, navegar la oferta académica y tomar decisiones informadas sobre sus estudios.',
    stack: ['Java', 'Android SDK'],
    cvSummary: 'Android app that helps Cuban students explore university careers',
    github: 'https://github.com/joperezcf/qestudiare',
  },
  {
    titleEn: 'm-SMS',
    titleEs: 'm-SMS',
    descEn: 'Desktop application for sending bulk SMS messages through the Moises Soft platform. Built to simplify mass communication workflows.',
    descEs: 'Aplicación de escritorio para envío masivo de mensajes SMS a través de la plataforma Moises Soft. Construida para simplificar flujos de comunicación masiva.',
    stack: ['Java'],
    cvSummary: 'Desktop app for sending bulk SMS through the Moises Soft platform',
    github: 'https://github.com/joperezcf/m-SMS',
  },
]

export interface EducationEntry {
  institution: string
  location: string
  period: string
  degree: string
  url: string
  type: 'degree' | 'cert'
  verifyUrl?: string
}

export const educationData: EducationEntry[] = [
  {
    institution: 'University of Computer Science (UCI)',
    location: 'Havana, Cuba',
    period: '2012 – 2017',
    degree: "Bachelor's — Computer Science Engineering",
    url: 'https://www.uci.cu/',
    type: 'degree',
  },
  {
    institution: 'National Autonomous University of Mexico (UNAM) via Coursera',
    location: 'Online',
    period: 'Jun 2016',
    degree: 'Certificate — Android Application Development',
    url: 'https://www.coursera.org/account/accomplishments/verify/ZWLHPH9Z927Z',
    type: 'cert',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/ZWLHPH9Z927Z',
  },
  {
    institution: 'University of Computer Science (UCI)',
    location: 'Havana, Cuba',
    period: 'Mar 2018',
    degree: 'Certificate — Introduction to the Semantic Web',
    url: 'https://www.uci.cu/',
    type: 'cert',
  },
  {
    institution: 'Udemy',
    location: 'Online',
    period: 'Nov 2025',
    degree: 'Certificate — Hands on C# .NET: Entity Framework Core',
    url: 'https://www.udemy.com/certificate/UC-fdd6cb54-c7ae-45f2-aadf-8e2e30110baf/',
    type: 'cert',
    verifyUrl: 'https://www.udemy.com/certificate/UC-fdd6cb54-c7ae-45f2-aadf-8e2e30110baf/',
  },
]

export const skillGroups = [
  {
    key: 'frontend',
    skills: ['React 18', 'TypeScript', 'JavaScript (ES2022+)', 'HTML5', 'CSS3', 'TanStack Query', 'Storybook'],
  },
  {
    key: 'styling',
    skills: ['Tailwind CSS', 'Material UI', 'CSS Modules', 'Sass'],
  },
  {
    key: 'backend',
    skills: ['ASP.NET Core', 'C#', 'Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    key: 'testing',
    skills: ['Jest', 'React Testing Library'],
  },
  {
    key: 'tools',
    skills: ['Docker', 'Figma', 'Git', 'GitHub Actions', 'Vite', 'Webpack'],
  },
  {
    key: 'previous',
    skills: ['Java', 'PHP', 'Yii Framework', 'Android SDK', 'WordPress'],
  },
]
