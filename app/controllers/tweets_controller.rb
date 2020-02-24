class TweetsController < ApplicationController
  def index
  end
  def create
  end
  def tweets
    today = Date.today.to_s
    # Rails.cache.redis.set("hacker_posts:#{link['link']}", link.to_json)
    cache_key = "tweets"
    unless Rails.cache.redis.get(cache_key)
      Rails.cache.redis.set(cache_key, [])
    end
    render json: Rails.cache.redis.get(cache_key)
  end
end
