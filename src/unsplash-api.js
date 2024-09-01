import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

// https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

const ACCESS_KEY = new TextDecoder().decode(
  base64ToBytes("b1NFVzBqTUJpWTNKN0IzaXk5M3doVnJIaVhCTmtmYlpSblV4NWpQdWJ2cw==")
);

export default async function getPhotos(searchQuery, page) {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: encodeURIComponent(searchQuery),
      page,
      per_page: 12,
      orientation: "landscape",
    },
  });
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
}
