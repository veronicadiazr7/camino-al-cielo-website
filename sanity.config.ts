import {defineConfig} from "sanity"
import {structureTool} from "sanity/structure"

import {dataset, projectId, studioBasePath} from "./sanity/env"
import {schemaTypes} from "./sanity/schemaTypes"

export default defineConfig({
  name: "camino_al_cielo",
  title: "Casa de Oracion Camino al Cielo",
  projectId,
  dataset,
  basePath: studioBasePath,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
