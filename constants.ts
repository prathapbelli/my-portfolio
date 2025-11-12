
import React from 'react';
import { type Profile, type Skill, type Project, type Experience } from './types';
import { PythonIcon, FastApiIcon, PostgreSqlIcon, PySparkIcon, GitActionsIcon, KeycloakIcon, KubernetesIcon, S3Icon, JavaIcon, HerokuIcon, NetlifyIcon, NodeJsIcon, PhpIcon, RubyOnRailsIcon, FfmpegIcon, PandasIcon, TemporalIcon, NovuIcon, VespaIcon, PosticoIcon, PgAnalyserIcon, AtlasIcon, DbmateIcon, CloudflareIcon } from './components/icons';

export const PROFILES: Profile[] = [
  { name: 'Recruiter', avatarColor: 'bg-blue-500' },
  { name: 'Developer', avatarColor: 'bg-gray-500' },
  { name: 'Stalker', avatarColor: 'bg-red-500' },
  { name: 'Adventurer', avatarColor: 'bg-yellow-500' },
];

export const PERSONAL_INFO = {
  name: 'PRATHAPA BELLI',
  title: 'Senior Software Engineer',
  summary: 'Results-driven Software Engineer with 6 years of experience designing and developing backend systems, data pipelines, and API-driven platforms across healthcare and hospitality domains. Skilled in Python, FastAPI, PySpark, and data transformation with a strong understanding of system integration and data interoperability. Passionate about delivering efficient, scalable, and secure software solutions.',
  linkedin: 'https://www.linkedin.com/in/prathap-m-belli-8b0102132',
  resumeUrl: '/prathapa_belli_resume.pdf', 
  email: 'prathapmprathu@gmail.com',
  phone: '+91 9739334635'
};

export const TOP_PICKS: Project[] = [
    { title: 'Personal Info', imageUrl: 'https://picsum.photos/id/26/500/280', page: 'profile' },
    { title: 'Work Experience', imageUrl: 'https://picsum.photos/id/5/500/280', page: 'experience' },
    { title: 'Skills', imageUrl: 'https://picsum.photos/id/20/500/280', page: 'skills' },
    { title: 'Projects', imageUrl: 'https://picsum.photos/seed/projects/500/280', page: 'projects' },
];

export const CONTINUE_WATCHING: Project[] = [
    { title: 'Music', imageUrl: 'https://picsum.photos/seed/music/500/280', link: 'https://medium.com/@prathapa.belli' },
    { title: 'Reading', imageUrl: 'https://picsum.photos/seed/reading/500/280', link: 'https://medium.com/@prathapa.belli' },
    { title: 'Blogs', imageUrl: 'https://picsum.photos/seed/blogs/500/280', link: 'https://medium.com/@prathapa.belli' },
];

export const SKILLS_BACKEND: Skill[] = [
    // FIX: Replaced JSX with React.createElement to avoid parsing errors in .ts file.
    { name: 'Python', description: 'Primary Language', icon: React.createElement(PythonIcon) , imageUrl: 'https://picsum.photos/id/217/500/280' },
    // FIX: Replaced JSX with React.createElement to avoid parsing errors in .ts file.
    { name: 'FastAPI', description: 'Web Framework', icon: React.createElement(FastApiIcon), imageUrl: 'https://picsum.photos/id/238/500/280' },
    // FIX: Replaced JSX with React.createElement to avoid parsing errors in .ts file.
    { name: 'Java', description: 'Object-Oriented Language', icon: React.createElement(JavaIcon), imageUrl: 'https://picsum.photos/id/239/500/280' },
    // FIX: Replaced JSX with React.createElement to avoid parsing errors in .ts file.
    { name: 'PySpark', description: 'Data Processing', icon: React.createElement(PySparkIcon), imageUrl: 'https://picsum.photos/id/240/500/280' },
    { name: 'Pandas', description: 'Data Manipulation', icon: React.createElement(PandasIcon), imageUrl: 'https://picsum.photos/id/241/500/280' },
    { name: 'Temporal', description: 'Workflow Orchestration', icon: React.createElement(TemporalIcon), imageUrl: 'https://picsum.photos/id/242/500/280' },
    { name: 'Novu', description: 'Notification Service', icon: React.createElement(NovuIcon), imageUrl: 'https://picsum.photos/id/243/500/280' },
    { name: 'Vespa', description: 'Search Engine', icon: React.createElement(VespaIcon), imageUrl: 'https://picsum.photos/id/244/500/280' },
    ];

