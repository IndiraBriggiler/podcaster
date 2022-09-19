interface PodcastListResponse {
  feed: {
    author: { name: { label: string }; uri: { label: string } };
    entry: Podcast[];
    icon: { label: string };
    id: { label: string };
    link: [
      { attributes: { rel: string; type: string } },
      { attributes: { rel: string } }
    ];
    rights: { label: string };
    title: { label: string };
    updated: { label: string };
  };
}

interface PodcastResponse {
  name: {
    label: string;
  };
  price: {
    label: string;
    attributes: {
      amount: 0;
      currency: string;
    };
  };
  image: [
    {
      label: string;
      attributes: {
        height: string;
      };
    },
    {
      label: string;
      attributes: {
        height: string;
      };
    },
    {
      label: string;
      attributes: {
        height: string;
      };
    }
  ];
  summary: {
    label: string;
  };
  artist: {
    label: string;
  };
  title: {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      id: string;
    };
  };
  contentType: {
    attributes: {
      term: string;
      label: string;
    };
  };
  category: {
    attributes: {
      id: string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  releaseDate: {
    label: string;
    attributes: {
      label: string;
    };
  };
}
