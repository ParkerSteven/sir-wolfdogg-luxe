import sharpswood from "@/assets/book-sharpswood.jpg";
import virtues from "@/assets/rs=w_1280.webp";
import gutsy from "@/assets/book-gutsy.jpg";
import caveman from "@/assets/book-caveman.jpg";
import cops from "@/assets/book-cops.jpg";
import type { Book } from "./cart";

export const BOOKS: Book[] = [
  {
    id: "sharpswood-plantation",
    title: "Sharpswood Plantation",
    subtitle: "A Novel",
    price: 24.99,
    cover: sharpswood,
    category: "Historical Fiction",
    description:
      "A sweeping historical novel set against the backdrop of the antebellum South, exploring legacy, freedom, and the indelible bonds of family.",
  },
  {
    id: "39-virtues-of-integrity",
    title: "39 Virtues of Integrity",
    subtitle: "A Premium Self-Help Guide",
    price: 25.0,
    cover: virtues,
    category: "Self Development",
    description:
      "Thirty-nine timeless principles designed to forge unshakeable character and lead a life rooted in honor, discipline, and purpose.",
  },
  {
    id: "gutsy-leadership",
    title: "Gutsy Leadership",
    subtitle: "Lead Bold. Lead True.",
    price: 22.0,
    cover: gutsy,
    category: "Leadership",
    description:
      "A bold, no-nonsense playbook for executives, entrepreneurs, and emerging leaders who dare to lead with conviction.",
  },
  {
    id: "caveman",
    title: "Caveman",
    price: 19.99,
    cover: caveman,
    category: "Fiction",
    description: "A primal journey through the dawn of man — courage, instinct, and the relentless pursuit of survival.",
  },
  {
    id: "cops-and-robbers",
    title: "Cops & Robbers",
    price: 21.5,
    cover: cops,
    category: "Thriller",
    description: "A gripping crime thriller pulled from the streets — where the line between the badge and the bullet blurs.",
  },
];

export const getBook = (id: string) => BOOKS.find((b) => b.id === id);

export const POSTS = [
  {
    slug: "the-power-of-integrity",
    title: "The Power of Integrity in Modern Leadership",
    excerpt: "Why character still matters in a world that rewards shortcuts.",
    date: "April 12, 2026",
    image: virtues,
  },
  {
    slug: "writing-historical-fiction",
    title: "Behind Sharpswood: Writing Historical Fiction",
    excerpt: "Researching the antebellum South and bringing forgotten voices forward.",
    date: "March 28, 2026",
    image: sharpswood,
  },
  {
    slug: "gutsy-decisions",
    title: "Gutsy Decisions That Define a Career",
    excerpt: "The three pivotal moments every leader will face — and how to meet them.",
    date: "March 02, 2026",
    image: gutsy,
  },
  {
    slug: "the-power-of-integrity",
    title: "The Power of Integrity in Modern Leadership",
    excerpt: "Why character still matters in a world that rewards shortcuts.",
    date: "April 12, 2026",
    image: virtues,
  },
  {
    slug: "writing-historical-fiction",
    title: "Behind Sharpswood: Writing Historical Fiction",
    excerpt: "Researching the antebellum South and bringing forgotten voices forward.",
    date: "March 28, 2026",
    image: sharpswood,
  },
  {
    slug: "gutsy-decisions",
    title: "Gutsy Decisions That Define a Career",
    excerpt: "The three pivotal moments every leader will face — and how to meet them.",
    date: "March 02, 2026",
    image: gutsy,
  },
];
