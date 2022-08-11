import type { ContentData } from '@vtex/client-cms'

export default {
  id: 'ad2fd81d-a53c-4281-8d01-a4fc2f274db3',
  name: 'Home',
  type: 'home',
  status: 'published',
  versionId: '1b18fbcf-ce08-4ead-9011-364921e725c3',
  versionStatus: 'published',
  sections: [
    {
      id: '1647286556072',
      name: 'Hero',
      data: {
        imageSrc:
          'https://storeframework.vtexassets.com/assets/vtex.file-manager-graphql/images/299f7d32-bb6a-40fd-82a0-4af5573ba572___17239443c00c1e894cff10ca05018058.jpg',
        title: 'New Products Available on summer',
        subtitle:
          'At FastStore you can shop the best tech of 2022. Enjoy and get 10% off on your first purchase.',
        linkText: 'See all',
        link: '/office',
        imageAlt: 'hero image',
      },
    },
    {
      id: '1659448790757',
      name: 'ProductShelf',
      data: {
        first: 5,
        after: '0',
        sort: 'score_desc',
        selectedFacets: [{ key: 'productClusterIds', value: '140' }],
        title: 'Most Wanted',
      },
    },
    {
      id: '1649293548351',
      name: 'ProductTiles',
      data: {
        first: 3,
        after: '0',
        sort: 'score_desc',
        selectedFacets: [{ key: 'productClusterIds', value: '142' }],
        title: 'Just Arrived now!',
      },
    },
    {
      id: '1647286735093',
      name: 'BannerText',
      data: {
        title: 'Receive our news and promotions in advance.',
        caption: 'Enjoy and get 10% off on your first purchase!!',
        actionPath: '/office',
        actionLabel: 'See all',
      },
    },
    {
      id: '1649293131632',
      name: 'ProductShelf',
      data: {
        first: 5,
        after: '0',
        sort: 'score_desc',
        selectedFacets: [{ key: 'productClusterIds', value: '142' }],
        title: 'Deals & Promotions',
      },
    },
  ],
} as ContentData
