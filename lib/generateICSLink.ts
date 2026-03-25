import { EventItem } from "./events"

function formatICSDate(date: Date, time?: string) {
  const [hours = "00", minutes = "00"] = time?.split(":") ?? []
  const value = new Date(date)
  value.setHours(Number(hours), Number(minutes), 0, 0)

  return value.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
}

function escapeICSValue(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;")
}

export function buildICSDataUri(event: EventItem) {
  const start = formatICSDate(event.date, event.startTime)
  const end = formatICSDate(event.date, event.endTime ?? event.startTime)
  const now = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Camino al Cielo//Eventos//EN",
    "BEGIN:VEVENT",
    `UID:${event.id}@caminoalcielo.org`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${escapeICSValue(event.title)}`,
    `DESCRIPTION:${escapeICSValue(event.description)}`,
    `LOCATION:${escapeICSValue(event.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n")

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`
}
