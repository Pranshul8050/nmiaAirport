// Vite config for the mumbai-flight-mirror-fix project
import { defineConfig, loadEnv } from 'vite';
// React SWC plugin for fast JSX/TSX compilation
import react from '@vitejs/plugin-react-swc';
// Node path module for resolving aliases
import path from 'path';
import fs from 'fs';

// Custom plugin to handle /api routes during development
function apiPlugin(env: Record<string, string>) {
  return {
    name: 'api-plugin',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url?.startsWith('/api/news')) {
          try {
            const url = new URL(req.url, `http://${req.headers.host}`);
            const pageNum = parseInt(url.searchParams.get('page') || '1');
            const apiKey = env.VITE_NEWS_API_KEY;
            
            console.log('[API NEWS] Request received for page:', pageNum);
            console.log('[API NEWS] API Key exists:', !!apiKey);

            if (!apiKey) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'API key not configured' }));
              return;
            }

            const queries = [
              'Navi Mumbai International Airport',
              'NMIA airport',
              'Mumbai airport',
              'Navi Mumbai airport'
            ];

            let allArticles: any[] = [];

            for (const query of queries) {
              const newsUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
                query
              )}&language=en&sortBy=publishedAt&pageSize=10&page=${pageNum}&apiKey=${apiKey}`;

              console.log(`[API NEWS] Fetching: ${query}`);
              const response = await fetch(newsUrl);
              const data = await response.json() as any;

              if (data.status === 'ok' && data.articles) {
                console.log(`[API NEWS] Found ${data.articles.length} articles for: ${query}`);
                allArticles = [...allArticles, ...data.articles];
              } else if (data.status === 'error') {
                console.error('[API NEWS] NewsAPI Error:', data.message);
              }
            }
            
            console.log(`[API NEWS] Total articles before dedup: ${allArticles.length}`);

            // Filter for NMIA-specific news only
            const nmiaKeywords = ['nmia', 'navi mumbai airport', 'navi mumbai international airport'];
            const nmiaArticles = allArticles.filter((article: any) => {
              const searchText = (article.title + ' ' + article.description + ' ' + (article.content || '')).toLowerCase();
              return nmiaKeywords.some((keyword: string) => searchText.includes(keyword));
            });

            console.log(`[API NEWS] NMIA-specific articles: ${nmiaArticles.length}`);

            const uniqueArticles = nmiaArticles.filter(
              (article: any, index: number, self: any[]) => 
                index === self.findIndex((a: any) => a.title === article.title)
            );

            const sortedArticles = uniqueArticles.sort(
              (a: any, b: any) => 
                new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
            );

            console.log(`[API NEWS] Returning ${sortedArticles.length} articles`);

            res.writeHead(200, {
              'Content-Type': 'application/json',
              'Cache-Control': 'public, s-maxage=1800'
            });
            res.end(
              JSON.stringify({
                status: 'ok',
                articles: sortedArticles,
                totalResults: sortedArticles.length
              })
            );
          } catch (error: any) {
            console.error('[API NEWS] Error:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to fetch news', message: error.message }));
          }
        } else {
          next();
        }
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    // Provide development server config
    server: {
      // Listen on all IPv6 interfaces for local network testing
      host: '::',
      port: 8080
    },
    // Plugins for Vite (React with SWC + API handler)
    plugins: [react(), apiPlugin(env)],
    resolve: {
      alias: {
        // Short path alias for src
        '@': path.resolve(__dirname, './src')
      }
    }
  };
});
