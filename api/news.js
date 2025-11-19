export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  // Only allow GET requests
  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const apiKey = process.env.VITE_NEWS_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Search for NMIA, Navi Mumbai Airport, Mumbai Airport news
    const queries = [
      'Navi Mumbai International Airport',
      'NMIA airport',
      'Mumbai airport',
      'Navi Mumbai airport'
    ];

    // Get page from query params, default to 1
    const url = new URL(request.url);
    const pageNum = parseInt(url.searchParams.get('page') || '1');

    let allArticles = [];

    // Try multiple search terms to get best results
    for (const query of queries) {
      const newsUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&pageSize=10&page=${pageNum}&apiKey=${apiKey}`;

      const response = await fetch(newsUrl);
      const data = await response.json();

      if (data.status === 'ok' && data.articles) {
        allArticles = [...allArticles, ...data.articles];
      }
    }

    // Remove duplicates based on title
    const uniqueArticles = allArticles.filter((article, index, self) =>
      index === self.findIndex((a) => a.title === article.title)
    );

    // Sort by publishedAt date (most recent first)
    const sortedArticles = uniqueArticles.sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return new Response(
      JSON.stringify({
        status: 'ok',
        articles: sortedArticles,
        totalResults: sortedArticles.length
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching news:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch news',
        message: error.message
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
