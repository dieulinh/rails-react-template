Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'tweets#index'
  resources :tweets, only: [:index, :create]
  get 'tweets/all_tweets', to: 'tweets#tweets'
end