export const SKILLS_DATABASE: Skill[] = [
    // FIX: Replaced JSX with React.createElement to avoid parsing errors in .ts file.
    { name: 'PostgreSQL', description: 'Relational Database', icon: React.createElement(PostgreSqlIcon), imageUrl: 'https://picsum.photos/id/24/500/280' },
    { name: 'Postico', description: 'Database Tool', icon: React.createElement(PosticoIcon), imageUrl: 'https://picsum.photos/id/110/500/280' },
    { name: 'PgAnalyser', description: 'Database Analyzer', icon: React.createElement(PgAnalyserIcon), imageUrl: 'https://picsum.photos/id/247/500/280' },
    { name: 'Atlas', description: 'Database Schema Migration tool', icon: React.createElement(AtlasIcon), imageUrl: 'https://picsum.photos/id/248/500/280' },
    { name: 'Dbmate', description: 'Database Schema Migration tool', icon: React.createElement(DbmateIcon), imageUrl: 'https://picsum.photos/id/249/500/280' },
];

export const SKILLS_CLOUD: Skill[] = [
    // FIX: Replaced JSX with React.createElement to avoid parsing errors in .ts file.
    { name: 'S3 Storage', description: 'Object Storage', icon: React.createElement(S3Icon), imageUrl: 'https://picsum.photos/id/250/500/280' },
    { name: 'Cloudflare', description: 'CDN', icon: React.createElement(CloudflareIcon), imageUrl: 'https://picsum.photos/id/251/500/280' },
    { name: 'Google Cloud', description: 'Google Account Services', icon: React.createElement(S3Icon), imageUrl: 'https://picsum.photos/id/252/500/280' },
];

export const SKILLS_DEVOPS: Skill[] = [
    // FIX: Replaced JSX with React.createElement to avoid parsing errors in .ts file.
    { name: 'Kubernetes', description: 'Container Orchestration', icon: React.createElement(KubernetesIcon), imageUrl: 'https://picsum.photos/id/253/500/280' },
    // FIX: Replaced JSX with React.createElement to avoid parsing errors in .ts file.
    { name: 'Git Actions', description: 'CI/CD', icon: React.createElement(GitActionsIcon), imageUrl: 'https://picsum.photos/id/254/500/280' },
    // FIX: Replaced JSX with React.createElement to avoid parsing errors in .ts file.
    { name: 'Keycloak', description: 'Authentication', icon: React.createElement(KeycloakIcon), imageUrl: 'https://picsum.photos/id/255/500/280' },
    // FIX: Replaced JSX with React.createElement to avoid parsing errors in .ts file.
    { name: 'FFmpeg', description: 'Video Processing', icon: React.createElement(FfmpegIcon), imageUrl: 'https://picsum.photos/id/256/500/280' },
];

// Keep for backward compatibility
export const SKILLS_CLOUD_DEVOPS: Skill[] = [
    ...SKILLS_CLOUD,
    ...SKILLS_DEVOPS,
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: '314e Corporation',
    period: 'Present',
    points: [
      'Designed and developed APIs using FastAPI for Jeeves, a training platform for video and PDF content.',
      'Engineered video and data processing using Temporal, FFmpeg, and integrated AI models.',
      'Managed authentication with Keycloak and implemented user notifications via Novu.',
      'Built intelligent search capabilities using Vespa and maintained robust PostgreSQL databases.'
    ]
  },
  {
    role: 'Data Engineer - Healthcare Data Conversion',
    company: '314e Corporation',
    period: 'Previous',
    points: [
      'Transformed HL7 V2 healthcare data to FHIR and CCD formats using PySpark and data lakes.',
      'Created and optimized data workflows using XML/XSLT for clinical documentation and reporting.',
      'Ensured interoperability of healthcare data through robust ETL pipelines.'
    ]
  },
  {
    role: 'Integration Developer - Healthcare Interface',
    company: '314e Corporation',
    period: 'Previous',
    points: [
      'Developed solutions with Cloverleaf Interface Engine to transform and route medical data.',
      'Maintained compliance with FHIR and CCD standards, enabling seamless data exchange between systems.'
    ]
  },
   {
    role: 'Backend Developer - Hotelsoft Rate Optimizer',
    company: '314e Corporation',
    period: 'Previous',
    points: [
      'Developed pricing logic, data transformations, and backend services using Python and Pandas.',
      'Implemented FastAPI endpoints for processing and managing hotel rate data.'
    ]
  }
];

export const PROJECTS_DUMMY: Project[] = [
    { title: 'AI-Powered Voice Assistant', imageUrl: 'https://picsum.photos/seed/project1/500/280' },
    { title: 'Healthcare Data Pipeline', imageUrl: 'https://picsum.photos/seed/project2/500/280' },
    { title: 'Hotel Rate Optimizer API', imageUrl: 'https://picsum.photos/seed/project3/500/280' },
    { title: 'Real-time Reporting Engine', imageUrl: 'https://picsum.photos/seed/project4/500/280' },
    { title: 'Workforce Scheduler', imageUrl: 'https://picsum.photos/seed/project5/500/280' },
    { title: 'API Integration Platform', imageUrl: 'https://picsum.photos/seed/project6/500/280' },
];