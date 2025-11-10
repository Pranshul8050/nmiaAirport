/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsSection = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('get-news');
      
      if (error) throw error;
      setNews(data.data || []);
    } catch (error) {
      console.error('Error fetching news:', error);
      toast({
        title: "Error",
        description: "Failed to fetch news",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Simple header matching reference */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-light text-slate-700 tracking-wide mb-2 text-center">
            WHAT'S HAPPENING AT NMIA
          </h2>
          <p className="text-center text-slate-600 text-base">
            There is a lot going on at our airport. We have categorized a newsfeed for your convenience.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {news.slice(0, 3).map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white"
                >
                  {/* Red accent bar on left */}
                  <div className="border-l-4 border-red-600 pl-4 mb-4">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2 leading-tight">
                      {item.title || "Airport News Update"}
                    </h3>
                  </div>
                  
                  {/* Date */}
                  <p className="text-sm text-slate-600 mb-3 font-medium">
                    {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    }) : 'Nov 6, 2025'}
                  </p>
                  
                  {/* Description */}
                  <p className="text-slate-700 mb-4 leading-relaxed text-sm line-clamp-3">
                    {item.description || "With airport travel at high levels, passengers should make plans for a smooth journey."}
                  </p>
                  
                  {/* Read More Link */}
                  <a 
                    href={item.url || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-900 font-semibold text-sm hover:text-blue-700 transition-colors inline-block"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>

            {/* READ MORE button centered */}
            <div className="text-center">
              <Button 
                variant="outline" 
                className="border-2 border-slate-400 text-slate-700 hover:bg-slate-50 px-8 py-2 text-sm font-semibold uppercase tracking-wide"
                onClick={fetchNews}
              >
                READ MORE
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
