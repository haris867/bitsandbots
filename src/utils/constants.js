export const fetchUrl = `https://qg8g236v.api.sanity.io/v2021-10-21/data/query/production?query=%7B%0A++%22products%22%3A+*%5B_type+%3D%3D+%22products%22%5D+%7B%0A++++_id%2C%0A++++description%2C%0A++++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++++name%2C%0A++++price%2C%0A++++++rating%2C%0A++++%22genres%22%3A+genres%5B%5D-%3E%7B%0A++++++_id%2C%0A++++++genre%0A++++%7D%0A++%7D%2C%0A++%22genres%22%3A+*%5B_type+%3D%3D+%22genres%22%5D+%7B%0A++++_id%2C%0A++++genre%0A++%7D%2C%0A%7D%0A`;

export const accessToken =
  "skRsSpv5Xfy8wImISDXtb7J74OcEkGfc0gS1kcj5vQPDKe3VvEo3g8YjuY5JgIo7MRgo3ptiQH9shNjIAfePcOkkZo6fQBkZEuQxSdAWzWBoQNSBCSUTOxebHi1x1oowT0993H8bUpKfXRZQeZgBG3vV7smnf9t82BXRh3uikdLdKGpy3WxW";
