// Test News API connection
const API_KEY = '0edbce7aa075448dbed9506c379d7abb';

async function testNewsAPI() {
  console.log('Testing News API for NMIA/Mumbai Airport...\n');

  const queries = [
    'Navi Mumbai International Airport',
    'NMIA airport',
    'Mumbai airport expansion',
    'Mumbai airport news'
  ];

  for (const query of queries) {
    console.log(`\n=== Testing Query: "${query}" ===`);

    try {
      const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&language=en&sortBy=publishedAt&pageSize=5&apiKey=${API_KEY}`;
      console.log('Fetching from:', url.replace(API_KEY, 'XXX'));

      const response = await fetch(url);
      const data = await response.json();

      console.log('Status:', data.status);
      console.log('Total Results:', data.totalResults || 0);
      console.log('Articles Returned:', data.articles?.length || 0);

      if (data.status === 'ok' && data.articles && data.articles.length > 0) {
        console.log('\n--- Top 3 Articles ---');
        data.articles.slice(0, 3).forEach((article, i) => {
          console.log(`\n${i + 1}. ${article.title}`);
          console.log(`   Source: ${article.source.name}`);
          console.log(`   Published: ${new Date(article.publishedAt).toLocaleDateString()}`);
          console.log(`   Description: ${article.description?.substring(0, 100)}...`);
          console.log(`   URL: ${article.url}`);
        });
      } else if (data.status === 'error') {
        console.log('Error:', data.message);
      }

      // Add small delay between requests
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}

testNewsAPI();
