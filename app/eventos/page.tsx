import { EventosExperience } from "@/app/components/EventosExperience"
import {
  eventCategories,
  events as fallbackEvents,
  type EventCategory,
  type EventItem,
} from "@/lib/events"
import type { SanityEvent } from "@/sanity/lib/queries"
import { getEvents } from "@/sanity/lib/queries"

const categoryLabels = new Map<EventCategory, string>(
  eventCategories.map((category) => [category.value, category.label])
)

function isEventCategory(category: string): category is EventCategory {
  return eventCategories.some((item) => item.value === category)
}

export default async function EventosPage() {
  let sanityEvents: SanityEvent[] = []

  try {
    sanityEvents = await getEvents()
  } catch {
    sanityEvents = []
  }

  const events: EventItem[] = sanityEvents
    .filter((event) => event.heroImage && isEventCategory(event.category))
    .map((event) => {
      const category = event.category as EventCategory

      return {
        id: event.slug ?? event._id,
        title: event.title,
        date: new Date(`${event.date}T00:00:00`),
        startTime: event.startTime,
        endTime: event.endTime,
        location: event.location,
        description: event.description,
        category,
        categoryLabel: categoryLabels.get(category) ?? category,
        ministry: event.ministry,
        heroImage: event.heroImage ?? "/images/hero-placeholder-2.svg",
        cardImage: event.cardImage ?? event.heroImage ?? "/images/hero-placeholder-2.svg",
        featured: event.featured,
      }
    })

  return <EventosExperience events={events.length > 0 ? events : fallbackEvents} />
}
