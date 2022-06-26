Rails.application.routes.draw do
  resources :letters
 # get 'letters/', to: 'letters#index'
 # get 'letters/new'

 # post 'letters/', to: 'letters#create'

  root 'letters#index'
end
