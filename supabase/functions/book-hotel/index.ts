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
    const { name, email, phone, checkInDate, checkOutDate, guests, roomType, specialRequests } = await req.json();
    
    if (!name || !email || !phone || !checkInDate || !checkOutDate || !guests || !roomType) {
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
      .from('hotel_bookings')
      .insert({
        name,
        email,
        phone,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        guests,
        room_type: roomType,
        special_requests: specialRequests || null,
      })
      .select()
      .single();

    if (error) throw error;

    console.log('Hotel booking created:', data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Hotel booked successfully!',
        bookingId: data.id
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in book-hotel:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
