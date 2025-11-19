/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Calendar, ExternalLink, Loader2, Newspaper, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const NewsSection = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(6);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const { toast } = useToast();

  // Mock data for when API is not available
  const mockNews = [
    {
      title: 'New Terminal Expansion Opens This Month',
      description:
        'NMIA unveils state-of-the-art facilities with enhanced passenger amenities, modern lounges, and expanded retail space.',
      publishedAt: new Date().toISOString(),
      image: 'https://images.unsplash.com/photo-1548518995-abe91e48e78f?q=80&w=2069',
      category: 'Infrastructure'
    },
    {
      title: 'Record-Breaking Passenger Traffic Reported',
      description:
        'Airport celebrates milestone with over 2 million passengers handled in October, marking a 15% increase year-over-year.',
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      image: 'https://images.unsplash.com/photo-1583094648398-38cc698152ab?q=80&w=2070',
      category: 'Operations'
    },
    {
      title: 'Enhanced Security Measures Implemented',
      description:
        'Advanced biometric systems and AI-powered screening technology now operational across all terminals for improved safety.',
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070',
      category: 'Security'
    },
    {
      title: 'New International Routes Launch',
      description:
        'Five new destinations added to our network including direct flights to Dubai, Singapore, and London starting next quarter.',
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074',
      category: 'Routes'
    },
    {
      title: 'Sustainability Initiative: Green Airport Program',
      description:
        'NMIA commits to carbon neutrality by 2030 with solar panels, electric ground vehicles, and waste reduction programs.',
      publishedAt: new Date(Date.now() - 345600000).toISOString(),
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070',
      category: 'Environment'
    },
    {
      title: 'Holiday Travel Tips and Guidelines',
      description:
        'Plan ahead for the busy season with our comprehensive guide to smooth travel, parking options, and peak hour insights.',
      publishedAt: new Date(Date.now() - 432000000).toISOString(),
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2121',
      category: 'Travel Tips'
    }
  ];

  const fetchNews = async (pageNum = 1) => {
    setLoading(true);
    try {
      // Call backend API route instead of NewsAPI directly
      const response = await fetch(`/api/news?page=${pageNum}`);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.status === 'ok' && data.articles && data.articles.length > 0) {
        // Add category based on content
        const categorizedNews = data.articles.map((article: any) => ({
          ...article,
          category: getCategoryFromContent(article.title + ' ' + article.description)
        }));

        setNews((prevNews) =>
          pageNum === 1 ? categorizedNews : [...prevNews, ...categorizedNews]
        );
        setLastUpdated(new Date());

        if (pageNum === 1) {
          toast({
            title: 'News Refreshed',
            description: `Loaded ${categorizedNews.length} latest articles about NMIA`,
            variant: 'default'
          });
        }
      } else {
        // Fallback to mock data if no articles found
        setNews(mockNews);
        setLastUpdated(new Date());
        toast({
          title: 'Using Demo News',
          description: 'No recent news found, showing sample content',
          variant: 'default'
        });
      }
    } catch (error: any) {
      console.error('Error fetching news:', error);
      setNews(mockNews);
      setLastUpdated(new Date());
      toast({
        title: 'Error Loading News',
        description: 'Showing demo content instead',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const getCategoryFromContent = (text: string) => {
    const lowerText = text.toLowerCase();
    if (
      lowerText.includes('terminal') ||
      lowerText.includes('infrastructure') ||
      lowerText.includes('expansion')
    )
      return 'Infrastructure';
    if (lowerText.includes('passenger') || lowerText.includes('traffic')) return 'Operations';
    if (lowerText.includes('security') || lowerText.includes('safety')) return 'Security';
    if (
      lowerText.includes('route') ||
      lowerText.includes('flight') ||
      lowerText.includes('airline')
    )
      return 'Routes';
    if (
      lowerText.includes('environment') ||
      lowerText.includes('green') ||
      lowerText.includes('sustainability')
    )
      return 'Environment';
    return 'News';
  };

  useEffect(() => {
    // Initial fetch
    fetchNews(1);

    // Auto-refresh news every 30 minutes (1800000ms)
    const interval = setInterval(() => {
      console.log('Auto-refreshing news...');
      fetchNews(1);
    }, 1800000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Modern header with animation */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-4">
            <Newspaper className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
              Latest Updates
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-4 tracking-tight">
            What's Happening at NMIA
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            Stay informed with the latest news, developments, and announcements from Navi Mumbai
            International Airport
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <p className="text-sm text-slate-400 font-light">
              Last updated:{' '}
              {lastUpdated.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchNews(1)}
              disabled={loading}
              className="text-amber-600 border-amber-200 hover:bg-amber-50"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              )}
              Refresh News
            </Button>
          </div>
          <p className="text-xs text-slate-400 mt-2 font-light">Auto-refreshes every 30 minutes</p>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center py-24">
            <Loader2 className="h-16 w-16 animate-spin text-amber-600 mb-4" />
            <p className="text-slate-500 text-lg font-light">Loading latest news...</p>
          </div>
        ) : (
          <>
            {/* Featured news grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {news.slice(0, visibleCount).map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  {/* Image with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={
                        item.image ||
                        item.urlToImage ||
                        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074'
                      }
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Category badge */}
                    {item.category && (
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                        {item.category}
                      </div>
                    )}

                    {/* Trending indicator for first article */}
                    {index === 0 && (
                      <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date with icon */}
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                      <Calendar className="w-4 h-4 text-amber-600" />
                      <span className="font-light">
                        {item.publishedAt
                          ? new Date(item.publishedAt).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })
                          : 'November 15, 2025'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 leading-tight group-hover:text-amber-700 transition-colors line-clamp-2">
                      {item.title || 'Airport News Update'}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 mb-5 leading-relaxed text-sm font-light line-clamp-3">
                      {item.description ||
                        item.content ||
                        'Stay updated with the latest developments and announcements from NMIA.'}
                    </p>

                    {/* Read More Link with arrow */}
                    <a
                      href={item.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-700 font-medium text-sm hover:gap-3 transition-all group/link"
                    >
                      Read Full Story
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* View All News CTA */}
            {visibleCount < news.length && (
              <div className="text-center pt-8">
                <Button
                  size="lg"
                  className="bg-slate-800 hover:bg-amber-600 text-white hover:shadow-xl transition-all px-10 py-6 text-base font-medium rounded-full group"
                  onClick={() => {
                    setVisibleCount(prev => prev + 3);
                  }}
                >
                  <Newspaper className="w-5 h-5 mr-2" />
                  Load 3 More News
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <p className="text-sm text-slate-400 mt-4">
                  Showing {visibleCount} of {news.length} articles
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
