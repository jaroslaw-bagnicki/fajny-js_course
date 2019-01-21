/* eslint-disable import/prefer-default-export */
export async function fetchData(url, format = 'json') {
  try {
    const res = await fetch(url);
    if (res.ok) {
      switch (format) {
        case 'json':
          return (await res.json());
        case 'text':
          return (await res.text());
        default:
          throw Error('Wrong format');
      }
    } else {
      throw Error('Fetch failed');
    }
  } catch (err) {
    console.warn(err);
    return null;
  }
}
