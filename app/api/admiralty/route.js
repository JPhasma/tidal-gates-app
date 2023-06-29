export async function GET(request) {
  console.log('API STARTING - sever side');
  console.log('REQUEST', request);

  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  console.log('ID', id);

  const options = {
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.API_KEY,
      'User-Agent': 'My-App',
      Accept: '*/*',
    },
  };

  // fetch url
  const apiUrl = `https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/${id}/TidalEvents?duration=1`;

  // fetch data
  console.log('FETCHING DATA');
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  console.log('DATA', data);

  return new Response(JSON.stringify(data));
}
