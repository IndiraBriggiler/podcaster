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

interface p {
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

interface Podcast {
  "im:name": { label: string };
  "im:price": {
    label: string;
    attributes: { amount: string; currency: string };
  };
  "im:image": [
    { label: string; attributes: { height: 55 } },
    { label: string; attributes: { height: string } },
    { label: string; attributes: { height: string } }
  ];
  summary: { label: string };
  "im:artist": { label: string };
  title: { label: string };
  link: { attributes: { rel: string; type: string; href: string } };
  id: { label: string; attributes: { "im:id": string } };
  "im:contentType": { attributes: { term: string; label: string } };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": { label: string; attributes: { label: string } };
}

interface PodcastResponse {
  resultCount: number;
  results: [
    {
      wrapperType: string;
      kind: string;
      collectionId: number;
      trackId: number;
      artistName: string;
      collectionName: string;
      trackName: string;
      collectionCensoredName: string;
      trackCensoredName: string;
      collectionViewUrl: string;
      feedUrl: string;
      trackViewUrl: string;
      artworkUrl30: string;
      artworkUrl60: string;
      artworkUrl100: string;
      collectionPrice: double;
      trackPrice: double;
      trackRentalPrice: number;
      collectionHdPrice: number;
      trackHdPrice: number;
      trackHdRentalPrice: 0;
      releaseDate: string;
      collectionExplicitness: string;
      trackExplicitness: string;
      trackCount: number;
      country: string;
      currency: string;
      primaryGenreName: string;
      contentAdvisoryRating: string;
      artworkUrl600: string;
      genreIds: string[];
      genres: string[];
    }
  ];
}
