export async function GET(request, id) {
  console.log('API STARTING - sever side');

  const options = {
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.API_KEY,
      'User-Agent': 'My-App',
      Accept: '*/*',
    },
  };

  // fetch url
  const url =
    'https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/0081/TidalEvents?duration=1';

  // fetch data
  console.log('FETCHING DATA');
  const response = await fetch(url, options);
  const data = await response.json();
  console.log('DATA', data);

  return new Response(JSON.stringify(data));
}
