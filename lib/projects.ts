export interface ProjectStat {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  tag: string;
  meta: string;
  summary: string;
  description: string;
  challenge: string;
  outcome: string;
  problem: string;
  stack: string[];
  stats: ProjectStat[];
  metrics: { label: string; value: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ocean-crew",
    name: "OceanCrew",
    category: "Maritime Logistics Platform",
    subtitle: "Custom Portal & Fleet Management",
    tag: "Maritime Logistics Platform",
    meta: "Custom Portal & Fleet Management",
    summary: "Seafarer certification management, shift scheduling, and maritime compliance automation.",
    description:
      "A comprehensive maritime workforce management platform created for international shipping agencies operating out of Colombo and Galle. OceanCrew automates crew rotation, compliance tracking, and document verification.",
    challenge:
      "Maritime agencies relied on disjointed spreadsheets and manual messaging to track STCW certification expiration dates and port call schedules, causing delayed embarkations.",
    problem:
      "Maritime agencies relied on disjointed spreadsheets and manual messaging to track STCW certification expiration dates and port call schedules, causing delayed embarkations.",
    outcome:
      "Reduced crew deployment prep time from 4 days to under 4 hours with automated compliance alerts and instant document generation.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    stats: [
      { value: 90, prefix: "-", suffix: "%", label: "Deployment time" },
      { value: 2400, prefix: "", suffix: "+", label: "Active seafarers" },
      { value: 99.9, decimals: 1, suffix: "%", label: "Compliance rate" },
    ],
    metrics: [
      { label: "Deployment time", value: "-90%" },
      { label: "Active seafarers", value: "2,400+" },
      { label: "Compliance rate", value: "99.9%" },
    ],
    featured: true,
  },
  {
    id: "math-spark",
    name: "MathSpark",
    category: "Interactive EdTech Suite",
    subtitle: "Learning & Analytics Portal",
    tag: "Interactive EdTech Suite",
    meta: "Learning & Analytics Portal",
    summary: "Gamified math practice platform with real-time analytics for students and tutors.",
    description:
      "An intuitive learning management and interactive assessment tool designed for STEM academies. Features live problem-solving canvas, automated grading, and parent progress updates.",
    challenge:
      "Students struggled with passive video lessons while tuition centers spent over 15 hours weekly manually grading paper assessments and recording attendance.",
    problem:
      "Students struggled with passive video lessons while tuition centers spent over 15 hours weekly manually grading paper assessments and recording attendance.",
    outcome:
      "Boosted student practice engagement by 310% and saved educators 12+ hours per week with instant digital canvas grading and automated progress reports.",
    stack: ["Next.js", "React", "Express", "MongoDB", "PayHere"],
    stats: [
      { value: 310, prefix: "+", suffix: "%", label: "Practice hours" },
      { value: 10000, prefix: "", suffix: "+", label: "Active students" },
      { value: 12, prefix: "", suffix: " hrs/wk", label: "Grading time saved" },
    ],
    metrics: [
      { label: "Weekly practice hours", value: "+310%" },
      { label: "Active students", value: "10,000+" },
      { label: "Grading time saved", value: "12 hrs/wk" },
    ],
    featured: true,
  },
  {
    id: "medi-core",
    name: "MediCore",
    category: "Healthcare Operations System",
    subtitle: "EHR & Appointment Engine",
    tag: "Healthcare Operations System",
    meta: "EHR & Appointment Engine",
    summary: "Patient record synchronization, OPD queuing system, and SMS notification dispatch.",
    description:
      "A secure, lightweight electronic health records (EHR) and clinic management system tailored for private hospitals and multi-specialty clinics in Sri Lanka.",
    challenge:
      "Overcrowded OPD waiting areas and double-booked specialist consultations due to paper-based token queues and decentralized medical records.",
    problem:
      "Overcrowded OPD waiting areas and double-booked specialist consultations due to paper-based token queues and decentralized medical records.",
    outcome:
      "Streamlined patient flow with automated SMS queue tokens and unified instant EHR access across doctor consultation rooms, cutting wait times by 45 minutes.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    stats: [
      { value: 45, prefix: "-", suffix: " min", label: "Patient wait time" },
      { value: 1200, prefix: "", suffix: "+", label: "Daily appointments" },
      { value: 3.2, decimals: 1, suffix: "%", label: "No-show rate" },
    ],
    metrics: [
      { label: "Patient wait time", value: "-45 min" },
      { label: "Daily appointments", value: "1,200+" },
      { label: "No-show rate", value: "3.2%" },
    ],
    featured: true,
  },
];
