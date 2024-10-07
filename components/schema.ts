const schemaData: Record<string, any> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ridwan Yinus',
  jobTitle: 'Front End Developer ',
  url: 'https://ridwanyinus.is-a.dev',
  sameAs: ['https://linkedin.com/in/ridwan-yinus', 'https://github.com/ridwanyinus'],
  worksFor: {
    '@type': 'Organization',
    name: 'Ridwan',
  },

  description: 'Ridwan Yinus is a front end developer and Graphic Designer specializing in React and Next.js, creating high-quality, user-friendly websites.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'Nigeria',
  },
  image:
    'https://cdn.discordapp.com/attachments/1256866717750001777/1292726354978148403/IMG-20241007-WA00071.jpg?ex=6704c8bc&is=6703773c&hm=77b7111a2f0f0bc7a33bd5da0323f58fdb17b4e9dd8440ee50f5c96e1f1e2be2&',
};

export default schemaData;
