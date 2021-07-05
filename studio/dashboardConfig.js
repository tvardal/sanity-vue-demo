export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-vue-demo-studio',
                  apiId: '35ddb5c7-86c9-4ba0-bdc4-f28e864d6b55'
                },
                {
                  buildHookId: '60e3742e17a2768ec82884a6',
                  title: 'Events Website',
                  name: 'sanity-vue-demo',
                  apiId: '909a8231-ce15-4539-8676-1d3f7ddeeca5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tvardal/sanity-vue-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-vue-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
