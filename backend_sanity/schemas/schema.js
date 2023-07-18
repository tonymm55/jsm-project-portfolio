// First, we must import the schema creator
import createSchemaCreator from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import testimonials from './testimonials'


export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        testimonials
    ])
})