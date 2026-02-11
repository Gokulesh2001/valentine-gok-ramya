export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: 'heart' | 'message' | 'search' | 'ring' | 'coffee' | 'home' | 'temple';
  image?: string;
}

export const STORY_DATA: TimelineEvent[] = [
  {
    id: "destiny",
    date: "The Beginning",
    title: "Destiny Calls",
    description: "It started when your parents shortlisted me on Matrimony. I saw your profile and just knew I had to reach out.",
    icon: "search"
  },
  {
    id: "missed-conn",
    date: "December 25, 2024",
    title: "The Missed Connection",
    description: "I tried Instagram, couldn't find you. I went to LinkedIn and realized... you had already messaged me for a referral! How did I miss that?",
    icon: "message"
  },
  {
    id: "connecting",
    date: "Late December",
    title: "Connecting",
    description: "We finally moved to Instagram. The conversations flowed, the questions were asked, and a spark was lit.",
    icon: "message"
  },
  {
    id: "proposal-1",
    date: "December 28, 2024",
    title: "The Proposal",
    description: "I couldn't wait any longer. I proposed. And the best part? You said the same feeling was in your heart.",
    icon: "ring"
  },
  {
    id: "lara-cafe",
    date: "January 3, 2025",
    title: "First Meeting",
    description: "Lara Cafe. The first time seeing you in person. A memory etched forever.",
    icon: "coffee",
    image: "lara.jpg"
  },
  {
    id: "home-visit",
    date: "January 25, 2025",
    title: "Meeting the Family",
    description: "My family and I visited your home for the Ponnu Paakura function. Things were getting real.",
    icon: "home",
    image: "home.jpg"
  },
  {
    id: "temple",
    date: "February 8, 2025",
    title: "Divine Blessings",
    description: "We visited the temple together. Another step closer to forever.",
    icon: "temple",
    image: "temple.jpg"
  }
];