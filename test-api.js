// Test Aviation Stack API connection
const API_KEY = 'f8a84323e493bfd6dce0fc34987ba11c';

async function testAPI() {
  console.log('Testing Aviation Stack API...\n');

  // Test 1: Basic connectivity
  try {
    const url = `https://api.aviationstack.com/v1/flights?access_key=${API_KEY}&limit=5`;
    console.log('Fetching from:', url.replace(API_KEY, 'XXX'));

    const response = await fetch(url);
    const data = await response.json();

    console.log('\n=== API Response ===');
    console.log('Status:', response.status);
    console.log('Has error:', !!data.error);

    if (data.error) {
      console.log('Error:', data.error);
      return;
    }

    console.log('Total results:', data.pagination?.total || 0);
    console.log('Results returned:', data.data?.length || 0);

    if (data.data && data.data.length > 0) {
      console.log('\n=== Sample Flight ===');
      const flight = data.data[0];
      console.log('Flight:', flight.flight?.iata || flight.flight?.number);
      console.log('Airline:', flight.airline?.name);
      console.log('From:', flight.departure?.airport, '(', flight.departure?.iata, ')');
      console.log('To:', flight.arrival?.airport, '(', flight.arrival?.iata, ')');
      console.log('Status:', flight.flight_status);
      console.log('Departure:', flight.departure?.scheduled);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }

  // Test 2: Mumbai specific flights
  console.log('\n\n=== Testing Mumbai Departures ===');
  try {
    const url = `https://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=BOM&limit=10`;
    console.log('Fetching from:', url.replace(API_KEY, 'XXX'));

    const response = await fetch(url);
    const data = await response.json();

    console.log('Status:', response.status);
    console.log('Has error:', !!data.error);

    if (data.error) {
      console.log('Error:', data.error);
    } else {
      console.log('Mumbai departures found:', data.data?.length || 0);
      if (data.data && data.data.length > 0) {
        data.data.slice(0, 3).forEach((flight, i) => {
          console.log(`\n${i + 1}. ${flight.flight?.iata || 'N/A'} - ${flight.airline?.name}`);
          console.log(`   To: ${flight.arrival?.airport} (${flight.arrival?.iata})`);
          console.log(`   Status: ${flight.flight_status}`);
        });
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
  }

  // Test 3: Mumbai arrivals
  console.log('\n\n=== Testing Mumbai Arrivals ===');
  try {
    const url = `https://api.aviationstack.com/v1/flights?access_key=${API_KEY}&arr_iata=BOM&limit=10`;
    console.log('Fetching from:', url.replace(API_KEY, 'XXX'));

    const response = await fetch(url);
    const data = await response.json();

    console.log('Status:', response.status);
    console.log('Has error:', !!data.error);

    if (data.error) {
      console.log('Error:', data.error);
    } else {
      console.log('Mumbai arrivals found:', data.data?.length || 0);
      if (data.data && data.data.length > 0) {
        data.data.slice(0, 3).forEach((flight, i) => {
          console.log(`\n${i + 1}. ${flight.flight?.iata || 'N/A'} - ${flight.airline?.name}`);
          console.log(`   From: ${flight.departure?.airport} (${flight.departure?.iata})`);
          console.log(`   Status: ${flight.flight_status}`);
        });
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testAPI();
