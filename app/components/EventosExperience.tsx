"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { format, isSameDay } from "date-fns"
import {
  CalendarDays,
  Clock3,
  Download,
  MapPin,
  Search,
  Sparkles,
  Star,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar, CalendarDayButton } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { buildICSDataUri } from "@/lib/generateICSLink"
import { generateGoogleCalendarLink } from "@/lib/generateGoogleCalendarLink"
import { eventCategories, events, type EventCategory, type EventItem } from "@/lib/events"

const heroImage = "/images/hero-placeholder-2.svg"

function formatEventTime(event: EventItem) {
  if (!event.startTime && !event.endTime) return "Horario por anunciar"
  if (event.startTime && event.endTime) return `${event.startTime} - ${event.endTime}`
  return event.startTime ?? event.endTime ?? "Horario por anunciar"
}

function getEventsForDate(date: Date | undefined, items: EventItem[]) {
  if (!date) return []
  return items.filter((event) => isSameDay(event.date, date))
}

export function EventosExperience() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(events[0]?.date)
  const [activeCategory, setActiveCategory] = useState<EventCategory | "all">("all")
  const [search, setSearch] = useState("")
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null)

  const normalizedSearch = search.trim().toLowerCase()

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesCategory =
        activeCategory === "all" ? true : event.category === activeCategory
      const matchesSearch =
        normalizedSearch.length === 0
          ? true
          : [
              event.title,
              event.description,
              event.location,
              event.ministry,
              event.categoryLabel,
            ]
              .some((value) => value.toLowerCase().includes(normalizedSearch))

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, normalizedSearch])

  const eventDates = useMemo(() => filteredEvents.map((event) => event.date), [filteredEvents])

  const selectedEvents = useMemo(
    () => getEventsForDate(selectedDate, filteredEvents),
    [filteredEvents, selectedDate]
  )

  const featuredEvent = filteredEvents.find((event) => event.featured) ?? filteredEvents[0] ?? null

  const upcomingEvents = filteredEvents.slice(0, 4)

  useEffect(() => {
    if (activeEvent && !filteredEvents.some((event) => event.id === activeEvent.id)) {
      setActiveEvent(null)
    }
  }, [activeEvent, filteredEvents])

  const onDaySelect = (date: Date | undefined) => {
    setSelectedDate(date)

    const nextEvents = getEventsForDate(date, filteredEvents)
    if (nextEvents.length > 0) {
      setActiveEvent(nextEvents[0])
    }
  }

  const StyledDayButton = (props: React.ComponentProps<typeof CalendarDayButton>) => {
    const dayEvents = filteredEvents.filter((event) => isSameDay(event.date, props.day.date))

    return (
      <button
        {...props}
        type="button"
        onClick={() => onDaySelect(props.day.date)}
        className={cn(
          "relative flex size-full min-h-12 items-center justify-center rounded-2xl border text-sm transition",
          props.modifiers.selected
            ? "border-[#d8b46a] bg-[#d8b46a] font-semibold text-[#221807]"
            : "border-transparent bg-transparent text-white hover:border-white/10 hover:bg-white/[0.06]",
          props.modifiers.outside && "text-white/[0.25]",
          dayEvents.length > 0 && !props.modifiers.selected && "bg-white/[0.03]"
        )}
      >
        {format(props.day.date, "d")}
      </button>
    )
  }

  return (
    <section className="relative overflow-hidden bg-[#111111] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(203,164,92,0.18),_transparent_28%),radial-gradient(circle_at_right,_rgba(255,255,255,0.06),_transparent_26%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,_#f0c36b_1.2px,_transparent_1.2px)] [background-size:32px_32px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#33266d] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
            <div className="relative min-h-[340px]">
              {/* <Image
                src={featuredEvent?.heroImage ?? heroImage}
                alt={featuredEvent?.title ?? "Eventos Camino al Cielo"}
                fill
                priority
                className="object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#111111]" />

              <div className="relative flex min-h-[340px] flex-col justify-end gap-5 p-6 sm:p-8">
                <div className="space-y-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#d8b46a]">
                   Eventos
                  </p>
                  <div className="max-w-xl space-y-3">
                    <h1 className="max-w-md text-4xl font-semibold leading-none sm:text-5xl">
                      Se parte de nuestras actividades.
                    </h1>
                    <p className="max-w-lg text-sm text-white/70 sm:text-base">
                      Explora nuestro calendario, descubre reuniones importantes y abre cada fecha
                      para ver todos los detalles del evento.
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-black/[0.45] p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.05] px-3 py-3">
                    <Search className="size-4 text-white/50" />
                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search events..."
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveCategory("all")}
                      className={cn(
                        "rounded-full px-4 py-2 text-xs font-medium transition",
                        activeCategory === "all"
                          ? "bg-[#d8b46a] text-[#231a08]"
                          : "bg-white/[0.08] text-white/70 hover:bg-white/[0.12]"
                      )}
                    >
                     Todos los eventos
                    </button>

                    {eventCategories.map((category) => (
                      <button
                        key={category.value}
                        type="button"
                        onClick={() => setActiveCategory(category.value)}
                        className={cn(
                          "rounded-full px-4 py-2 text-xs font-medium transition",
                          activeCategory === category.value
                            ? "bg-[#d8b46a] text-[#231a08]"
                            : "bg-white/[0.08] text-white/70 hover:bg-white/[0.12]"
                        )}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#c9a85f]/20 bg-[#33266de2] p-4 shadow-[0_30px_70px_rgba(0,0,0,0.35)] sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#d8b46a]">
                  Calendario
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Descubre nuestros próximos eventos</h2>
              </div>
              <CalendarDays className="size-5 text-[#d8b46a]" />
            </div>

            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onDaySelect}
              modifiers={{ hasEvent: eventDates }}
              className="w-full rounded-[1.5rem] bg-[#111111] p-4"
              classNames={{
                root: "w-full",
                months: "flex flex-col",
                month: "w-full space-y-5",
                month_caption: "relative flex h-10 items-center justify-center",
                caption_label: "text-lg font-semibold text-white",
                nav: "relative inset-x-0 top-0 flex items-center justify-between",
                button_previous:
                  "h-9 w-9 rounded-full border border-white/10 bg-white/[0.05] text-white hover:bg-white/10",
                button_next:
                  "h-9 w-9 rounded-full border border-white/10 bg-white/[0.05] text-white hover:bg-white/10",
                weekdays: "grid grid-cols-7 gap-2",
                weekday:
                  "flex h-9 items-center justify-center text-[0.7rem] font-medium uppercase text-white/45",
                week: "mt-2 grid grid-cols-7 gap-2",
                day: "aspect-square",
                today: "bg-transparent text-white",
                outside: "text-white/20",
              }}
              modifiersClassNames={{
                hasEvent:
                  "after:absolute after:bottom-2 after:left-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rounded-full after:bg-[#d8b46a]",
              }}
              components={{ DayButton: StyledDayButton }}
            />

            <div className="mt-5 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#d8b46a]">
                Fecha seleccionada
              </p>
              {selectedDate ? (
                <div className="mt-3 space-y-3">
                  <h3 className="text-lg font-semibold">
                    {format(selectedDate, "MMMM d, yyyy")}
                  </h3>
                  {selectedEvents.length > 0 ? (
                    selectedEvents.map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => setActiveEvent(event)}
                        className="flex w-full items-start justify-between gap-4 rounded-2xl border border-white/8 bg-black/30 px-4 py-3 text-left transition hover:border-[#d8b46a]/50 hover:bg-black/[0.45]"
                      >
                        <div>
                          <p className="text-sm font-semibold">{event.title}</p>
                          <p className="mt-1 text-xs text-white/60">{formatEventTime(event)}</p>
                        </div>
                        <Sparkles className="mt-0.5 size-4 text-[#d8b46a]" />
                      </button>
                    ))
                  ) : (
                    <p className="text-sm text-white/[0.55]">No events match the current filters.</p>
                  )}
                </div>
              ) : (
                <p className="mt-3 text-sm text-white/[0.55]">Select a day to see its event details.</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#d8b46a]">
                Upcoming Events
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Important upcoming gatherings</h2>
            </div>
            <p className="hidden text-sm text-white/[0.55] md:block">
              {filteredEvents.length} events currently visible
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                className="overflow-hidden rounded-[2rem] border border-white/8 bg-[#1b1b1b] shadow-[0_16px_45px_rgba(0,0,0,0.28)]"
              >
                <div className="grid md:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[240px]">
                    <Image
                      src={event.cardImage}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/[0.45] to-transparent" />
                  </div>

                  <div className="relative flex flex-col gap-4 p-5">
                    {event.featured ? (
                      <div className="absolute right-5 top-5 rounded-full bg-[#d8b46a]/15 p-2 text-[#d8b46a]">
                        <Star className="size-4 fill-current" />
                      </div>
                    ) : null}

                    <div>
                      <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[#9f8d63]">
                        {format(event.date, "MMM d")} • {formatEventTime(event)}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight">{event.title}</h3>
                    </div>

                    <p className="text-sm leading-7 text-white/[0.68]">{event.description}</p>

                    <div className="flex flex-wrap gap-2 text-xs text-white/[0.55]">
                      <span className="rounded-full border border-white/10 px-3 py-1.5">
                        {event.categoryLabel}
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1.5">
                        {event.ministry}
                      </span>
                    </div>

                    <Button
                      type="button"
                      onClick={() => {
                        setSelectedDate(event.date)
                        setActiveEvent(event)
                      }}
                      className="mt-auto rounded-full bg-[#c9a85f] px-5 text-[#201704] hover:bg-[#dfbf7c]"
                    >
                      Más Detalles
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {activeEvent ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center">
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#191919] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <button
              type="button"
              onClick={() => setActiveEvent(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/30 p-2 text-white/70 transition hover:text-white"
              aria-label="Close event details"
            >
              <X className="size-4" />
            </button>

            <div className="relative h-56">
              <Image
                src={activeEvent.heroImage}
                alt={activeEvent.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-black/[0.35] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#d8b46a]">
                  {activeEvent.categoryLabel}
                </p>
                <h3 className="mt-2 text-3xl font-semibold">{activeEvent.title}</h3>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <p className="text-sm leading-7 text-white/70">{activeEvent.description}</p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-black/[0.25] p-4">
                  <p className="flex items-center gap-2 text-sm font-medium text-white">
                    <Clock3 className="size-4 text-[#d8b46a]" />
                    {formatEventTime(activeEvent)}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">
                    {format(activeEvent.date, "EEEE, MMMM d, yyyy")}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/[0.25] p-4">
                  <p className="flex items-center gap-2 text-sm font-medium text-white">
                    <MapPin className="size-4 text-[#d8b46a]" />
                    {activeEvent.location}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">
                    {activeEvent.ministry}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={generateGoogleCalendarLink(activeEvent)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#c9a85f] px-5 text-sm font-medium text-[#221807] transition hover:bg-[#dfbf7c]"
                >
                 Añade a tu calendario.
                </a>
                <a
                  href={buildICSDataUri(activeEvent)}
                  download={`${activeEvent.id}.ics`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <Download className="size-4" />
                  Download .ics
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
