// Test Weather API connection
const API_KEY = '587f82cc9953422bbc0175211251711';

async function testWeatherAPI() {
  console.log('Testing Weather API for Mumbai...\n');

  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Mumbai&aqi=no`;
    console.log('Fetching from:', url.replace(API_KEY, 'XXX'));

    const response = await fetch(url);
    const data = await response.json();

    console.log('\n=== Weather API Response ===');
    console.log('Status:', response.status);

    if (data.error) {
      console.log('Error:', data.error);
      return;
    }

    console.log('\n=== Location ===');
    console.log('Name:', data.location.name);
    console.log('Region:', data.location.region);
    console.log('Country:', data.location.country);
    console.log('Local Time:', data.location.localtime);

    console.log('\n=== Current Weather ===');
    console.log('Temperature:', data.current.temp_c + '°C');
    console.log('Feels Like:', data.current.feelslike_c + '°C');
    console.log('Condition:', data.current.condition.text);
    console.log('Humidity:', data.current.humidity + '%');
    console.log('Wind Speed:', data.current.wind_kph + ' km/h');
    console.log('Icon URL:', 'https:' + data.current.condition.icon);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testWeatherAPI();
