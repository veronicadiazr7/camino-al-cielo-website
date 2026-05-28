import {CalendarIcon} from "@sanity/icons"
import {defineField, defineType} from "sanity"

const eventCategories = [
  {title: "Jovenes", value: "jovenes"},
  {title: "Evangelismo", value: "evangelismo"},
  {title: "Servicio", value: "servicio"},
  {title: "Ninos", value: "ninos"},
  {title: "Matrimonios", value: "matrimonios"},
  {title: "Estudios", value: "estudios"},
]

export const event = defineType({
  name: "event",
  title: "Eventos",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Identificador",
      type: "slug",
      options: {source: "title"},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Fecha",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startTime",
      title: "Hora de comienzo",
      type: "string",
      description: "Ejemplo: 19:00",
    }),
    defineField({
      name: "endTime",
      title: "Hora de cierre",
      type: "string",
      description: "Ejemplo: 21:00",
    }),
    defineField({
      name: "location",
      title: "Lugar",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: eventCategories,
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ministry",
      title: "Ministerio",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Imagen principal",
      type: "image",
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cardImage",
      title: "Imagen para tarjeta",
      type: "image",
      options: {hotspot: true},
      description: "Opcional. Si se deja vacia se usa la imagen principal.",
    }),
    defineField({
      name: "featured",
      title: "Evento destacado",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isActive",
      title: "Publicado en la pagina",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "heroImage",
    },
  },
})
