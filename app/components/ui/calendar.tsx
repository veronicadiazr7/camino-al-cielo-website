"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { events, type EventItem } from "@/lib/events"
import { generateGoogleCalendarLink } from "@/lib/generateGoogleCalendarLink"

export default function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const eventDates = events.map((e) => e.date)

  const selectedEvents = events.filter(
    (e) =>
      selectedDate &&
      e.date.getFullYear() === selectedDate.getFullYear() &&
      e.date.getMonth() === selectedDate.getMonth() &&
      e.date.getDate() === selectedDate.getDate()
  )

  return (
    <div className="bg-[#0b0f19] text-white p-6 rounded-2xl w-fit">
        <Calendar
  mode="single"
  selected={selectedDate}
  onSelect={setSelectedDate}
  modifiers={{
    hasEvent: eventDates,
  }}
  className="p-0"
  classNames={{
    months: "flex flex-col",
    month: "space-y-4",

    caption: "flex justify-between items-center px-2",
    caption_label: "text-lg font-semibold",

    nav: "flex items-center gap-2",
    nav_button:
      "h-8 w-8 bg-transparent hover:bg-white/10 rounded-md",

    table: "w-full border-collapse",
    head_row: "flex justify-between",
    head_cell:
      "text-xs text-gray-400 w-9 font-normal",

    row: "flex w-full mt-2 justify-between",
    cell: "text-center text-sm p-0 relative",

    day: "h-9 w-9 flex items-center justify-center rounded-lg hover:bg-white/10",

    day_selected:
      "bg-[#d4b06a] text-black font-semibold hover:bg-[#d4b06a]",

    day_today: "border border-[#d4b06a]",

    day_outside: "text-gray-600",

    day_disabled: "text-gray-700",
  }}
  modifiersClassNames={{
    hasEvent:
      "relative after:content-[''] after:w-1 after:h-1 after:bg-[#d4b06a] after:rounded-full after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2",
  }}
/>

      <div className="mt-4 space-y-2">
        {selectedEvents.length > 0 ? (
          selectedEvents.map((event, i) => (
            <div key={i} className="p-3 border rounded-xl">
              <h3 className="font-semibold">{event.title}</h3>
              <p>
                {event.startTime} - {event.endTime}
              </p>
              <p>{event.location}</p>

              <a
                href={generateGoogleCalendarLink(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Add to Google Calendar
              </a>
            </div>
          ))
        ) : (
          <p>No events</p>
        )}
      </div>
    </div>
  )
}