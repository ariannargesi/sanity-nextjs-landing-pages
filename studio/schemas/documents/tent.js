export default {
  name: 'tent',
  type: 'document',
  title: 'Tent',
  fields: [
    {
      name: 'owner',
      type: 'string',
      title: 'Owner'
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At'
    },
    {
      name: 'published',
      type: 'boolean',
      title: 'Published'
    },
    {
      name: 'name',
      type: 'string',
      title: 'name'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand'
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age',
      description: 'Age in years'
    },
    {
      name: 'identifire',
      type: 'string',
      title: 'Identifire'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}]
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    }
  ]
}
