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
    const apiKey = Deno.env.get('NEWS_API_KEY');
    
    // If API key is not set, return mock data
    if (!apiKey) {
      const mockNews = [
        {
          title: "2025 Mumbai Marathon at the Airport",
          date: "Nov 27, 2025",
          excerpt: "Experience a unique course through the airport runways and terminals.",
          image: "https://images.unsplash.com/photo-1540479859555-17af45c78602"
        },
        {
          title: "New Direct Flights to European Destinations",
          date: "Nov 18, 2025",
          excerpt: "Mumbai International Airport announces new direct services connecting to major European cities...",
          image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e"
        },
        {
          title: "New Airport Dining and Shopping Unveiled",
          date: "Nov 17, 2025",
          excerpt: "International brands announced for new terminal expansion, including premium retail and dining...",
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
        },
        {
          title: "Mumbai Airport Wins Sustainability Award",
          date: "Nov 10, 2025",
          excerpt: "Recognized for innovative green initiatives and carbon reduction programs...",
          image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
        },
        {
          title: "Enhanced Security Measures Implemented",
          date: "Nov 5, 2025",
          excerpt: "State-of-the-art biometric systems now operational across all terminals...",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
        },
        {
          title: "Airport Expansion Project Phase 2 Begins",
          date: "Oct 28, 2025",
          excerpt: "New terminal will accommodate 50 million additional passengers annually...",
          image: "https://images.unsplash.com/photo-1488085061387-422e29b40080"
        }
      ];
      
      return new Response(
        JSON.stringify({ data: mockNews, source: 'mock' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Real API integration would go here
    // const response = await fetch(`https://newsapi.org/v2/everything?q=airport&apiKey=${apiKey}`);
    
    return new Response(
      JSON.stringify({ data: [], source: 'api' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in get-news:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});