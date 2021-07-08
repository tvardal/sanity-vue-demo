// social.js

const services = ['twitter', 'instagram', 'github', 'linkedIn']

export default {
  name: 'social',
  type: 'document',
  title: 'Social Media Links',
  // loop through array of service keys and return field, title is generated from name
  fields: services
    .map(name => ({
      name,
      type: 'url',
      description: 'The full URL of the ${name} profile'
    }))
    .concat({
      name: 'website',
      type: 'url',
      title: 'Website',
      description: 'The URL for the website'
    })
}