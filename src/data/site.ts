import logo from "@/assets/MapsLogo.png";
import posterCetChampions from "@/assets/poster-cet-champions.jpg";
import posterIitMadras from "@/assets/poster-iit-madras.jpg";
import posterJeeAdv from "@/assets/poster-jee-adv-643.jpg";
import posterNeet581 from "@/assets/poster-neet-581.jpeg";
import posterNeetBio from "@/assets/poster-neet-bio-air1.jpeg";
import posterNest266 from "@/assets/poster-nest-266.jpeg";
import poster3Results from "@/assets/poster-3results.jpeg";

export const LOGO_URL = logo;

export const CONTACT = {
  phone: "+91 96996 74371",
  phoneHref: "tel:+919699674371",
  email: "namisir@mapseducare.com",
  location: "Nalasopara West, Palghar",
  address:
    "Gr. Shop no. 34, Om Plaza, Near Bus Depot, Opposite Railway Station, Nalasopara (W), 401203",
  branch:
    "2nd Floor, Shop no. 215, Hilton Arcade, Near Holy Family School, Evershine City, Vasai (E), 401209",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Results & Toppers", href: "#results" },
  { label: "Video Reviews", href: "#reviews" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export type Poster = {
  id: string;
  url: string;
  title: string;
  caption: string;
  exams: string[];
};

export const POSTERS: Poster[] = [
  {
    id: "iit-madras",
    url: posterIitMadras,
    title: "Pravin Salvi — AIR 643",
    caption: "Selected in IIT Madras (Aerospace Engineering), JEE Advanced 2026",
    exams: ["JEE Advanced"],
  },
  {
    id: "jee-adv",
    url: posterJeeAdv,
    title: "JEE Advanced 2026 — AIR 643",
    caption: "Pravin Salvi, first IIT selection from Nallasopara (W)",
    exams: ["JEE Advanced"],
  },
  {
    id: "cet-champions",
    url: posterCetChampions,
    title: "MHT-CET 2026 Shining Champions",
    caption: "15 toppers above 91 %ile, led by 99.30 %ile",
    exams: ["MHT-CET"],
  },
  {
    id: "cet-toppers",
    url: posterCetChampions,
    title: "MHT-CET 2026 Top 6",
    caption: "Pravin, Lakshya, Suraj, Aastha, Sakshi & Harsh",
    exams: ["MHT-CET"],
  },
  {
    id: "neet-bio",
    url: posterNeetBio,
    title: "Harsh Singh — AIR 1 in Biology",
    caption: "NEET 2026, perfect Biology score of 360/360",
    exams: ["NEET"],
  },
  {
    id: "neet-581",
    url: posterNeet581,
    title: "Harsh Singh — 581/720",
    caption: "NEET 2026 outstanding score with 360/360 in Biology",
    exams: ["NEET"],
  },
  {
    id: "nest-266",
    url: posterNest266,
    title: "Harsh Singh — NEST AIR 266",
    caption: "NEST 2026 All India Rank 266",
    exams: ["NEST"],
  },
  {
    id: "three-results",
    url: poster3Results,
    title: "3 Results, 1 Dream",
    caption: "JEE Mains 94.60 %ile · NEET 581/720 · NEST AIR 266",
    exams: ["JEE Main", "NEET", "NEST"],
  },
];

export const POSTER_FILTERS = ["All", "JEE Advanced", "JEE Main", "NEET", "MHT-CET", "NEST"];

export type Topper = {
  name: string;
  exam: string;
  score: string;
  detail: string;
  category: string;
};

export const SPOTLIGHT: Topper[] = [
  {
    name: "Subham Rai",
    exam: "NEET",
    score: "Selected",
    detail: "GMC Bhandara",
    category: "NEET",
  },
  {
    name: "Piyush Chaubey",
    exam: "JEE Main",
    score: "97.15 %ile",
    detail: "Engineering aspirant",
    category: "JEE Main",
  },
  {
    name: "Laxmi Tiwari",
    exam: "MHT-CET",
    score: "98.12 %ile",
    detail: "State merit performer",
    category: "MHT-CET",
  },
  {
    name: "Hrishikesh Dube",
    exam: "JEE Main",
    score: "97.76 %ile",
    detail: "Engineering aspirant",
    category: "JEE Main",
  },
];

export const TOPPERS: Topper[] = [
  ...SPOTLIGHT,
  { name: "Pravin Salvi", exam: "MHT-CET", score: "99.30 %ile", detail: "Scored in PCM", category: "MHT-CET" },
  { name: "Lakshya Mishra", exam: "MHT-CET", score: "99.26 %ile", detail: "Scored in PCB", category: "MHT-CET" },
  { name: "Suraj Yadav", exam: "MHT-CET", score: "98.77 %ile", detail: "Top 3 at MAPS", category: "MHT-CET" },
  { name: "Aastha Singh", exam: "MHT-CET", score: "97.91 %ile", detail: "Rank 4 at MAPS", category: "MHT-CET" },
  { name: "Sakshi Sav", exam: "MHT-CET", score: "97.38 %ile", detail: "Rank 5 at MAPS", category: "MHT-CET" },
  { name: "Harsh Jaiswal", exam: "MHT-CET", score: "97.29 %ile", detail: "Rank 6 at MAPS", category: "MHT-CET" },
  { name: "Harsh Singh", exam: "NEET", score: "581 / 720", detail: "AIR 1 in Biology (360/360)", category: "NEET" },
  { name: "Harsh Singh", exam: "JEE Main", score: "94.60 %ile", detail: "Triple selection: JEE, NEET, NEST", category: "JEE Main" },
  { name: "Umang Dedhia", exam: "HSC Science", score: "94%", detail: "Board topper", category: "HSC Science" },
  { name: "Kajal Mourya", exam: "HSC Science", score: "94%", detail: "Board topper", category: "HSC Science" },
  { name: "Jitendra Dubey", exam: "HSC Science", score: "92.66%", detail: "Board topper", category: "HSC Science" },
  { name: "Sneha Gupta", exam: "HSC Science", score: "91%", detail: "Board topper", category: "HSC Science" },
];

export const TOPPER_TABS = ["All", "JEE Main", "NEET", "MHT-CET", "HSC Science"];

export const COURSES = [
  {
    title: "11th + 12th JEE Integrated",
    tag: "Engineering",
    points: ["2 Years programme", "Morning batch", "Advanced problem solving"],
    syllabus: [
      "Physics: Mechanics, Electrodynamics, Modern Physics",
      "Chemistry: Physical, Organic, Inorganic (full JEE depth)",
      "Mathematics: Algebra, Calculus, Coordinate Geometry, Vectors",
      "Weekly JEE Main + Advanced pattern tests and rank analysis",
    ],
  },
  {
    title: "11th + 12th NEET Medical Integrated",
    tag: "Medical",
    points: ["5000+ practice questions", "Weekly tests", "NCERT line-by-line"],
    syllabus: [
      "Biology: Botany + Zoology with NCERT mastery drills",
      "Chemistry: NEET-focused Physical, Organic, Inorganic",
      "Physics: Concept-first numericals for medical aspirants",
      "Full-length NEET mocks with OMR practice",
    ],
  },
  {
    title: "MHT-CET Crash Course",
    tag: "State CET",
    points: ["3 months fast track", "20 mock tests", "PCM & PCB streams"],
    syllabus: [
      "Rapid revision of 11th & 12th state board syllabus",
      "Speed and accuracy drills for the CET pattern",
      "20 full mock tests with percentile prediction",
      "Doubt marathons before the exam window",
    ],
  },
  {
    title: "11th + 12th Commerce & CA Foundation",
    tag: "Commerce",
    points: ["Accounts & Economics", "OC and Maths/IT", "CA Foundation prep"],
    syllabus: [
      "Book Keeping & Accountancy with practical problem sets",
      "Economics and Organisation of Commerce",
      "Mathematics / Information Technology electives",
      "CA Foundation: Principles of Accounting, Law, Quantitative Aptitude",
    ],
  },
  {
    title: "Foundation Programme",
    tag: "5th – 10th",
    points: ["School + Olympiad", "Concept building", "Small batches"],
    syllabus: [
      "School syllabus reinforcement across Science and Maths",
      "Olympiad / NTSE style logical reasoning",
      "Early JEE & NEET foundation modules for 9th–10th",
      "Monthly parent-teacher progress reviews",
    ],
  },
];

export const FEATURES = [
  { title: "15+ Years Experience", desc: "A decade and a half of coaching Nallasopara's rankers." },
  { title: "Small Batch Size", desc: "25–40 students per batch so every doubt gets answered." },
  { title: "250+ Rankers", desc: "Consistent selections in JEE, NEET, MHT-CET and Boards." },
  { title: "Study Material", desc: "Comprehensive printed modules, DPPs and formula banks." },
  { title: "Weekly Mock Tests", desc: "Exam-pattern tests with detailed rank and error analysis." },
];

export const EVENTS = [
  {
    date: "Every Sunday",
    title: "Free Demo Class: 11th Science",
    desc: "Sit through a real JEE/NEET session with our senior faculty before you enrol.",
  },
  {
    date: "Next Month",
    title: "Career Guidance Seminar",
    desc: "Engineering vs Medical — choosing the right path with counsellors and alumni.",
  },
  {
    date: "Summer Batch",
    title: "Summer Crash Course Batches",
    desc: "Fast-track MHT-CET and board revision batches with 20 mock tests.",
  },
];

export const REVIEWS = [
  {
    name: "Pravin Salvi",
    role: "AIR 643 · IIT Madras",
    quote:
      "MAPS made IIT feel reachable. The daily practice problems and the faculty's patience changed how I study.",
  },
  {
    name: "Harsh Singh",
    role: "NEET 581/720 · NEST AIR 266",
    quote:
      "Three entrance exams, one place. The biology sessions at MAPS are the reason I scored a perfect 360.",
  },
  {
    name: "Aastha Singh",
    role: "MHT-CET 97.91 %ile",
    quote:
      "Small batches meant my doubts never piled up. The weekly tests kept me honest all year.",
  },
];
