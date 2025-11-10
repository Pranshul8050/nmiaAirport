/* eslint-disable @typescript-eslint/no-explicit-any */
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { arrivalDate, arrivalTime, departureDate, departureTime, promoCode } = await req.json();
    
    if (!arrivalDate || !arrivalTime || !departureDate || !departureTime) {
      return new Response(
        JSON.stringify({ error: 'All date and time fields are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { data, error } = await supabase
      .from('parking_reservations')
      .insert({
        arrival_date: arrivalDate,
        arrival_time: arrivalTime,
        departure_date: departureDate,
        departure_time: departureTime,
        promo_code: promoCode || null,
      })
      .select()
      .single();

    if (error) throw error;

    console.log('Parking reservation created:', data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Parking reserved successfully!',
        reservationId: data.id
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in create-parking-reservation:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});