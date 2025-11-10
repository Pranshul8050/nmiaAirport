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
    // Mock parking availability data
    const parkingData = [
      {
        name: 'Valet',
        total: 500,
        available: 142,
        status: 'OPEN',
      },
      {
        name: 'Terminal Lot',
        total: 2022,
        available: 623,
        status: 'OPEN',
      },
      {
        name: 'Garage 1',
        total: 4508,
        available: 577,
        status: 'OPEN',
      },
      {
        name: 'Garage 2',
        total: 3727,
        available: 563,
        status: 'OPEN',
      },
      {
        name: 'Economy Lot',
        total: 11431,
        available: 4074,
        status: 'OPEN',
      },
    ];

    console.log('Parking availability fetched');

    return new Response(
      JSON.stringify({ 
        success: true,
        data: parkingData
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in get-parking-availability:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
