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
    <div className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center text-foreground mb-4 tracking-wider">
          WHAT'S HAPPENING AT MUMBAI
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          There is a lot going on at our airport. We have categorized a newsfeed for your convenience.
        </p>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {news.slice(0, 3).map((item, index) => (
                <Card 
                  key={index} 
                  className="p-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden animate-fade-in border-0 shadow-md bg-white"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {item.image && (
                    <div className="w-full h-56 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="border-l-4 border-accent pl-4 mb-4">
                      <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                    </div>
                    <p className="text-sm text-foreground font-semibold mb-3">{item.date}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{item.excerpt}</p>
                    <a href="#" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More 
                      <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white transition-all hover:shadow-lg hover:scale-105 px-10 py-6 text-base font-semibold"
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
