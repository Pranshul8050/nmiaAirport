/* eslint-disable @typescript-eslint/no-explicit-any */
import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { flightNumber, type, airport } = await req.json();

    const apiKey = Deno.env.get('AVIATION_STACK_API_KEY') || 'f8a84323e493bfd6dce0fc34987ba11c';

    // Fetch real-time flight data from AviationStack API
    try {
      // Use HTTPS for Aviation Stack API
      let apiUrl = `https://api.aviationstack.com/v1/flights?access_key=${apiKey}`;

      // Add filters based on type and airport
      if (airport) {
        if (type === 'departures') {
          apiUrl += `&dep_iata=${airport}`;
        } else {
          apiUrl += `&arr_iata=${airport}`;
        }
      }

      // Add specific flight number if provided
      if (flightNumber) {
        apiUrl += `&flight_iata=${flightNumber}`;
      }

      // Add limit to reduce API usage
      apiUrl += `&limit=50`;

      console.log('Fetching from Aviation Stack:', apiUrl.replace(apiKey, 'XXX'));

      const response = await fetch(apiUrl);
      const data = await response.json();

      console.log('API Response:', {
        hasData: !!data.data,
        count: data.data?.length || 0,
        error: data.error,
        pagination: data.pagination
      });

      if (data.error) {
        throw new Error(data.error.message || 'API Error');
      }

      // Transform API data to match our format
      const transformedData = (data.data || []).slice(0, 20).map((flight: any) => {
        const isArrival = type === 'arrivals';
        const scheduledTime = isArrival ? flight.arrival?.scheduled : flight.departure?.scheduled;
        const actualTime = isArrival ? flight.arrival?.actual : flight.departure?.actual;
        const estimatedTime = isArrival ? flight.arrival?.estimated : flight.departure?.estimated;

        // Get the best available time
        const bestTime = actualTime || estimatedTime || scheduledTime;

        // Get location names
        const originName = flight.departure?.airport || flight.departure?.iata || 'Unknown';
        const destName = flight.arrival?.airport || flight.arrival?.iata || 'Unknown';

        // Get airline name
        const airlineName = flight.airline?.name || flight.airline?.iata || 'Unknown';

        return {
          time: bestTime
            ? new Date(bestTime).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              })
            : 'N/A',
          origin: originName,
          destination: destName,
          flightNumber:
            flight.flight?.iata || flight.flight?.icao || flight.flight?.number || 'N/A',
          airline: airlineName,
          gate: (isArrival ? flight.arrival?.gate : flight.departure?.gate) || 'TBA',
          terminal: (isArrival ? flight.arrival?.terminal : flight.departure?.terminal) || 'TBA',
          status: flight.flight_status || 'scheduled'
        };
      });

      return new Response(
        JSON.stringify({
          data: transformedData,
          source: 'api',
          count: transformedData.length,
          total: data.pagination?.total || 0
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch (apiError: any) {
      console.error('API Error, falling back to mock data:', apiError.message);

      // Fallback to mock data with Indian flights if API fails
      const mockData = {
        departures: [
          {
            time: '02:25 PM',
            destination: 'Delhi',
            origin: 'Mumbai',
            flightNumber: '6E 2134',
            airline: 'IndiGo',
            gate: 'A14',
            terminal: 'T2',
            status: 'on time'
          },
          {
            time: '02:45 PM',
            destination: 'Bangalore',
            origin: 'Mumbai',
            flightNumber: 'AI 619',
            airline: 'Air India',
            gate: 'C17',
            terminal: 'T2',
            status: 'boarding'
          },
          {
            time: '03:00 PM',
            destination: 'Dubai',
            origin: 'Mumbai',
            flightNumber: 'EK 501',
            airline: 'Emirates',
            gate: 'B37',
            terminal: 'T2',
            status: 'scheduled'
          },
          {
            time: '03:15 PM',
            destination: 'Singapore',
            origin: 'Mumbai',
            flightNumber: 'SQ 423',
            airline: 'Singapore Airlines',
            gate: 'D22',
            terminal: 'T2',
            status: 'on time'
          },
          {
            time: '03:30 PM',
            destination: 'Hyderabad',
            origin: 'Mumbai',
            flightNumber: 'SG 537',
            airline: 'SpiceJet',
            gate: 'E15',
            terminal: 'T2',
            status: 'delayed'
          },
          {
            time: '03:45 PM',
            destination: 'Chennai',
            origin: 'Mumbai',
            flightNumber: 'UK 877',
            airline: 'Vistara',
            gate: 'A8',
            terminal: 'T2',
            status: 'on time'
          },
          {
            time: '04:00 PM',
            destination: 'Kolkata',
            origin: 'Mumbai',
            flightNumber: '6E 721',
            airline: 'IndiGo',
            gate: 'B12',
            terminal: 'T2',
            status: 'scheduled'
          },
          {
            time: '04:15 PM',
            destination: 'Pune',
            origin: 'Mumbai',
            flightNumber: 'AI 631',
            airline: 'Air India',
            gate: 'C9',
            terminal: 'T2',
            status: 'on time'
          }
        ],
        arrivals: [
          {
            time: '02:10 PM',
            origin: 'Delhi',
            destination: 'Mumbai',
            flightNumber: '6E 2111',
            airline: 'IndiGo',
            gate: 'A5',
            terminal: 'T2',
            status: 'landed'
          },
          {
            time: '02:20 PM',
            origin: 'Bangalore',
            destination: 'Mumbai',
            flightNumber: 'AI 502',
            airline: 'Air India',
            gate: 'B12',
            terminal: 'T2',
            status: 'on time'
          },
          {
            time: '02:35 PM',
            origin: 'Dubai',
            destination: 'Mumbai',
            flightNumber: 'EK 500',
            airline: 'Emirates',
            gate: 'C8',
            terminal: 'T2',
            status: 'active'
          },
          {
            time: '02:50 PM',
            origin: 'Singapore',
            destination: 'Mumbai',
            flightNumber: 'SQ 422',
            airline: 'Singapore Airlines',
            gate: 'D18',
            terminal: 'T2',
            status: 'active'
          },
          {
            time: '03:15 PM',
            origin: 'Hyderabad',
            destination: 'Mumbai',
            flightNumber: 'SG 536',
            airline: 'SpiceJet',
            gate: 'E21',
            terminal: 'T2',
            status: 'scheduled'
          },
          {
            time: '03:30 PM',
            origin: 'Chennai',
            destination: 'Mumbai',
            flightNumber: 'UK 876',
            airline: 'Vistara',
            gate: 'A15',
            terminal: 'T2',
            status: 'on time'
          },
          {
            time: '03:45 PM',
            origin: 'Kolkata',
            destination: 'Mumbai',
            flightNumber: '6E 720',
            airline: 'IndiGo',
            gate: 'B18',
            terminal: 'T2',
            status: 'scheduled'
          },
          {
            time: '04:00 PM',
            origin: 'Goa',
            destination: 'Mumbai',
            flightNumber: 'AI 687',
            airline: 'Air India',
            gate: 'C14',
            terminal: 'T2',
            status: 'on time'
          }
        ]
      };

      return new Response(
        JSON.stringify({
          data: type === 'departures' ? mockData.departures : mockData.arrivals,
          source: 'mock'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error: any) {
    console.error('Error in get-flight-status:', error);
    return new Response(JSON.stringify({ error: error.message || 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
