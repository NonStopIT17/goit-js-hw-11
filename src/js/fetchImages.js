import axios from 'axios';
export { fetchImages };
const API_KEY = '35915141-b6dbe9ffcdcece473600962ee'
const baseUrl = 'https://pixabay.com/api/';
async function fetchImages(searchImgName, page) {
  return await axios({
    method: 'get',
    url: `${baseUrl}`,
    params: {
      key: API_KEY,
      q: `${searchImgName}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 40,
      page: page,
    },
  });
}