import feedparser

# List of RSS feed URLs
feed_urls = [
    "https://www.geographyrealm.com/feed/",  
    "https://gisgeography.com/feed/",             
    "https://www.giscloud.com/feed/",
    "https://anitagraser.com/feed/",
    "https://www.geoinformatics.com/feed/",
    "https://www.northrivergeographic.com/feed/",
    "https://www.gpsworld.com/feed/",
    "https://nathenry.com/feed.xml",
    


]

# Function to fetch and display latest entries from each feed
def fetch_rss_feeds(feed_urls):
    for feed_url in feed_urls:
        print(f"Fetching feed from: {feed_url}")
        feed = feedparser.parse(feed_url)
        
        # Display feed details
        print(f"Feed Title: {feed.feed.title}")
        print(f"Feed Link: {feed.feed.link}")
        print(f"Feed Description: {feed.feed.description}\n")

        # Iterate over each entry (post/article)
        for entry in feed.entries:
            print(f"Title: {entry.title}")
            print(f"Link: {entry.link}")
            print(f"Published: {entry.published}")
            print(f"Summary: {entry.summary}")
            print("-" * 80)

# Run the function to fetch data from all feeds
fetch_rss_feeds(feed_urls)
