export type EventCategory = "worship" | "ministry" | "community" | "youth"

export type EventItem = {
  id: string
  title: string
  date: Date
  startTime?: string
  endTime?: string
  location: string
  description: string
  category: EventCategory
  categoryLabel: string
  ministry: string
  heroImage: string
  cardImage: string
  featured?: boolean
}

export const eventCategories: { value: EventCategory; label: string }[] = [
  { value: "worship", label: "Worship" },
  { value: "ministry", label: "Ministry" },
  { value: "community", label: "Community" },
  { value: "youth", label: "Youth" },
]

export const events: EventItem[] = [
  {
    id: "night-of-worship",
    title: "Night of Worship",
    date: new Date(2026, 8, 6),
    startTime: "19:00",
    endTime: "21:00",
    location: "Main Sanctuary",
    description:
      "Join us for an immersive evening of praise and deep spiritual connection under warm lights, prayer, and live worship.",
    category: "worship",
    categoryLabel: "Worship",
    ministry: "Casa de Oracion",
    heroImage: "/images/hero-placeholder-2.svg",
    cardImage: "/images/hero-placeholder-2.svg",
    featured: true,
  },
  {
    id: "youth-conference",
    title: "Youth Conference",
    date: new Date(2026, 9, 2),
    startTime: "09:00",
    endTime: "15:00",
    location: "Family Life Center",
    description:
      "Empowering the next generation to lead with faith, courage, and divine wisdom through talks, worship, and breakout sessions.",
    category: "youth",
    categoryLabel: "Youth",
    ministry: "Generacion de Fuego",
    heroImage: "/images/hero-placeholder-1.svg",
    cardImage: "/images/hero-placeholder-1.svg",
  },
  {
    id: "leaders-prayer-breakfast",
    title: "Leaders Prayer Breakfast",
    date: new Date(2026, 8, 13),
    startTime: "08:30",
    endTime: "10:30",
    location: "Fellowship Hall",
    description:
      "A morning of intercession, encouragement, and vision casting for ministry leaders and volunteers across the church.",
    category: "ministry",
    categoryLabel: "Ministry",
    ministry: "Leadership Team",
    heroImage: "/images/hero-placeholder-3.svg",
    cardImage: "/images/hero-placeholder-3.svg",
  },
  {
    id: "family-outreach-day",
    title: "Family Outreach Day",
    date: new Date(2026, 8, 20),
    startTime: "10:00",
    endTime: "13:00",
    location: "Community Courtyard",
    description:
      "Bring the whole family for prayer, food, children activities, and practical support for our surrounding community.",
    category: "community",
    categoryLabel: "Community",
    ministry: "Compasion en Accion",
    heroImage: "/images/hero-placeholder-1.svg",
    cardImage: "/images/hero-placeholder-2.svg",
  },
  {
    id: "discipleship-workshop",
    title: "Discipleship Workshop",
    date: new Date(2026, 8, 27),
    startTime: "18:30",
    endTime: "20:30",
    location: "Upper Room",
    description:
      "A guided workshop focused on spiritual growth, biblical foundations, and practical steps for discipling others well.",
    category: "ministry",
    categoryLabel: "Ministry",
    ministry: "Formacion Biblica",
    heroImage: "/images/hero-placeholder-3.svg",
    cardImage: "/images/hero-placeholder-3.svg",
  },
]
