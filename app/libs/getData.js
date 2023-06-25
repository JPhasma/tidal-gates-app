// this will get data from Admiralty api
// and return it as a json object

// const url = 'https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations';

// const key = process.env.API_KEY;

// async function getData() {
//   // https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/0474/TidalEvents?duration=7
//   // https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations

//   const res = await fetch(url, {
//     mode: 'cors',
//     headers: {
//       'Ocp-Apim-Subscription-Key': key!,
//       'User-Agent': 'My-App'!,
//       Accept: '*/*',
//     },
//   });
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }
