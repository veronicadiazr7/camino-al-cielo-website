import {groq} from "next-sanity"

import {client} from "./client"

export type SanityEvent = {
  _id: string
  title: string
  slug?: string
  date: string
  startTime?: string
  endTime?: string
  location: string
  description: string
  category: string
  ministry: string
  heroImage?: string
  cardImage?: string
  featured?: boolean
}

const eventsQuery = groq`
  *[_type == "event" && coalesce(isActive, true) == true] | order(date asc, startTime asc) {
    _id,
    title,
    "slug": slug.current,
    date,
    startTime,
    endTime,
    location,
    description,
    category,
    ministry,
    "heroImage": heroImage.asset->url,
    "cardImage": coalesce(cardImage.asset->url, heroImage.asset->url),
    featured
  }
`

export async function getEvents() {
  return client.fetch<SanityEvent[]>(eventsQuery, {}, {next: {revalidate: 60}})
}
