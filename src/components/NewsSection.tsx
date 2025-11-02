import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Newspaper } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsSection = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
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
  };

  return (
    <div className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Newspaper className="h-8 w-8 text-primary animate-pulse-slow" />
          <h2 className="text-4xl font-light text-center text-navy tracking-widest">
            WHAT'S HAPPENING AT MUMBAI
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-12">
          There is a lot going on at our airport. We have categorized a newsfeed for your convenience.
        </p>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {news.slice(0, 3).map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {item.image && (
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="border-l-4 border-accent pl-4 mb-4 group-hover:border-primary transition-colors">
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-navy transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-sm text-navy font-semibold mb-3">{item.date}</p>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <a href="#" className="text-primary hover:underline font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                    Read More 
                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all hover:shadow-lg hover:scale-105"
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
