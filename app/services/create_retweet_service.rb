class CreateRetweetService
  @@tweet_count = 0

  def initialize(tweet)
    @tweet = tweet
  end
  def create

    if @tweet
      @@tweet_count += 1
      tweet = {
        'tweet' => @tweet,
        'created_at' => today = DateTime.now.to_i
      }
      Rails.cache.redis.set("tweets", {}) unless Rails.cache.redis.get("tweets")
      tweets_in_str = Rails.cache.redis.get("tweets")
      tweets = JSON.parse(tweets_in_str)
      tweets[tweet['created_at']] = tweet

      Rails.cache.redis.set("tweets", tweets.to_json)
    end
  end
  def self.retweet(tweet_id, content)
  end
end
