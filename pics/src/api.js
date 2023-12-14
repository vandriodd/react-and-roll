import axios from 'axios';

// term -> search term
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID',
    },
    params: {
      query: term,
    },
  });

  // return the result in an array
  return response.data.results;
};

export default searchImages;
