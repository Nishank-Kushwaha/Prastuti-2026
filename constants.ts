import { Event, TeamMember, Speaker } from "./types";
export const FEST_DATES = "March 21-22, 2026";
export const FEST_NAME = "Prastuti '26";

export const EVENTS: Event[] = [
  {
    id: "1",
    title: "Codigo",
    category: "Competition",
    description:
      "Codigo is a competitive programming event involving the application of various data structures and algorithms.",
    date: "March 21, 2026",
    time: "10:00 AM",
    image: "/assets/events/codigo.webp",
    teamSize: 0,
  },
  {
    id: "2",
    title: "Hackoverflow",
    category: "Competition",
    description:
      "With this event, we intend to give paricipants a kickstart in learning web",
    date: "March 21, 2026",
    time: "2:00 PM",
    image: "/assets/events/hackoverflow.webp",
    teamSize: 4,
  },
  {
    id: "3",
    title: "Consilium",
    category: "Competition",
    description:
      "Hands-on hardware implementation. It aims to introduce young minds to the world of electronic design, concepts and real world application.",
    date: "March 21, 2026",
    time: "11:00 AM",
    image: "/assets/events/consilium.webp",
    teamSize: 4,
  },
  {
    id: "4",
    title: "Student Alumni Interaction",
    category: "Guest Lecture",
    description:
      "Forever united by our alma mater, bound by memories, and connected by purpose.",
    date: "February 2, 2026",
    time: "2:30 PM",
    image: "/assets/events/saic.webp",
    teamSize: 0,
  },
  {
    id: "5",
    title: "Codigo - CP Workshop 1",
    category: "Workshop",
    description: "Brushing up the Basics",
    date: "February 2, 2026",
    time: "6:30 PM",
    image: "/assets/events/codigo-workshop.webp",
    teamSize: 0,
  },
  {
    id: "6",
    title: "Hackoverflow Workshop - Unlock phase 1",
    category: "Workshop",
    description:
      "Get the kickstart and learn the magic of web development - unlocking phase 1",
    date: "February 6, 2026",
    time: "6:30 PM",
    image: "/assets/events/web1.jpg",
    teamSize: 0,
  },
];

export const TEAM_CORE: TeamMember[] = [
  {
    id: "1",
    name: "Abhay Srivastava",
    role: "Consilium Head",
    image: "/assets/Team26/Abhay.jpeg",
  },
  {
    id: "2",
    name: "Bhakti Naik",
    role: "Social Media and Content Head",
    image: "/assets/Team26/Bhakti.jpg",
  },
  {
    id: "3",
    name: "Devesh Kumar",
    role: "Hackoverflow Head",
    image: "/assets/Team26/Devesh.jpeg",
  },
  {
    id: "4",
    name: "Dhruv Gupta",
    role: "Publicity Head",
    image: "/assets/Team26/Dhruv.jpg",
  },
  {
    id: "5",
    name: "Madhur Gupta",
    role: "PR Head",
    image: "/assets/Team26/Madhur.jpg",
  },
];

export const TEAM_HEAD: TeamMember[] = [
  {
    id: "1",
    name: "Chhavi Jhari",
    role: "Events and Ops Head",
    image: "/assets/Team26/chhavi.jpeg",
  },
  {
    id: "2",
    name: "Akshat Srivastava",
    role: "Events and Ops Head",
    image: "/assets/Team26/akshat.jpeg",
  },
  {
    id: "3",
    name: "Prakhar Singh",
    role: "PR Head",
    image: "/assets/Team26/Prakhar.jpeg",
  },
  {
    id: "4",
    name: "Princy",
    role: "Design Head",
    image: "/assets/Team26/Princy.jpg",
  },
  {
    id: "5",
    name: "Sahil Parwal",
    role: "Marketing Head",
    image: "/assets/Team26/Sahil.png",
  },
];

export const TEAM_VERTICAL: TeamMember[] = [
  {
    id: "1",
    name: "Akshit Goel",
    role: "Hackoverflow Head",
    image: "/assets/Team26/akshit.jpg",
  },
  {
    id: "2",
    name: "Anannye Goyal",
    role: "Consilium Head",
    image: "/assets/Team26/Anannye.jpg",
  },
  {
    id: "3",
    name: "Divyanshu Dutta",
    role: "Codigo Head",
    image: "/assets/Team26/Divyanshu.jpg",
  },
  {
    id: "4",
    name: "Manoj",
    role: "Codigo Head",
    image: "/assets/Team26/Manoj.jpg",
  },
];

export const Speakers: Speaker[] = [
  {
    id: "1",
    name: "Mr. Chetan Solanki",
    role: "Guest Speaker",
    image: "/assets/speakers/chetan.jpg",
    about:
      "Ex-Professor at IIT Bombay, Married, Left home for 11 Years, On Energy Swaraj Yatra, Living in Bus, Climate Change Awareness & Correction, Founder of Energy Swaraj Foundation, Search “Solar Man of India” or Solar Gandhi.",
  },
  {
    id: "2",
    name: "Dr. Manish Gupta",
    role: "Guest Speaker",
    image: "/assets/speakers/manish.avif",
    about:
      "Dr. Manish Gupta is a Senior Director at Google DeepMind, leading research teams in AI across India and Japan.IBM was awarded a National Medal of Technology and Innovation for Blue Gene by US President Barack Obama in 2009. ",
  },
  {
    id: "3",
    name: "Mr. Rajiv Dogra",
    role: "Guest Speaker",
    image: "/assets/speakers/rajiv.jpg",
    about:
      "Former Ambassador, Expert in International affairs, Investments and country assessment, Speaker on International and Strategic Affairs besides multinational investments",
  },
];
