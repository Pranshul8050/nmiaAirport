/* eslint-disable @typescript-eslint/no-explicit-any */
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { flightNumber, type } = await req.json();
    
    const apiKey = Deno.env.get('AVIATION_STACK_API_KEY');
    
    // If API key is not set, return mock data
    if (!apiKey) {
      const mockData = {
        departures: [
          { time: "14:25", destination: "SAN SALVADOR", flightNumber: "N3 4327", gate: "A14", status: "On Time" },
          { time: "14:25", destination: "DENVER", flightNumber: "UA 726", gate: "C17", status: "On Time" },
          { time: "14:30", destination: "ISTANBUL", flightNumber: "TK 188", gate: "B37", status: "Boarding" },
          { time: "14:45", destination: "LONDON", flightNumber: "BA 142", gate: "D22", status: "On Time" },
          { time: "15:00", destination: "DUBAI", flightNumber: "EK 501", gate: "E15", status: "Delayed" },
        ],
        arrivals: [
          { time: "14:10", origin: "NEW YORK", flightNumber: "AA 101", gate: "A5", status: "Landed" },
          { time: "14:20", origin: "SINGAPORE", flightNumber: "SQ 423", gate: "B12", status: "On Time" },
          { time: "14:35", origin: "PARIS", flightNumber: "AF 662", gate: "C8", status: "On Time" },
          { time: "14:50", origin: "TOKYO", flightNumber: "NH 829", gate: "D18", status: "Approaching" },
          { time: "15:15", origin: "SYDNEY", flightNumber: "QF 224", gate: "E21", status: "On Time" },
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

    // Real API integration would go here
    // const response = await fetch(`https://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${flightNumber}`);
    
    return new Response(
      JSON.stringify({ data: [], source: 'api' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in get-flight-status:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});