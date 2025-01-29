const response = await fetch("MY_URL", {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',  // Use this for Authorization header if needed
    'Content-Type': 'application/json'     // Content-Type header if needed
  },
  credentials: 'include'  // This sends cookies (if any) with the request, for cross-origin requests
});



const cors = require('cors');
app.use(cors({
  origin: 'http://your-frontend-domain.com',  // Allow your frontend domain
  credentials: true  // Allow cookies to be sent and received
}));


const response = await fetch('http://your-backend-url', {
    method: 'GET',
    credentials: 'include',  // This makes sure cookies are sent
    headers: {
      'Content-Type': 'application/json'
    }
  });





/////?????/////?????//////?????///-____----______Code for creating a web crwler in node______------______-////////?????/////////?????////////??/
node crawler.js



const http = require('http');
const https = require('https');
const url = require('url');

const visited = new Set();  // To keep track of visited URLs

// Helper function to make an HTTP request
const fetchPage = (urlToCrawl) => {
  return new Promise((resolve, reject) => {
    const parsedUrl = url.parse(urlToCrawl);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    protocol.get(urlToCrawl, (res) => {
      let data = '';

      // Collect data as chunks
      res.on('data', (chunk) => {
        data += chunk;
      });

      // Once the response ends, resolve with the full HTML content
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', reject);
  });
};

// Basic function to extract links from the HTML content
const extractLinks = (html) => {
  const links = [];
  const regex = /href=["'](https?:\/\/[^"']+)["']/g;
  let match;

  // Find all matches for the 'href' attribute in anchor tags
  while ((match = regex.exec(html)) !== null) {
    links.push(match[1]);
  }

  return links;
};

// The crawler function
const crawl = async (urlToCrawl) => {
  // If we've already visited this URL, skip it
  if (visited.has(urlToCrawl)) {
    console.log(`Already visited: ${urlToCrawl}`);
    return;
  }

  console.log(`Crawling: ${urlToCrawl}`);

  // Mark the URL as visited
  visited.add(urlToCrawl);

  try {
    // Fetch the HTML content of the page
    const html = await fetchPage(urlToCrawl);

    // Extract all the links from the HTML content
    const links = extractLinks(html);

    // Log the title of the page (naively assuming the title is in <title> tag)
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'No title found';
    console.log(`Page Title: ${title}`);

    // Log and crawl the found links recursively
    for (let link of links) {
      if (!visited.has(link)) {
        crawl(link);  // Recursively crawl the linked pages
      }
    }
  } catch (error) {
    console.error(`Error crawling ${urlToCrawl}:`, error.message);
  }
};

// Start crawling from a root URL
const rootURL = 'http://example.com';  // Change this to the starting URL
crawl(rootURL);














