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
    const { name, email, phone, departureCity, arrivalCity, departureDate, returnDate, passengers, flightClass } = await req.json();
    
    if (!name || !email || !phone || !departureCity || !arrivalCity || !departureDate || !passengers || !flightClass) {
      return new Response(
        JSON.stringify({ error: 'All required fields must be provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { data, error } = await supabase
      .from('flight_bookings')
      .insert({
        name,
        email,
        phone,
        departure_city: departureCity,
        arrival_city: arrivalCity,
        departure_date: departureDate,
        return_date: returnDate || null,
        passengers,
        class: flightClass,
      })
      .select()
      .single();

    if (error) throw error;

    console.log('Flight booking created:', data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Flight booked successfully!',
        bookingId: data.id
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in book-flight:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
