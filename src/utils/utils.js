const doFetch = (url) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => {
      console.log(`Location not found: ${error}`);
    });

// eslint-disable-next-line import/prefer-default-export
export { doFetch };
