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
    const { name, email, phone, pickupDate, pickupTime, returnDate, returnTime, carType } = await req.json();
    
    if (!name || !email || !phone || !pickupDate || !pickupTime || !returnDate || !returnTime || !carType) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { data, error } = await supabase
      .from('car_rental_bookings')
      .insert({
        name,
        email,
        phone,
        pickup_date: pickupDate,
        pickup_time: pickupTime,
        return_date: returnDate,
        return_time: returnTime,
        car_type: carType,
      })
      .select()
      .single();

    if (error) throw error;

    console.log('Car rental booking created:', data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Car rental booked successfully!',
        bookingId: data.id
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in book-car:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
