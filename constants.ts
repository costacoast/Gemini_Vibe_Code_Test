import { Job, Education, Skill, SocialLink } from './types';
import { Linkedin, Mail, Globe, MapPin, Download } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Costa Boudouvas",
  title: "Group Creative Director",
  tagline: "Impossible is the boundary of our own creativity.",
  summary: "A classically trained computer scientist who has spent the past 15 years helping brands develop their online presence, drive sales, and use technical innovations to steal an unfair share of attention. Specializing in ideas at the intersection of creativity and innovation.",
  location: "Boston, MA",
  email: "Costa@Boudouvas.com",
  website: "www.boudouvas.com"
};

export const EXPERIENCE: Job[] = [
  {
    id: "mullenlowe",
    company: "MullenLowe Inc.",
    role: "Associate Creative Director",
    period: "2012 – Present",
    description: "Clients included: Acura, Google, JetBlue, National Geographic, American Greetings, Royal Caribbean.",
    highlights: [
      "Led cross-functional creative teams to concept and deliver innovative marketing solutions ranging from websites and broadcast to physical installations.",
      "Created multiple award-winning immersive websites for clients including Google, National Geographic, and American Greetings.",
      "Created prototypes to demonstrate business applications for emerging technologies including 3D printing, Node.js, Arduino hacking, and voice-driven interfaces.",
      "Led development efforts for multiple enterprise .NET and Ruby on Rails websites.",
      "Key contributor on successful new business pitches that won business from clients including Acura, Google, Royal Caribbean, Hyatt, and many others.",
      "Responsible for hiring and training digital staff to launch the Los Angeles office.",
      "Initiated the MullenLowe co-op program, and mentored junior technology staff."
    ]
  },
  {
    id: "zenqms",
    company: "ZenQMS",
    role: "Technical Advisor",
    period: "2010 – Present",
    description: "Document Management Startup.",
    highlights: [
      "Designed technical architecture for a secure, cloud-based SaaS application to manage sensitive enterprise documents and quality control data.",
      "Developed responsive company website with full ExpressionEngine CMS backend.",
      "Designed and tested user interface components using Axure and InVision prototypes."
    ]
  },
  {
    id: "viridian",
    company: "Viridian Spark",
    role: "Solutions Architect",
    period: "2010 – 2012",
    description: "Clients included: Maybelline, Briggs & Stratton, Cushman & Wakefield.",
    highlights: [
      "Built interactive HTML prototypes for product and usability testing.",
      "Managed client website implementations from sales through delivery.",
      "Created and led user experience design and usability testing department.",
      "Designed user experience and technical architecture for global enterprise websites including Maybelline.com and CushmanWakefield.com.",
      "Lead developer for several large-scale .NET and PHP website redesign engagements."
    ]
  },
  {
    id: "bigbad",
    company: "BigBad Inc.",
    role: "Web Developer",
    period: "2007 – 2010",
    description: "Clients included: Harvard, MIT, Lahey Clinic, UMass Boston, Beth Israel Deaconess Medical Center.",
    highlights: [
      "Lead developer for several enterprise website redesign initiatives specializing in healthcare and higher education institutions.",
      "Designed architecture and requirements specifications for web applications.",
      "Led cross-functional project teams consisting of local and offshore staff.",
      "Designed and developed dynamic social components for CMS integration."
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    school: "Northeastern University",
    degree: "Bachelor of Science in Information Science",
    year: "2004 – 2009",
    location: "Boston, MA"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Leadership",
    items: ["Creative Direction", "Team Mentorship", "Technical Architecture", "Business Development", "Cross-functional Leadership"]
  },
  {
    category: "Technology",
    items: ["Node.js", ".NET", "Ruby on Rails", "PHP", "React", "Arduino/Hardware", "SaaS Architecture"]
  },
  {
    category: "Design & UX",
    items: ["Immersive Web Experiences", "Prototyping", "User Interface Design", "Physical Installations", "Interaction Design"]
  }
];

export const NAV_LINKS = [
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];