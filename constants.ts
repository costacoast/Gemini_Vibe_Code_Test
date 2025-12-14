import { Job, Education, Skill, SocialLink, Project } from './types';
import { Linkedin, Mail, Globe, MapPin, Download } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Costa Boudouvas",
  title: "Group Creative Director",
  tagline: "Impossible is just the boundary of our own creativity.",
  summary: "A classically trained computer scientist who has spent the past 15 years helping brands develop their online presence, drive sales, overcome challenges and use the right mix of innovation and storytelling to steal an unfair share of attention.",
  location: "Boston, MA",
  email: "hi@Boudouvas.com",
};

export const PROJECTS: Project[] = [
  {
    id: "GoogleCloud",
    title: "Google | Ask The Cloud",
    subtitle: "Using the power of Google Cloud to literally sell itself",
    description: "CTO’s have a lot of questions about the cloud. <br/>So we built a Google Cloud powered voice assistant with the smarts to answer questions about, well, itself. Back in 2015 Google Cloud was a distant third place challenger in the aggressive marketshare race as enterprises were moving to the cloud en masse. Audience research revealed a major opportunity: Enterprise CTOs had a lot of questions about Google's unique approach to cloud services. Questions they weren't ready to talk with a salesperson about directly. So we put those cloud tools to work, creating a custom voice agent trained to answer all the questions CTOs were too gunshy to talk with a sales rep about. Then we crafted a multi-step sales enablement flow to give them custom Google Home devices in exchange for entering the sales pipeline."
    mediaType: "image",
    mediaUrl: "https://player.vimeo.com/video/272581567?byline=0&portrait=0",
    awards: "",
    company: "Google"
  },
  {
    id: "google-sandbox",
    title: "Google Creative Sandbox",
    subtitle: "Showcasing the Future of Web Technology",
    description: "An interactive 3D playground built to demonstrate the capabilities of Chrome and the modern web. We partnered with digital artists to create procedural art pieces that users could manipulate in real-time using their mobile devices as controllers.",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    awards: ["Awwwards Site of the Month"],
    company: "Google"
  },
  {
    id: "natgeo-depths",
    title: "National Geographic: Into the Depths",
    subtitle: "Immersive Educational Storytelling",
    description: "A scrolling narrative experience that takes users from sea level to the bottom of the Mariana Trench. The project utilized parallax scrolling and spatial audio to create a sense of pressure and depth, educating users on the unique ecosystems found at each layer of the ocean.",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1600&auto=format&fit=crop",
    awards: ["Webby Honoree - Education"],
    company: "National Geographic"
  },
  {
    id: "jetblue-getaways",
    title: "JetBlue Getaways Generator",
    subtitle: "Dynamic Personalization Engine",
    description: "We built a recommendation engine that analyzed a user's social media footprint to suggest the perfect vacation destination. The system dynamically generated video trailers for their trip, pulling in live API data for weather, flight prices, and local events.",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
    company: "JetBlue"
  },
  {
    id: "royal-caribbean",
    title: "Royal Caribbean: SeaSeeker",
    subtitle: "AI-Powered Exploration",
    description: "Developed a prototype mask equipped with computer vision to help divers identify marine life in real-time. The accompanying web platform aggregated data from dives across the fleet, creating a living map of underwater biodiversity.",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1544551763-46a8723ba3f9?q=80&w=1600&auto=format&fit=crop",
    awards: ["Innovation in Travel Award"],
    company: "Royal Caribbean"
  },
  {
    id: "data-viz",
    title: "Global Connectivity Visualizer",
    subtitle: "Enterprise Data Art Installation",
    description: "A large-scale lobby installation for a tech giant visualizing real-time network traffic across the globe. The piece transformed raw server logs into a beautiful, flowing particle system that reacted to the volume and velocity of data packets.",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1600&auto=format&fit=crop",
    company: "Confidential"
  }
];

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
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];