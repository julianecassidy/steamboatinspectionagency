import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {SetAndPublishAction} from './publishAction'

export default defineConfig({
  name: 'default',
  title: 'Steamboat Inspection',

  projectId: 'uzrqwbe7',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  document: {
    actions: [SetAndPublishAction],
  },

  schema: {
    types: schemaTypes,
  },
})
